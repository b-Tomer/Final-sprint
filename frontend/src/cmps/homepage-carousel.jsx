import React, { useState } from 'react'
import BoardImage from '../assets/img/board.webp'
import GroupImage from '../assets/img/group.webp'
import TaskImage from '../assets/img/task.webp'

export function HomeageCarousel() {
    const [selectedBtn, setSelectedBtn] = useState(0)

    const handleButtonClick = (index) => {
        setSelectedBtn(index)
    }

    const buttons = [
        {
            title: 'Boards',
            description:
                'Trellax boards keep tasks organized and work moving forward. In a glance, see everything from "things to do" to "aww yeah, we did it!"',
            image: BoardImage,
        },
        {
            title: 'Lists',
            description:
                'The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trellax.',
            image: GroupImage,
        },
        {
            title: 'Cards',
            description:
                'Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.',
            image: TaskImage,
        },
    ]

    const renderButtons = () => {
        return buttons.map((button, index) => (
            <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={selectedBtn === index ? 'selected-btn' : ''}
            >
                <div
                    className={
                        selectedBtn === index
                            ? 'selected-blue-line'
                            : 'blue-line'
                    }
                >
                    <h3>{button.title}</h3>
                    <p>{button.description}</p>
                </div>
            </button>
        ))
    }

    const renderImages = () => {
        if (selectedBtn !== null) {
            const selectedButton = buttons[selectedBtn]
            return <img src={selectedButton.image} alt={selectedButton.title} />
        }
        return null
    }

    return (
        <div className="homepage-carousel">
            <div className="buttons">{renderButtons()}</div>
            <div className="images">{renderImages()}</div>
        </div>
    )
}
