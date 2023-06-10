import { dbService } from '../../services/db.service.mjs'
import { logger } from '../../services/logger.service.mjs'
import mongodb from 'mongodb'
const { ObjectId } = mongodb

export const userService = {
    query,
    getById,
    getByMail,
    remove,
    update,
    add,
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('user')
        var users = await collection.find(criteria).toArray()
        users = users.map((user) => {
            delete user.password
            user.createdAt = ObjectId(user._id).getTimestamp()
            // Returning fake fresh data
            // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
            return user
        })
        return users
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ _id: ObjectId(userId) })
        delete user.password
        // user.givenReviews = user.givenReviews.map((review) => {
        //     delete review.byUser
        //     return review
        // })

        return user
    } catch (err) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}
async function getByMail(mail) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ mail })
        return user
    } catch (err) {
        logger.error(`while finding user by mail: ${mail}`, err)
        throw err
    }
}

async function remove(userId) {
    try {
        const collection = await dbService.getCollection('user')
        await collection.deleteOne({ _id: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function update(user) {
    try {
        // peek only updatable properties
        const userToSave = {
            _id: ObjectId(user._id), // needed for the returnd obj
            fullname: user.fullname,
        }
        const collection = await dbService.getCollection('user')
        await collection.updateOne(
            { _id: userToSave._id },
            { $set: userToSave }
        )
        return userToSave
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user) {
    try {
        // peek only updatable fields!
        const userToAdd = {
            mail: user.mail,
            password: user.password,
            fullname: user.fullname,
            imgUrl: user.imgUrl,
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('cannot add user', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
        criteria.$or = [
            {
                mail: txtCriteria,
            },
            {
                fullname: txtCriteria,
            },
        ]
    }

    return criteria
}
