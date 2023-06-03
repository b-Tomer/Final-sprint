const gBoards = [
    {
        _id: 'b101',
        title: 'Robot dev proj',
        isStarred: true,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: 'https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#a1bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                        dueDate: Date.now() + 1000000000,
                        description: 'description',
                        attachments: [
                            {
                                id: 'ZdPfm',
                                createdAt: 1590999817436,
                                url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
                            },
                        ],
                    },
                    {
                        id: 'c107',
                        title: 'Do tha7t',
                        archivedAt: 1589983468418,
                        isDone: true,
                        style: {
                            bgColor: '#22de81',
                        },
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: true,
                                    },
                                    {
                                        id: '216jX',
                                        title: 'To Do 4',
                                        isDone: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'c117',
                        title: 'Do that55',
                        archivedAt: 1589983468418,
                        dueDate: Date.now() + 1000000,
                        description: 'description',
                        style: {
                            backgroundImage:
                                'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
                        },
                        attachments: [
                            {
                                id: 'ZdPnm',
                                createdAt: 1590999817436,
                                url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
                            },
                            {
                                id: 'ZdPfm',
                                createdAt: 1590999817436,
                                url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
                            },
                        ],
                    },
                    {
                        id: 'c118',
                        title: 'Do that6',
                        archivedAt: 1589983468418,
                        dueDate: 16756215211,
                        isDone: true,
                        style: {
                            bgColor: '#f2de81',
                            backgroundImage:
                                'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
                        },
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                    {
                                        id: '216jX',
                                        title: 'To Do 4',
                                        isDone: false,
                                    },
                                ],
                            },
                            {
                                id: 'YEhmF',
                                title: 'Checklist2',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: true,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        attachments: [
                            {
                                id: 'ZdPnm',
                                createdAt: 1590999817436,
                                url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
                            },
                            {
                                id: 'ZdPfm',
                                createdAt: 1590999817436,
                                url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b102',
        title: "2022's Goals",
        isStarred: true,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b103',
        title: 'Upcoming Week',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b104',
        title: 'Project X',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b105',
        title: 'Fun Stuff',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                            backgroundImage:
                                'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b106',
        title: 'Wish List',
        isStarred: true,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage:
                'https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {
                    bgColor: '#26de81',
                },
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b107',
        title: 'React Seminar',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b108',
        title: 'Sprint 4',
        isStarred: true,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b109',
        title: 'Code Review',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
    {
        _id: 'b110',
        title: 'A Day with the Team',
        isStarred: true,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Tarablus',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'in-progress', // monday
                        priority: 'high',
                        description: 'description',
                        members: [
                            {
                                _id: 'u101',
                                username: 'Santa',
                                fullname: 'Santa Tarablus',
                                imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20220119%2Fourmid%2Fpngtree-penguin-animal-small-avatar-illustration-design-png-image_4323463.png&tbnid=K-Aa9mf_l2LAiM&vet=12ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&docid=K-MkTSAPyY_nLM&w=360&h=360&q=avatar%20small%20img&ved=2ahUKEwjJ8Ir2zaH_AhXppycCHa4nA2QQMygIegUIARDeAQ',
                            },
                            {
                                _id: 'u102',
                                fullname: 'Adi Alamdi',
                                imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsmall-avatar&psig=AOvVaw1iSnZ2a4a8Q1lScVk8B20w&ust=1685692982567000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLimuu7Nof8CFQAAAAAdAAAAABAE',
                            },
                        ],
                        comments: [
                            {
                                id: 'ZdPnm',
                                txt: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        dueDate: 16156215211,
                        byMember: {
                            _id: 'u101',
                            username: 'Tal',
                            fullname: 'Tal Tarablus',
                            imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        style: {
                            bgColor: '#26de81',
                        },
                    },
                ],
                style: {},
            },
        ],
        activities: [
            {
                id: 'a101',
                txt: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],

        cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    },
]

const user = {
    _id: 'u101',
    fullname: 'Abi Abambi',
    username: 'abi@ababmi.com',
    password: 'aBambi123',
    imgUrl: 'http://some-img.jpg',
    mentions: [
        {
            //optional
            id: 'm101',
            boardId: 'm101',
            taskId: 't101',
        },
    ],
}

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 100) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || gBoards
    return new Promise((resolve) => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
    return query(entityType).then((entities) => {
        const entity = entities.find((entity) => entity._id === entityId)
        if (!entity)
            throw new Error(
                `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
            )
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))
    newEntity._id = _makeId()
    return query(entityType).then((entities) => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
    return query(entityType).then((entities) => {
        const idx = entities.findIndex(
            (entity) => entity._id === updatedEntity._id
        )
        if (idx < 0)
            throw new Error(
                `Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`
            )
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then((entities) => {
        const idx = entities.findIndex((entity) => entity._id === entityId)
        if (idx < 0)
            throw new Error(
                `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
            )
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
