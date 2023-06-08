// const labels = [
//     {
//         "id": "l101",
//         "title": "",
//         "color": "#4bce97"
//     },
//     {
//         "id": "l102",
//         "title": "",
//         "color": "#e2b203"
//     },
//     {
//         "id": "l103",
//         "title": "",
//         "color": "#faa53d"
//     },
//     {
//         "id": "l104",
//         "title": "",
//         "color": "#f87462"
//     },
//     {
//         "id": "l105",
//         "title": "",
//         "color": "#9f8fef"
//     },
//     {
//         "id": "l106",
//         "title": "",
//         "color": "#579dff"
//     },
// ]

// const cover = [
//     "#579dff", "#9f8fef", "#f87462", "#faa53d", "#e2b203", "#4bce97", "#e774bb", "#60c6d2"

// ]


// "members": [
//     {
//         "_id": 'u101',
//         "username": "Tomer",
//         "fullname": "Tomer Benaim",
//         "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
//     },
//     {
//         "_id": "u102",
//         "fullname": "Eyal Avni",
//         "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
//     },
//     {
//         "_id": "u103",
//         "fullname": "Ohad Mazza",
//         "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
//     },
// ]


export const gBoards = [


    /***************************************************************************************************************/

    {
        "_id": "b2001",
        "title": "Marketing Campaign",
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            },
        ],
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
        },
        "groups": [
            {
                "id": "g2001",
                "title": "Planning",
                "tasks": [
                    {
                        "id": "t2001",
                        "title": "Define campaign objectives",
                        "description": "In this task, the marketing team will define the objectives and goals of the marketing campaign, including target audience, desired outcomes, and key performance indicators.",
                        "dueDate": 1751886000,
                        "labelIds": ["l103", "l102", "l105"],
                        "members": ["u101", "u102", "u103"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2001",
                                "title": "Strategy",
                                "todos": [
                                    {
                                        "id": "todo2001",
                                        "title": "Identify target audience"
                                    },
                                    {
                                        "id": "todo2002",
                                        "title": "Set campaign goals"
                                    },
                                    {
                                        "id": "todo2003",
                                        "title": "Define KPIs"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#4bce97"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2002",
                        "title": "Create marketing strategy",
                        "description": "This task involves creating a comprehensive marketing strategy for the campaign, including messaging, channels, and tactics to reach the target audience effectively.",
                        "dueDate": 1758059600000,
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t2003",
                        "members": ["u101", "u103"],
                        "title": "Research target market",
                        "description": "In this task, the marketing team will conduct research to gain insights into the target market, including demographics, preferences, and behaviors.",
                        "dueDate": 1764232400000,
                        "labelIds": ["l104", "l101"],
                        "checklists": [
                            {
                                "id": "cl2003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2007",
                                        "title": "Gather demographic data"
                                    },
                                    {
                                        "id": "todo2008",
                                        "title": "Analyze competitor strategies"
                                    },
                                    {
                                        "id": "todo2009",
                                        "title": "Identify consumer trends"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#57b1ff"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2004",
                        "title": "Set campaign budget",
                        "description": "This task involves determining the budget allocated for the marketing campaign, including expenses for advertising, content creation, and promotional activities.",
                        "dueDate": 1770405200000,
                        "style": {
                            "bgColor": "#ff7b51"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g2002",
                "title": "Content Creation",
                "tasks": [
                    {
                        "id": "t2005",
                        "labelIds": ["l104", "l106"],
                        "members": ["u102", "u103"],
                        "attachments": [
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "title": "Write blog articles",
                        "description": "In this task, the content team will create engaging and informative blog articles related to the marketing campaign's theme and target audience.",
                        "dueDate": 1776578000000,
                        "attachments": [
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2005",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2013",
                                        "title": "Research relevant topics",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo2014",
                                        "title": "Outline article structure",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo2015",
                                        "title": "Write and proofread content"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t2006",
                        "title": "Create social media graphics",
                        "description": "This task involves designing visually appealing graphics and images for social media posts to promote the marketing campaign effectively.",
                        "dueDate": 1782750800000,
                        "checklists": [
                            {
                                "id": "cl2006",
                                "labelIds": ["l103", "l102", "l105"],
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2016",
                                        "title": "Identify key campaign visuals"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#ff9051"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2007",
                        "title": "Produce video content",
                        "description": "In this task, the multimedia team will produce engaging video content, including promotional videos, tutorials, and product demonstrations.",
                        "dueDate": 1788923600000,
                        "members": ["u103"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2007",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2019",
                                        "title": "Develop video concepts"
                                    },
                                    {
                                        "id": "todo2020",
                                        "title": "Scriptwriting and storyboarding",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo2021",
                                        "title": "Shoot and edit video footage",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#51ff9b"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t2008",
                        "title": "Design marketing collaterals",
                        "description": "This task involves creating visually appealing marketing collaterals, such as brochures, flyers, and infographics, to support the marketing campaign.",
                        "dueDate": 1795090000,
                        "checklists": [
                            {
                                "id": "cl2008",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2022",
                                        "title": "Design brochure layout"
                                    },
                                    {
                                        "id": "todo2023",
                                        "title": "Create flyer templates"
                                    },
                                    {
                                        "id": "todo2024",
                                        "title": "Design infographics"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#ff5151"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g2003",
                "title": "Promotion",
                "tasks": [
                    {
                        "id": "t2009",
                        "members": ["u101", "u102", "u103"],
                        "labelIds": ["l101", "l106"],
                        "title": "Run social media ad campaigns",
                        "description": "This task involves creating and running targeted social media ad campaigns to reach a wider audience and generate awareness about the marketing campaign.",
                        "dueDate": 1801269200,
                        "attachments": [
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2009",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2025",
                                        "title": "Define ad targeting criteria"
                                    },
                                    {
                                        "id": "todo2026",
                                        "title": "Create ad visuals and copy"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#5ba3ff"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2011",
                        "title": "Collaborate with influencers",
                        "description": "This task involves identifying and collaborating with influencers who can promote the marketing campaign to their followers and increase brand visibility.",
                        "dueDate": 1813614800000,
                        "checklists": [
                            {
                                "id": "cl2011",
                                "title": "Checklist 1",
                                "labelIds": ["l103", "l102", "l105"],
                                "todos": [
                                    {
                                        "id": "todo20j1",
                                        "title": "Research relevant influencers",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2032",
                                        "title": "Reach out and negotiate partnerships",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2033",
                                        "title": "Monitor influencer activities",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2031",
                                        "title": "Research relevant influencers",
                                        "isDone": true

                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://media.giphy.com/media/Bz3J61Fswq1zdruPBI/giphy.gif"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2010",
                        "title": "Email marketing",
                        "labelIds": ["l104", "l106"],
                        "members": ["u102", "u103"],
                        "description": "In this task, the marketing team will create and send targeted email campaigns to engage with potential customers and drive them towards the desired action.",
                        "dueDate": 1807442000000,
                        "checklists": [
                            {
                                "id": "cl2010",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2028",
                                        "title": "Segment email list",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo2029",
                                        "title": "Create email templates"
                                    },
                                    {
                                        "id": "todo2030",
                                        "title": "Schedule and send emails"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#ff51dd"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g2004",
                "title": "Measurement",
                "tasks": [
                    {
                        "id": "t2012",
                        "title": "Set up tracking and analytics",
                        "description": "In this task, the marketing team will set up tracking and analytics tools to monitor the performance and effectiveness of the marketing campaign.",
                        "dueDate": 1819787600000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2012",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2034",
                                        "title": "Install tracking codes",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2035",
                                        "title": "Set up conversion goals"
                                    },

                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#51ffcf"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2013",
                        "labelIds": ["l101", "l105"],
                        "title": "Monitor campaign performance",
                        "description": "This task involves regularly monitoring and analyzing the performance of the marketing campaign using the established tracking and analytics systems.",
                        "dueDate": 1825960000,
                        "members": ["u101", "u103"],
                        "attachments": [
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl2013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2037",
                                        "title": "Track website traffic and conversions"
                                    },
                                    {
                                        "id": "todo2038",
                                        "title": "Analyze social media engagement"
                                    },
                                    {
                                        "id": "todo2039",
                                        "title": "Monitor email campaign metrics"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#ff5151"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2014",
                        "title": "Generate campaign reports",
                        "description": "In this task, the marketing team will compile and generate comprehensive reports that provide insights and analysis of the marketing campaign's performance and outcomes.",
                        "dueDate": 1832133200000,
                        "labelIds": ["l103", "l102", "l105"],
                        "checklists": [
                            {
                                "id": "cl2014",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2040",
                                        "title": "Compile data and metrics",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2041",
                                        "title": "Create visual representations",
                                        "isDone": true

                                    },
                                    {
                                        "id": "todo2042",
                                        "title": "Summarize key findings",
                                        "isDone": true

                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#fffc51"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g2005",
                "title": "Optimization",
                "tasks": [
                    {
                        "id": "t2015",
                        "title": "Analyze campaign data",
                        "members": ["u103"],
                        "description": "This task involves analyzing the collected campaign data to identify areas of improvement and optimize the marketing campaign's performance.",
                        "dueDate": 1838306000000,
                        "checklists": [
                            {
                                "id": "cl2015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2043",
                                        "title": "Identify underperforming channels",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#a651ff"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2016",
                        "title": "Optimize ad campaigns",
                        "description": "In this task, the marketing team will make data-driven optimizations to the ad campaigns, including adjusting targeting, ad creatives, and bidding strategies.",
                        "dueDate": 1844478800000,
                        "labelIds": ["l101", "l102", "l103"],
                        "checklists": [
                            {
                                "id": "cl2016",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2046",
                                        "title": "Analyze ad performance metrics"
                                    },
                                    {
                                        "id": "todo2047",
                                        "title": "Refine audience targeting"
                                    },
                                    {
                                        "id": "todo2048",
                                        "title": "Optimize ad creatives"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#51ffe9"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t2017",
                        "title": "Improve email campaigns",
                        "description": "This task involves analyzing email campaign metrics and making improvements to the email content, subject lines, and targeting to increase engagement and conversions.",
                        "dueDate": 1850651600000,
                        "members": ["u101", "u102", "u103"],
                        "checklists": [
                            {
                                "id": "cl2017",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo2049",
                                        "title": "Review email open and click rates"
                                    },
                                    {
                                        "id": "todo2050",
                                        "title": "Optimize email subject lines",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo2051",
                                        "title": "A/B test email content variations",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#ff7b51"
                        },
                        "isDone": false
                    }
                ]
            }
        ]
    }




    ,
    /***************************************************************************************************************/
    {
        "_id": "b1003",
        "title": "Project Development team 2",
        "isStarred": true,
        "archivedAt": 1653085267000,
        "createdBy": {
            "id": "u101",
            "fullname": "John Smith",
            "imgUrl": "https://example.com/user1.jpg"
        },
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            },
        ],
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "groups": [
            {
                "id": "g1001",
                "title": "Backlog",
                "tasks": [
                    {
                        "id": "t1001",
                        "title": "Prepare project proposal",
                        "description": "This task involves preparing a detailed project proposal for client review. It should include information about project scope, objectives, deliverables, timeline, and budget.",
                        "dueDate": 1675215600000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl1001",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1001",
                                        "title": "Gather client requirements"
                                    },
                                    {
                                        "id": "todo1002",
                                        "title": "Define project goals"
                                    },
                                    {
                                        "id": "todo1003",
                                        "title": "Identify project stakeholders"
                                    }
                                ]
                            },
                            {
                                "id": "cl1002",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo1004",
                                        "title": "Research similar projects"
                                    },
                                    {
                                        "id": "todo1005",
                                        "title": "Outline project timeline"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9f8fef"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t1002",
                        "title": "Design user interface",
                        "description": "In this task, the team will create a user-friendly interface design for the project. The design should be visually appealing, intuitive to use, and aligned with the project's branding guidelines.",
                        "dueDate": 1660086000000,
                        "checklists": [
                            {
                                "id": "cl1003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1006",
                                        "title": "Create wireframes"
                                    },
                                    {
                                        "id": "todo1007",
                                        "title": "Design mockups"
                                    },
                                    {
                                        "id": "todo1008",
                                        "title": "Review and refine designs"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#e2b203"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g1002",
                "title": "In Progress",
                "tasks": [
                    {
                        "id": "t1003",
                        "title": "Set up development environment",
                        "description": "This task involves setting up the development environment with the required tools and technologies. It includes installing necessary software, configuring development environments, and setting up version control systems.",
                        "dueDate": 1679670000000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl1004",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1009",
                                        "title": "Install IDE"
                                    },
                                    {
                                        "id": "todo1010",
                                        "title": "Set up database"
                                    },
                                    {
                                        "id": "todo1011",
                                        "title": "Configure version control"
                                    }
                                ]
                            },
                            {
                                "id": "cl1005",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo1012",
                                        "title": "Install necessary libraries and frameworks"
                                    },
                                    {
                                        "id": "todo1013",
                                        "title": "Configure build tools"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#faa53d",
                            "backgroundImage": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=628&q=80",
                        },
                        "isDone": false
                    },
                    {
                        "id": "t1004",
                        "title": "Implement backend functionality",
                        "description": "This task involves developing the backend functionality of the project. It includes designing and implementing APIs, database models, and business logic.",
                        "dueDate": 1683010800000,
                        "checklists": [
                            {
                                "id": "cl1006",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1014",
                                        "title": "Define API endpoints"
                                    },
                                    {
                                        "id": "todo1015",
                                        "title": "Implement database models"
                                    },
                                    {
                                        "id": "todo1016",
                                        "title": "Write business logic"
                                    }
                                ]
                            },
                            {
                                "id": "cl1007",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo1017",
                                        "title": "Handle authentication and authorization"
                                    },
                                    {
                                        "id": "todo1018",
                                        "title": "Implement data validation and error handling"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#f87462"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t1005",
                        "title": "Frontend development",
                        "description": "In this task, the team will work on the frontend development of the project. It includes implementing user interfaces, integrating with backend APIs, and handling user interactions.",
                        "dueDate": 1688540400000,
                        "checklists": [
                            {
                                "id": "cl1008",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1019",
                                        "title": "Create reusable UI components"
                                    },
                                    {
                                        "id": "todo1020",
                                        "title": "Integrate with backend APIs"
                                    },
                                    {
                                        "id": "todo1021",
                                        "title": "Implement user interactions"
                                    }
                                ]
                            },
                            {
                                "id": "cl1009",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo1022",
                                        "title": "Optimize performance and responsiveness"
                                    },
                                    {
                                        "id": "todo1023",
                                        "title": "Handle edge cases and errors"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9f8fef"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g1003",
                "title": "Review",
                "tasks": [
                    {
                        "id": "t1006",
                        "title": "Perform code review",
                        "description": "In this task, the team will conduct code reviews to ensure code quality, adherence to best practices, and identify any potential bugs or issues.",
                        "dueDate": 1694070000000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl1010",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1024",
                                        "title": "Review coding standards and conventions"
                                    },
                                    {
                                        "id": "todo1025",
                                        "title": "Identify potential code smells and anti-patterns"
                                    },
                                    {
                                        "id": "todo1026",
                                        "title": "Suggest improvements and optimizations"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#e2b203"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t1007",
                        "title": "Conduct user testing",
                        "description": "This task involves conducting user testing sessions to gather feedback on the project's usability and identify any usability issues or areas for improvement.",
                        "dueDate": 1699983600000,
                        "checklists": [
                            {
                                "id": "cl1011",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1027",
                                        "title": "Recruit user testers"
                                    },
                                    {
                                        "id": "todo1028",
                                        "title": "Prepare test scenarios"
                                    },
                                    {
                                        "id": "todo1029",
                                        "title": "Analyze user feedback"
                                    }
                                ]
                            },
                            {
                                "id": "cl1012",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo1030",
                                        "title": "Identify usability issues"
                                    },
                                    {
                                        "id": "todo1031",
                                        "title": "Document findings and recommendations"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#faa53d"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g1004",
                "title": "Testing",
                "tasks": [
                    {
                        "id": "t1008",
                        "title": "Perform unit testing",
                        "description": "In this task, the team will write and execute unit tests to verify the functionality of individual components, ensuring they work as expected and catch any bugs or errors.",
                        "dueDate": 1705654000000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl1013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1032",
                                        "title": "Write unit test cases"
                                    },
                                    {
                                        "id": "todo1033",
                                        "title": "Execute unit tests"
                                    },
                                    {
                                        "id": "todo1034",
                                        "title": "Fix failing tests"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t1009",
                        "title": "Perform integration testing",
                        "description": "This task involves performing integration testing to validate the interaction between different components of the project and ensure they work together correctly.",
                        "dueDate": 1711724400000,
                        "checklists": [
                            {
                                "id": "cl1014",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1035",
                                        "title": "Identify integration points"
                                    },
                                    {
                                        "id": "todo1036",
                                        "title": "Write integration test cases"
                                    },
                                    {
                                        "id": "todo1037",
                                        "title": "Execute integration tests"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9f8fef",
                            "backgroundImage": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t1010",
                        "title": "Perform system testing",
                        "description": "In this task, the team will perform system testing to evaluate the overall functionality, performance, and reliability of the project as a whole.",
                        "dueDate": 1717897200000,
                        "checklists": [
                            {
                                "id": "cl1015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1038",
                                        "title": "Prepare system test cases"
                                    },
                                    {
                                        "id": "todo1039",
                                        "title": "Execute system tests"
                                    },
                                    {
                                        "id": "todo1040",
                                        "title": "Document test results"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g1005",
                "title": "Deployment",
                "tasks": [
                    {
                        "id": "t1011",
                        "title": "Prepare production environment",
                        "description": "In this task, the team will set up the production environment for the project. It includes configuring servers, databases, and other necessary infrastructure components.",
                        "dueDate": 1724466800000,
                        "checklists": [
                            {
                                "id": "cl1016",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1041",
                                        "title": "Provision servers and infrastructure"
                                    },
                                    {
                                        "id": "todo1042",
                                        "title": "Set up production database"
                                    },
                                    {
                                        "id": "todo1043",
                                        "title": "Configure load balancers"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#4bce97"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t1012",
                        "title": "Deploy application",
                        "description": "This task involves deploying the application to the production environment. It includes packaging the application, deploying it to servers, and verifying its functionality.",
                        "dueDate": 1730639600000,
                        "checklists": [
                            {
                                "id": "cl1017",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1044",
                                        "title": "Package application for deployment"
                                    },
                                    {
                                        "id": "todo1045",
                                        "title": "Deploy application to servers"
                                    },
                                    {
                                        "id": "todo1046",
                                        "title": "Perform smoke tests"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#e2b203"
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g1006",
                "title": "Maintenance",
                "tasks": [
                    {
                        "id": "t1013",
                        "title": "Monitor application performance",
                        "description": "In this task, the team will monitor the performance of the deployed application, track system metrics, and identify any performance issues or bottlenecks.",
                        "dueDate": 1737313000,
                        "checklists": [
                            {
                                "id": "cl1018",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1047",
                                        "title": "Set up monitoring tools"
                                    },
                                    {
                                        "id": "todo1048",
                                        "title": "Monitor system metrics"
                                    },
                                    {
                                        "id": "todo1049",
                                        "title": "Analyze performance data"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#f87462"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t1014",
                        "title": "Address reported issues",
                        "description": "This task involves addressing reported issues and bugs that are identified by users or detected through monitoring systems.",
                        "dueDate": 1744806000000,
                        "checklists": [
                            {
                                "id": "cl1019",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo1050",
                                        "title": "Identify reported issues"
                                    },
                                    {
                                        "id": "todo1051",
                                        "title": "Reproduce reported issues"
                                    },
                                    {
                                        "id": "todo1052",
                                        "title": "Fix reported issues"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9f8fef"
                        },
                        "isDone": false
                    }
                ]
            }
        ]
    }



    ,
    /***************************************************************************************************************/

    {
        "_id": "b3001",
        "title": "Product Development",
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            },
        ],
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        "groups": [
            {
                "id": "g3001",
                "title": "Ideation",
                "tasks": [
                    {
                        "id": "t3001",
                        "title": "Brainstorm product ideas",
                        "description": "In this task, the team will brainstorm and generate various product ideas, considering market demand, user needs, and innovation.",
                        "dueDate": 1751886800000,
                        "attachments": ["https://example.com/attachment1.pdf"],
                        "labelIds": ["l103", "l102", "l105"],
                        "checklists": [
                            {
                                "id": "cl3001",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3001",
                                        "title": "Research market trends",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3002",
                                        "title": "Identify user pain points",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3003",
                                        "title": "Generate innovative ideas",
                                        "isDone": true
                                    }
                                ]
                            },
                            {
                                "id": "cl3002",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3004",
                                        "title": "Evaluate feasibility",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3005",
                                        "title": "Prioritize ideas",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
                            "bgColor": "#FF5722"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t3002",
                        "title": "Create concept sketches",
                        "description": "This task involves creating rough concept sketches and visual representations of the product ideas to better visualize and communicate the concepts.",
                        "attachments": ["https://example.com/attachment2.jpg"],
                        "dueDate": 1751800000,
                        "checklists": [
                            {
                                "id": "cl3003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3006",
                                        "title": "Sketch initial ideas",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3007",
                                        "title": "Refine concept sketches",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3008",
                                        "title": "Get feedback from team",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#795548"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t3003",
                        "title": "Validate product concepts",
                        "description": "In this task, the team will validate the product concepts through user research, surveys, and feedback to ensure market fit and user satisfaction.",
                        "dueDate": 176400000,
                        "labelIds": ["l102", "l101", "l105"],
                        "attachments": ["https://example.com/attachment3.xlsx"],
                        "checklists": [
                            {
                                "id": "cl3004",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3009",
                                        "title": "Conduct user interviews",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3010",
                                        "title": "Run usability tests",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl3005",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3011",
                                        "title": "Analyze survey results",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3012",
                                        "title": "Identify user preferences",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3013",
                                        "title": "Validate market demand",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FF9800"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g3002",
                "title": "Design",
                "tasks": [
                    {
                        "id": "t3004",
                        "title": "Create wireframes",
                        "labelIds": ["l101", "l102", "l104"],
                        "description": "This task involves creating wireframes to define the layout, structure, and interaction flow of the product's user interface.",
                        "attachments": ["https://example.com/attachment4.png"],
                        "dueDate": 1751886000,
                        "checklists": [
                            {
                                "id": "cl3006",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3014",
                                        "title": "Sketch wireframe ideas",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3015",
                                        "title": "Refine wireframes",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3016",
                                        "title": "Get feedback from stakeholders",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3017",
                                        "title": "Finalize wireframes",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#2196F3"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t3005",
                        "title": "Create visual designs",
                        "dueDate": 1758868000,
                        "description": "In this task, the design team will create visual designs, including color schemes, typography, and graphical elements, to establish the product's visual identity.",
                        "labelIds": ["l104", "l106"],
                        "checklists": [
                            {
                                "id": "cl3007",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3018",
                                        "title": "Design color schemes",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3019",
                                        "title": "Define typography",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3020",
                                        "title": "Create graphical elements",
                                        "isDone": true
                                    }
                                ]
                            },
                            {
                                "id": "cl3008",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3021",
                                        "title": "Create style guide",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3022",
                                        "title": "Review visual designs",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", "bgColor": "#673AB7"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t3006",
                        "title": "Develop prototypes",
                        "description": "This task involves creating interactive prototypes to test and validate the product's usability, user experience, and functionality.",
                        "attachments": ["https://example.com/attachment5.zip"],
                        "checklists": [
                            {
                                "id": "cl3009",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3023",
                                        "title": "Define prototype interactions",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3024",
                                        "title": "Build prototype screens",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3025",
                                        "title": "Add interactive elements",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3026",
                                        "title": "Test prototype usability",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl3010",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3027",
                                        "title": "Gather feedback on prototypes",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3028",
                                        "title": "Iterate based on feedback",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3029",
                                        "title": "Finalize prototypes",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#009688"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g3003",
                "title": "Development",
                "tasks": [
                    {
                        "id": "t3007",
                        "title": "Implement backend functionality",
                        "description": "In this task, the development team will implement the backend functionality of the product, including server-side logic, APIs, and database integration.",
                        "attachments": ["https://example.com/attachment6.docx"],
                        "labelIds": ["l101", "l104"],
                        "checklists": [
                            {
                                "id": "cl3011",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3030",
                                        "title": "Define database schema",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3031",
                                        "title": "Implement server-side logic",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3032",
                                        "title": "Create APIs",
                                        "isDone": true
                                    }
                                ]
                            },
                            {
                                "id": "cl3012",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3033",
                                        "title": "Test backend functionality",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo3034",
                                        "title": "Optimize performance",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#CDDC39"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t3008",
                        "title": "Develop frontend components",
                        "attachments": [
                            {
                                id: 'ZdPfm',
                                createdAt: 1590999817436,
                                url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
                            },
                        ],
                        "dueDate": 1751884000,
                        "description": "This task involves developing frontend components and user interfaces based on the approved designs and prototypes.",
                        "checklists": [
                            {
                                "id": "cl3013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3035",
                                        "title": "Create HTML/CSS templates",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3036",
                                        "title": "Implement responsive design",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl3014",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo3037",
                                        "title": "Integrate with backend APIs",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3038",
                                        "title": "Implement frontend interactivity",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFC107"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t3009",
                        "title": "Perform unit testing",
                        "description": "In this task, the development team will perform unit testing on individual components and modules to ensure their functionality and identify any bugs or issues.",
                        "labelIds": ["l106", "l103"],
                        "checklists": [
                            {
                                "id": "cl3015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo3039",
                                        "title": "Write test cases",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo3040",
                                        "title": "Execute unit tests",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": false
                    }
                ]
            }
        ]
    }






    ,
    /****************************************************************************************************************** */
    // {
    //     _id: 'b10002',
    //     title: 'Robot dev proj',
    //     isStarred: true,
    //     archivedAt: 1589983468418,
    //     createdBy: {
    //         id: 'u101',
    //         fullname: 'Abi Abambi',
    //         imgUrl: 'http://some-img',
    //     },
    //     style: {
    //         backgroundImage: 'https://cdn.britannica.com/06/96306-050-DFE8AFDC/Khao-Tapu-Ao-Phang-na-Thailand-National-Park.jpg',
    //     },
    //     labels: [
    //         {
    //             id: 'l101',
    //             title: 'Done',
    //             color: '#61bd4f',
    //         },
    //         {
    //             id: 'l102',
    //             title: 'Progress',
    //             color: '#a1bd33',
    //         },
    //     ],
    //     members: [
    //         {
    //             _id: 'u101',
    //             fullname: 'Tal Tarablus',
    //             imgUrl: 'https://www.google.com',
    //         },
    //     ],
    //     groups: [

    //         ,
    //         {
    //             id: 'g101',
    //             title: 'Group 1',
    //             archivedAt: 1589983468418,
    //             tasks: [
    //                 {
    //                     id: 'c101',
    //                     title: 'Replace logo',
    //                 },
    //                 {
    //                     id: 'c102',
    //                     title: 'Add Samples',
    //                 },
    //             ],
    //             style: {},
    //         },
    //         {
    //             id: 'g102',
    //             title: 'Group 2',
    //             tasks: [
    //                 {
    //                     id: 'c103',
    //                     title: 'Do that',
    //                     archivedAt: 1589983468418,
    //                     dueDate: Date.now() + 1000000000,
    //                     description: 'description',
    //                     attachments: [
    //                         {
    //                             id: 'ZdPfm',
    //                             createdAt: 1590999817436,
    //                             url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
    //                         },
    //                     ],

    //                 },
    //                 {
    //                     id: 'c107',
    //                     title: 'Do tha7t',
    //                     archivedAt: 1589983468418,
    //                     isDone: true,
    //                     style: {
    //                         bgColor: '#22de81',
    //                     },
    //                     checklists: [
    //                         {
    //                             id: 'YEhmF',
    //                             title: 'Checklist',
    //                             todos: [
    //                                 {
    //                                     id: '212jX',
    //                                     title: 'To Do 1',
    //                                     isDone: true,
    //                                 },
    //                                 {
    //                                     id: '216jX',
    //                                     title: 'To Do 4',
    //                                     isDone: true,
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     id: 'c117',
    //                     title: 'Do that55',
    //                     archivedAt: 1589983468418,
    //                     dueDate: Date.now() + 1000000,
    //                     description: 'description',
    //                     style: {
    //                         backgroundImage:
    //                             'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
    //                     },
    //                     attachments: [
    //                         {
    //                             id: 'ZdPnm',
    //                             createdAt: 1590999817436,
    //                             url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    //                         },
    //                         {
    //                             id: 'ZdPfm',
    //                             createdAt: 1590999817436,
    //                             url: 'https://img.freepik.com/free-vector/sticker-template-cat-cartoon-character_1308-73786.jpg?w=2000',
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     id: 'c118',
    //                     title: 'Do that6',
    //                     archivedAt: 1589983468418,
    //                     dueDate: 16756215211,
    //                     isDone: true,
    //                     style: {
    //                         bgColor: '#f2de81',
    //                         backgroundImage:
    //                             'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    //                     },
    //                     checklists: [
    //                         {
    //                             id: 'YEhmF',
    //                             title: 'Checklist',
    //                             todos: [
    //                                 {
    //                                     id: '212jX',
    //                                     title: 'To Do 1',
    //                                     isDone: false,
    //                                 },
    //                                 {
    //                                     id: '216jX',
    //                                     title: 'To Do 4',
    //                                     isDone: false,
    //                                 },
    //                             ],
    //                         },
    //                         {
    //                             id: 'YEhmF',
    //                             title: 'Checklist2',
    //                             todos: [
    //                                 {
    //                                     id: '212jX',
    //                                     title: 'To Do 1',
    //                                     isDone: true,
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                 },
    //                 {
    //                     id: 'c104',
    //                     title: 'Help me',
    //                     status: 'in-progress', // monday
    //                     priority: 'high',
    //                     description: 'description',
    //                     "members": [
    //                         {
    //                             "_id": 'u101',
    //                             "username": "Tomer",
    //                             "fullname": "Tomer Benaim",
    //                             "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
    //                         },
    //                         {
    //                             "_id": "u102",
    //                             "fullname": "Eyal Avni",
    //                             "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
    //                         },
    //                         {
    //                             "_id": "u103",
    //                             "fullname": "Ohad Mazza",
    //                             "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
    //                         },
    //                     ],
    //                     comments: [
    //                         {
    //                             id: 'ZdPnm',
    //                             txt: 'also @yaronb please CR this',
    //                             createdAt: 1590999817436,
    //                             byMember: {
    //                                 _id: 'u101',
    //                                 fullname: 'Tal Tarablus',
    //                                 imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
    //                             },
    //                         },
    //                     ],
    // "attachments": [
    //     {
    //         "id": "a101",
    //         "createdAt": 159099981743,
    //         "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
    //     },
    //     {
    //         "id": "a102",
    //         "createdAt": 1590999817436,
    //         "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
    //     },
    //     {
    //         "id": "a103",
    //         "createdAt": 1590999817439,
    //         "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
    //     },
    // ],
    //                     checklists: [
    //                         {
    //                             id: 'YEhmF',
    //                             title: 'Checklist',
    //                             todos: [
    //                                 {
    //                                     id: '212jX',
    //                                     title: 'To Do 1',
    //                                     isDone: false,
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                     memberIds: ['u101'],
    //                     labelIds: ['l101', 'l102'],
    //                     dueDate: 16156215211,
    //                     byMember: {
    //                         _id: 'u101',
    //                         username: 'Tal',
    //                         fullname: 'Tal Tarablus',
    //                         imgUrl: 'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
    //                     },
    //                     style: {
    //                         bgColor: '#26de81',
    //                     },
    //                 },
    //             ],
    //             style: {},
    //         },
    //     ],
    //     activities: [
    //         {
    //             id: 'a101',
    //             txt: 'Changed Color',
    //             createdAt: 154514,
    //             byMember: {
    //                 _id: 'u101',
    //                 fullname: 'Abi Abambi',
    //                 imgUrl: 'http://some-img',
    //             },
    //             task: {
    //                 id: 'c101',
    //                 title: 'Replace Logo',
    //             },
    //         },
    //     ],

    //     cmpsOrder: ['status-picker', 'member-picker', 'date-picker'],
    // },

    /********************************************************************************************************************* */

    {
        "_id": "b4001",
        "title": "Product Launch",
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1091&q=80"
        },
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            }
        ],
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "groups": [
            {
                "id": "g4001",
                "title": "Preparation",
                "tasks": [
                    {
                        "id": "t4001",
                        "title": "Define product positioning",
                        "description": "In this task, the marketing team will define the unique selling proposition and positioning of the product in the market.",
                        "dueDate": 1675107600000,
                        "members": ["u103"],
                        "checklists": [
                            {
                                "id": "cl4001",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4001",
                                        "title": "Identify target audience",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4002",
                                        "title": "Analyze competitor positioning",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4003",
                                        "title": "Craft unique value proposition",
                                        "isDone": true
                                    }
                                ]
                            },
                            {
                                "id": "cl4002",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo4004",
                                        "title": "Define key messaging",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4002",
                        "title": "Create marketing collateral",
                        "description": "This task involves designing and creating marketing collateral such as brochures, product sheets, and presentation decks.",
                        "members": ["u102"],
                        "checklists": [
                            {
                                "id": "cl4003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4005",
                                        "title": "Design brochure",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4006",
                                        "title": "Create product sheets",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4007",
                                        "title": "Prepare presentation deck",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl4004",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo4008",
                                        "title": "Review and finalize collateral",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FF5722"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4003",
                        "title": "Prepare launch event",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl4005",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4009",
                                        "title": "Select event venue",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4010",
                                        "title": "Arrange catering services",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4011",
                                        "title": "Invite guests and attendees",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4012",
                                        "title": "Prepare event agenda",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://media.giphy.com/media/VMO6qeIbr7JRLnLTGw/giphy.gif"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g4002",
                "title": "Marketing",
                "labels": [
                    {
                        "id": "l101",
                        "title": "Marketing",
                        "color": "#4bce97"
                    },
                    {
                        "id": "l102",
                        "title": "Frontend",
                        "color": "#e2b203"
                    },
                    {
                        "id": "l103",
                        "title": "Backend",
                        "color": "#faa53d"
                    },
                    {
                        "id": "l104",
                        "title": "Finance",
                        "color": "#f87462"
                    },
                    {
                        "id": "l105",
                        "title": "Operations",
                        "color": "#9f8fef"
                    },
                    {
                        "id": "l106",
                        "title": "Manufacturing",
                        "color": "#579dff"
                    }
                ],
                "tasks": [
                    {
                        "id": "t4004",
                        "title": "Develop marketing campaigns",
                        "description": "In this task, the marketing team will create and execute various marketing campaigns to promote the product.",
                        "dueDate": 1747534800000,
                        "members": ["u101", "u102", "u103"],
                        "labelIds": ['l101', 'l102'],
                        "checklists": [
                            {
                                "id": "cl4006",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4013",
                                        "title": "Identify campaign goals",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4014",
                                        "title": "Create campaign messaging",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4015",
                                        "title": "Choose marketing channels",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4016",
                                        "title": "Set campaign budget",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FF9800"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4005",
                        "title": "Execute digital advertising",
                        "members": ["u101"],
                        "checklists": [
                            {
                                "id": "cl4007",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4017",
                                        "title": "Create ad copy and visuals",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4018",
                                        "title": "Set up ad campaigns",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4019",
                                        "title": "Monitor ad performance",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4006",
                        "title": "Social media engagement",
                        "dueDate": 1751884000,
                        "checklists": [
                            {
                                "id": "cl4008",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4020",
                                        "title": "Create social media content",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4021",
                                        "title": "Schedule posts",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4022",
                                        "title": "Engage with followers",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl4009",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo4023",
                                        "title": "Monitor social media metrics",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#009688"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4007",
                        "title": "Email marketing",
                        "members": ["u101", "u102"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            }
                        ],
                        "checklists": [
                            {
                                "id": "cl4010",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4024",
                                        "title": "Build email subscriber list",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4025",
                                        "title": "Create email templates",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4026",
                                        "title": "Segment audience",
                                        "isDone": false
                                    }
                                ]
                            },
                            {
                                "id": "cl4011",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo4027",
                                        "title": "Send targeted email campaigns",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4028",
                                        "title": "Analyze email performance",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g4003",
                "title": "Sales",
                "tasks": [
                    {
                        "id": "t4008",
                        "members": ["u102", "u103"],
                        "title": "Sales training",
                        "description": "In this task, the sales team will undergo training sessions to familiarize themselves with the product features, benefits, and sales techniques.",
                        "dueDate": 1754307600000,
                        "labelIds": ["l103", "l102", "l105"],
                        "checklists": [
                            {
                                "id": "cl4012",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4029",
                                        "title": "Organize product training sessions",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4030",
                                        "title": "Prepare sales training materials",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4031",
                                        "title": "Conduct role-playing exercises",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4009",
                        "title": "Lead generation",
                        "description": "This task involves designing and creating marketing ",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl4013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4032",
                                        "title": "Identify target leads",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4033",
                                        "title": "Create lead generation campaigns",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4034",
                                        "title": "Track and qualify leads",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4010",
                        "members": ["u101", "u102", "u103"],
                        "title": "Sales meetings",
                        "labelIds": ["l104", "l102", "l101"],
                        "checklists": [
                            {
                                "id": "cl4014",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4035",
                                        "title": "Schedule meetings with prospects",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4036",
                                        "title": "Prepare sales presentations",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4037",
                                        "title": "Follow up with meeting attendees",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFEB3B"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4011",
                        "title": "Negotiations and closing",
                        "dueDate": 1808325200000,
                        "checklists": [
                            {
                                "id": "cl4015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4038",
                                        "title": "Negotiate terms and pricing",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4039",
                                        "title": "Address customer concerns",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4040",
                                        "title": "Finalize contract and close the sale",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9E9E9E"
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g4004",
                "title": "Product Development",
                "tasks": [
                    {
                        "id": "t4012",
                        "members": ["u101", "u102", "u103"],
                        "title": "Gather user feedback",
                        "dueDate": 17518844000,
                        "labelIds": ["l104", "l106"],
                        "checklists": [
                            {
                                "id": "cl4016",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4041",
                                        "title": "Conduct user surveys",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4042",
                                        "title": "Analyze user feedback",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#673AB7"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4013",
                        "title": "Implement product enhancements",
                        "description": "Based on user feedback, the development team will implement improvements and new features to enhance the product.",
                        "checklists": [
                            {
                                "id": "cl4017",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4043",
                                        "title": "Prioritize enhancement requests",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4044",
                                        "title": "Plan and allocate development resources",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4045",
                                        "title": "Implement and test enhancements",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#795548"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4014",
                        "title": "Quality assurance",
                        "labelIds": ["l101", "l104", "l106"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g4005",
                "title": "Post-Launch",
                "tasks": [
                    {
                        "id": "t4015",
                        "members": ["u103"],
                        "title": "Monitor product performance",
                        "checklists": [
                            {
                                "id": "cl4019",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4049",
                                        "title": "Track user adoption and engagement",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4050",
                                        "title": "Analyze key product metrics",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#3F51B5"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4016",
                        "title": "Customer support",
                        "dueDate": 17518844000,
                        "checklists": [
                            {
                                "id": "cl4020",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4051",
                                        "title": "Set up customer support channels",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4052",
                                        "title": "Train support team",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4053",
                                        "title": "Resolve customer issues",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4017",
                        "members": ["u101", "u103"],
                        "title": "Collect testimonials and reviews",
                        "labelIds": ["l104", "l106", "l101"],
                        "checklists": [
                            {
                                "id": "cl4021",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4054",
                                        "title": "Reach out to satisfied customers",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4055",
                                        "title": "Request testimonials and reviews",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#4CAF50"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g4006",
                "title": "Analytics",
                "tasks": [
                    {
                        "id": "t4018",
                        "title": "Data collection and analysis",
                        "members": ["u101", "u102", "u103"],
                        "checklists": [
                            {
                                "id": "cl4022",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4056",
                                        "title": "Set up analytics tools",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4057",
                                        "title": "Collect relevant data",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4058",
                                        "title": "Analyze data and generate reports",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#2196F3"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t4019",
                        "title": "User behavior tracking",
                        "checklists": [
                            {
                                "id": "cl4023",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4059",
                                        "title": "Implement user tracking mechanisms",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4060",
                                        "title": "Analyze user behavior patterns",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#E91E63"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t4020",
                        "title": "Reporting and insights",
                        "labelIds": ["l101", "l104"],
                        "checklists": [
                            {
                                "id": "cl4024",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo4061",
                                        "title": "Create regular performance reports",
                                        "isDone": true
                                    },
                                    {
                                        "id": "todo4062",
                                        "title": "Identify trends and opportunities",
                                        "isDone": false
                                    },
                                    {
                                        "id": "todo4063",
                                        "title": "Present insights to stakeholders",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#009688"
                        },
                        "isDone": false
                    }
                ]
            }
        ]
    }
    ,
    /************************************************************************************************************** */

    {
        "_id": "b5001",
        "title": "Event Planning",
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            },
        ],
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "groups": [
            {
                "id": "g5001",
                "title": "Venue Selection",
                "tasks": [
                    {
                        "id": "t5001",
                        "title": "Research potential venues",
                        "description": "In this task, the event planning team will research and identify potential venues that suit the event requirements, including capacity, location, and amenities.",
                        "dueDate": 175188680000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl5001",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5001",
                                        "title": "Create venue shortlist"
                                    },
                                    {
                                        "id": "todo5002",
                                        "title": "Contact venue owners"
                                    },
                                    {
                                        "id": "todo5003",
                                        "title": "Schedule venue visits"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFEB3B"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t5002",
                        "title": "Visit and evaluate venues",
                        "labelIds": ["l103", "l102", "l105"],
                        "checklists": [
                            {
                                "id": "cl5002",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5004",
                                        "title": "Assess venue capacity"
                                    },
                                    {
                                        "id": "todo5005",
                                        "title": "Evaluate venue amenities"
                                    },
                                    {
                                        "id": "todo5006",
                                        "title": "Consider venue accessibility"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9E9E9E"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t5003",
                        "title": "Negotiate venue contract",
                        "dueDate": 17515488680000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl5003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5007",
                                        "title": "Review contract terms"
                                    },
                                    {
                                        "id": "todo5008",
                                        "title": "Negotiate pricing and packages"
                                    },
                                    {
                                        "id": "todo5009",
                                        "title": "Finalize contract agreement"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFCDD2"
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g5002",
                "title": "Budget Planning",
                "tasks": [
                    {
                        "id": "t5004",
                        "title": "Determine event budget",
                        "description": "In this task, the event planning team will determine the overall budget for the event, considering various factors such as venue costs, catering expenses, marketing, and staffing.",
                        "dueDate": 1758059600000,
                        "members": ["u101", "u102", "u103"],
                        "checklists": [
                            {
                                "id": "cl5004",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5010",
                                        "title": "Identify expense categories"
                                    },
                                    {
                                        "id": "todo5011",
                                        "title": "Estimate costs for each category"
                                    },
                                    {
                                        "id": "todo5012",
                                        "title": "Set overall event budget"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://plus.unsplash.com/premium_photo-1661775443983-33b3426fcb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1354&q=80"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5005",
                        "title": "Allocate budget to expenses",
                        "members": ["u101"],
                        "labelIds": ["l101", "l104", "l102"],
                        "checklists": [
                            {
                                "id": "cl5005",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5013",
                                        "title": "Distribute budget across categories"
                                    },
                                    {
                                        "id": "todo5014",
                                        "title": "Monitor and adjust expenses"
                                    },
                                    {
                                        "id": "todo5015",
                                        "title": "Track budget utilization"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#607D8B"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5006",
                        "title": "Seek sponsorship opportunities",
                        "labelIds": ["l106", "l101"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl5006",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5016",
                                        "title": "Identify potential sponsors"
                                    },
                                    {
                                        "id": "todo5017",
                                        "title": "Prepare sponsorship proposals"
                                    },
                                    {
                                        "id": "todo5018",
                                        "title": "Negotiate sponsorship agreements"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g5003",
                "title": "Marketing and Promotion",
                "tasks": [
                    {
                        "id": "t5007",
                        "title": "Develop marketing strategy",
                        "members": ["u102", "u103"],
                        "description": "In this task, the event planning team will develop a comprehensive marketing strategy to promote the event, including identifying target audience, selecting marketing channels, and planning promotional activities.",
                        "dueDate": 1764232000,
                        "checklists": [
                            {
                                "id": "cl5007",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5019",
                                        "title": "Define target audience"
                                    },
                                    {
                                        "id": "todo5020",
                                        "title": "Select marketing channels"
                                    },
                                    {
                                        "id": "todo5021",
                                        "title": "Plan promotional activities"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFEB3B"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5008",
                        "title": "Create event branding materials",
                        "description": "In this task, the event planning team will develop a comprehensive marketing strategy to promote the event, including identifying target audience, selecting marketing channels, and planning promotional activities.",
                        "labelIds": ["l104", "l106", "l105"],
                        "members": ["u102"],
                        "checklists": [
                            {
                                "id": "cl5008",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5022",
                                        "title": "Design event logo"
                                    },
                                    {
                                        "id": "todo5023",
                                        "title": "Develop event tagline"
                                    },
                                    {
                                        "id": "todo5024",
                                        "title": "Create branded collateral"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9E9E9E"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5009",
                        "title": "Execute marketing campaigns",
                        "checklists": [
                            {
                                "id": "cl5009",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5025",
                                        "title": "Run social media ads"
                                    },
                                    {
                                        "id": "todo5026",
                                        "title": "Create content for email marketing"
                                    },
                                    {
                                        "id": "todo5027",
                                        "title": "Collaborate with influencers"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFCDD2"
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g5004",
                "title": "Logistics",
                "attachments": [
                    {
                        "id": "a101",
                        "createdAt": 159099981743,
                        "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                    }
                ],
                "tasks": [
                    {
                        "id": "t5010",
                        "title": "Arrange transportation",
                        "description": "In this task, the event planning team will arrange transportation for attendees, including coordinating buses, shuttles, or taxis to and from the event venue.",
                        "dueDate": 177040000,
                        "labelIds": ["l103", "l104", "l106"],
                        "checklists": [
                            {
                                "id": "cl5010",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5028",
                                        "title": "Determine transportation requirements"
                                    },
                                    {
                                        "id": "todo5029",
                                        "title": "Contact transportation providers"
                                    },
                                    {
                                        "id": "todo5030",
                                        "title": "Confirm transportation arrangements"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FF5722"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5011",
                        "title": "Coordinate event setup",
                        "dueDate": 1770400005454,
                        "checklists": [
                            {
                                "id": "cl5011",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5031",
                                        "title": "Arrange seating layout"
                                    },
                                    {
                                        "id": "todo5032",
                                        "title": "Set up audiovisual equipment"
                                    },
                                    {
                                        "id": "todo5033",
                                        "title": "Prepare registration area"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#607D8B"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t5012",
                        "title": "Manage event logistics",
                        "labelIds": ["l101", "l104"],
                        "checklists": [
                            {
                                "id": "cl5012",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5034",
                                        "title": "Coordinate catering services"
                                    },
                                    {
                                        "id": "todo5035",
                                        "title": "Handle audiovisual setup"
                                    },
                                    {
                                        "id": "todo5036",
                                        "title": "Manage on-site registration"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g5005",
                "title": "Program and Activities",
                "members": ["u101", "u103"],
                "tasks": [
                    {
                        "id": "t5013",
                        "title": "Plan event program",
                        "description": "In this task, the event planning team will develop the program flow, including scheduling keynote speeches, breakout sessions, and networking activities.",
                        "dueDate": 1776578000000,
                        "checklists": [
                            {
                                "id": "cl5013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5037",
                                        "title": "Outline event schedule"
                                    },
                                    {
                                        "id": "todo5038",
                                        "title": "Determine session topics"
                                    },
                                    {
                                        "id": "todo5039",
                                        "title": "Assign speakers and presenters"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFEB3B"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t5014",
                        "title": "Coordinate entertainment",
                        "members": ["u103"],
                        "labelIds": ["l101", "l102", "l106", "l103"],
                        "checklists": [
                            {
                                "id": "cl5014",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5040",
                                        "title": "Book live band"
                                    },
                                    {
                                        "id": "todo5041",
                                        "title": "Hire event emcee"
                                    },
                                    {
                                        "id": "todo5042",
                                        "title": "Arrange interactive activities"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1508979822114-db019a20d576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5015",
                        "title": "Organize networking sessions",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl5015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5043",
                                        "title": "Set up designated networking areas"
                                    },
                                    {
                                        "id": "todo5044",
                                        "title": "Plan icebreaker activities"
                                    },
                                    {
                                        "id": "todo5045",
                                        "title": "Facilitate introductions"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFCDD2"
                        },
                        "isDone": true
                    }
                ]
            },
            {
                "id": "g5006",
                "title": "Evaluation and Follow-up",
                "tasks": [
                    {
                        "id": "t5016",
                        "title": "Collect attendee feedback",
                        "members": ["u101", "u102", "u103"],
                        "description": "In this task, the event planning team will collect feedback from event attendees to evaluate the success of the event and identify areas for improvement.",
                        "dueDate": 1782750800000,
                        "checklists": [
                            {
                                "id": "cl5016",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5046",
                                        "title": "Create post-event survey"
                                    },
                                    {
                                        "id": "todo5047",
                                        "title": "Distribute survey to attendees"
                                    },
                                    {
                                        "id": "todo5048",
                                        "title": "Analyze survey results"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FF5722"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t5017",
                        "title": "Send thank-you notes",
                        "labelIds": ["l101", "l102", "l105"],
                        "checklists": [
                            {
                                "id": "cl5017",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5049",
                                        "title": "Draft thank-you messages"
                                    },
                                    {
                                        "id": "todo5050",
                                        "title": "Personalize notes for speakers and sponsors"
                                    },
                                    {
                                        "id": "todo5051",
                                        "title": "Send out thank-you notes"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#607D8B"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t5018",
                        "title": "Evaluate event success",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl5018",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo5052",
                                        "title": "Review event metrics"
                                    },
                                    {
                                        "id": "todo5053",
                                        "title": "Assess attendee satisfaction"
                                    },
                                    {
                                        "id": "todo5054",
                                        "title": "Identify areas for improvement"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    }
                ]
            }
        ]
    }
    ,


    /***************************************************************************************************************** */


    {
        "_id": "b6001",
        "title": "Home Renovation",
        "style": {
            "backgroundImage": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
        },
        "members": [
            {
                "_id": 'u101',
                "username": "Tomer",
                "fullname": "Tomer Benaim",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QXHQH8HX-6df7fa122011-512",
            },
            {
                "_id": "u102",
                "fullname": "Eyal Avni",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04T7JSSLKS-1f1786ae7473-512",
            },
            {
                "_id": "u103",
                "fullname": "Ohad Mazza",
                "imgUrl": "https://ca.slack-edge.com/T04KZK1LY91-U04QSE7U9ED-77a50b06e29a-512",
            },
        ],
        "labels": [
            {
                "id": "l101",
                "title": "Marketing",
                "color": "#4bce97"
            },
            {
                "id": "l102",
                "title": "Frontend",
                "color": "#e2b203"
            },
            {
                "id": "l103",
                "title": "Backend",
                "color": "#faa53d"
            },
            {
                "id": "l104",
                "title": "Finance",
                "color": "#f87462"
            },
            {
                "id": "l105",
                "title": "Operations",
                "color": "#9f8fef"
            },
            {
                "id": "l106",
                "title": "Manufacturing",
                "color": "#579dff"
            }
        ],
        "groups": [
            {
                "id": "g6001",
                "title": "Planning",
                "tasks": [
                    {
                        "id": "t6001",
                        "title": "Create renovation plan",
                        "description": "In this task, develop a comprehensive plan for the home renovation project, including design ideas, budgeting, and project timeline.",
                        "dueDate": 1751886800000,
                        "checklists": [
                            {
                                "id": "cl6001",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6001",
                                        "title": "Research design inspiration"
                                    },
                                    {
                                        "id": "todo6002",
                                        "title": "Determine project budget"
                                    },
                                    {
                                        "id": "todo6003",
                                        "title": "Create project timeline"
                                    }
                                ]
                            },
                            {
                                "id": "cl6002",
                                "title": "Checklist 2",
                                "todos": [
                                    {
                                        "id": "todo6004",
                                        "title": "Contact contractors for estimates"
                                    },
                                    {
                                        "id": "todo6005",
                                        "title": "Obtain necessary permits"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#4bce97"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6002",
                        "title": "Select materials and finishes",
                        "description": "This task involves researching and selecting the materials and finishes to be used in the home renovation, such as flooring, paint colors, and fixtures.",
                        "dueDate": 1758059600000,
                        "labelIds": ["l103", "l102", "l105"],
                        "attachments": [
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl6003",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6006",
                                        "title": "Visit showrooms and browse catalogs"
                                    },
                                    {
                                        "id": "todo6007",
                                        "title": "Gather samples and swatches"
                                    },
                                    {
                                        "id": "todo6008",
                                        "title": "Consult with interior designer"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#e2b203"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t6003",
                        "title": "Finalize project budget",
                        "description": "In this task, review the project budget, make any necessary adjustments, and ensure that all expenses are accounted for.",
                        "labelIds": ["l101", "l104", "l103"],
                        "checklists": [
                            {
                                "id": "cl6004",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6009",
                                        "title": "Review contractor estimates"
                                    },
                                    {
                                        "id": "todo6010",
                                        "title": "Factor in contingency budget"
                                    },
                                    {
                                        "id": "todo6011",
                                        "title": "Create detailed budget spreadsheet"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://cdn1.byjus.com/wp-content/uploads/2021/03/bar-graph.png"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g6002",
                "title": "Preparation",
                "tasks": [
                    {
                        "id": "t6004",
                        "title": "Clear out and prepare the space",
                        "checklists": [
                            {
                                "id": "cl6005",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6012",
                                        "title": "Declutter and remove furniture"
                                    },
                                    {
                                        "id": "todo6013",
                                        "title": "Protect flooring and surfaces"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#9f8fef"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6005",
                        "title": "Arrange temporary living arrangements",
                        "members": ["u101", "u102", "u103"],
                        "description": "This task involves making arrangements for temporary living during the renovation process, such as finding a rental or staying with family or friends.",
                        "dueDate": 176420000,
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl6006",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6014",
                                        "title": "Research rental options"
                                    },
                                    {
                                        "id": "todo6015",
                                        "title": "Pack essential belongings"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": ""
                        },
                        "isDone": true
                    },
                    {
                        "id": "t6006",
                        "title": "Notify neighbors and building management",
                        "labelIds": ["l106", "l101", "l102"],
                        "checklists": [
                            {
                                "id": "cl6007",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6016",
                                        "title": "Inform neighbors about noise and disruptions"
                                    },
                                    {
                                        "id": "todo6017",
                                        "title": "Obtain necessary permits"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#F48FB1"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g6003",
                "title": "Construction",
                "tasks": [
                    {
                        "id": "t6007",
                        "title": "Demolition and removal",
                        "dueDate": 118000,
                        "members": ["u101", "u102", "u103"],
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl6008",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6018",
                                        "title": "Demolish walls and remove debris"
                                    },
                                    {
                                        "id": "todo6019",
                                        "title": "Dispose of materials properly"
                                    },
                                    {
                                        "id": "todo6020",
                                        "title": "Prepare for structural modifications"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#BDBDBD"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6008",
                        "title": "Electrical and plumbing work",
                        "description": "This task involves hiring professionals to handle electrical and plumbing installations and ensure that all systems are up to code.",
                        "labelIds": ["l103", "l102", "l101"],
                        "checklists": [
                            {
                                "id": "cl6009",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6021",
                                        "title": "Create electrical layout plan"
                                    },
                                    {
                                        "id": "todo6022",
                                        "title": "Install new plumbing fixtures"
                                    },
                                    {
                                        "id": "todo6023",
                                        "title": "Test electrical and plumbing systems"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6009",
                        "title": "Structural modifications",
                        "members": ["u101", "u102"],
                        "description": "In this task, structural changes will be made to the space, such as removing walls, adding support beams, or creating new openings.",
                        "dueDate": 1770405200000,
                        "checklists": [
                            {
                                "id": "cl6010",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6024",
                                        "title": "Consult with structural engineer"
                                    },
                                    {
                                        "id": "todo6025",
                                        "title": "Obtain necessary permits"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#90CAF9"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g6004",
                "title": "Finishing",
                "tasks": [
                    {
                        "id": "t6010",
                        "title": "Painting and wallpapering",
                        "labelIds": ["l101", "l102", "l103"],
                        "members": ["u101", "u103"],
                        "checklists": [
                            {
                                "id": "cl6011",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6026",
                                        "title": "Choose paint colors and wallpaper"
                                    },
                                    {
                                        "id": "todo6027",
                                        "title": "Prepare surfaces for painting"
                                    },
                                    {
                                        "id": "todo6028",
                                        "title": "Apply paint and wallpaper"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#A5D6A7"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t6011",
                        "title": "Install flooring",
                        "dueDate": 123400000,
                        "description": "This task involves selecting and installing new flooring materials, such as hardwood, tiles, or carpet.",
                        "labelIds": ["l102", "l101"],
                        "checklists": [
                            {
                                "id": "cl6012",
                                "title": "Checklist 1",
                                "members": ["u102", "u103"],
                                "todos": [
                                    {
                                        "id": "todo6029",
                                        "title": "Choose flooring material"
                                    },
                                    {
                                        "id": "todo6030",
                                        "title": "Remove old flooring"
                                    },
                                    {
                                        "id": "todo6031",
                                        "title": "Install new flooring"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#B2EBF2"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6012",
                        "title": "Cabinetry and fixtures installation",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                        ],
                        "dueDate": 1751886800000,
                        "checklists": [
                            {
                                "id": "cl6013",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6033",
                                        "title": "Install kitchen fixtures"
                                    },
                                    {
                                        "id": "todo6034",
                                        "title": "Mount bathroom vanities"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FBC02D"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g6005",
                "title": "Final Touches",
                "tasks": [
                    {
                        "id": "t6013",
                        "title": "Lighting fixtures and electrical outlets",
                        "members": ["u101", "u102", "u103"],
                        "labelIds": ["l103"],
                        "checklists": [
                            {
                                "id": "cl6014",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6035",
                                        "title": "Select and purchase lighting fixtures"
                                    },
                                    {
                                        "id": "todo6036",
                                        "title": "Install electrical outlets and switches"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "backgroundImage": "https://images.unsplash.com/photo-1547393947-a6a221f74e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t6014",
                        "title": "Window treatments",
                        "dueDate": 1751886800000,
                        "description": "This task involves selecting and installing window treatments, such as curtains, blinds, or shutters.",
                        "checklists": [
                            {
                                "id": "cl6015",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6037",
                                        "title": "Measure windows for treatments"
                                    },
                                    {
                                        "id": "todo6038",
                                        "title": "Select and purchase window treatments"
                                    },
                                    {
                                        "id": "todo6039",
                                        "title": "Install window treatments"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#F8BBD0"
                        },
                        "isDone": true
                    },
                    {
                        "id": "t6015",
                        "title": "Final inspection and cleanup",
                        "attachments": [
                            {
                                "id": "a101",
                                "createdAt": 159099981743,
                                "url": "https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png",
                            },
                            {
                                "id": "a102",
                                "createdAt": 1590999817436,
                                "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp_q_OUhD19oRE-0xnBVgBrDcBq4vc69sMA&usqp=CAU",
                            },
                            {
                                "id": "a103",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                            {
                                "id": "a104",
                                "createdAt": 1590999817439,
                                "url": "https://apexcharts.com/wp-content/uploads/2018/05/dashboard-modern.png",
                            },
                        ],
                        "checklists": [
                            {
                                "id": "cl6016",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6040",
                                        "title": "Inspect completed work"
                                    },
                                    {
                                        "id": "todo6041",
                                        "title": "Touch up paint and finishes"
                                    },
                                    {
                                        "id": "todo6042",
                                        "title": "Clean up construction debris"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#80CBC4"
                        },
                        "isDone": false
                    }
                ]
            },
            {
                "id": "g6006",
                "title": "Project Completion",
                "tasks": [
                    {
                        "id": "t6016",
                        "title": "Move back and settle in",
                        "labelIds": ["l106", "l104", "l105"],
                        "checklists": [
                            {
                                "id": "cl6017",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6043",
                                        "title": "Move belongings back into the renovated space"
                                    },
                                    {
                                        "id": "todo6044",
                                        "title": "Arrange furniture and decor"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#FFAB91"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6017",
                        "title": "Celebrate and enjoy",
                        "description": "Congratulations! The home renovation project is complete. Take some time to celebrate and enjoy the newly renovated space.",
                        "checklists": [
                            {
                                "id": "cl6018",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6045",
                                        "title": "Host a housewarming party"
                                    },
                                    {
                                        "id": "todo6046",
                                        "title": "Take photographs of the finished project"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#C5CAE9"
                        },
                        "isDone": false
                    },
                    {
                        "id": "t6018",
                        "title": "Review and document",
                        "labelIds": ["l106", "l104", "l105"],
                        "members": ["u102"],
                        "checklists": [
                            {
                                "id": "cl6019",
                                "title": "Checklist 1",
                                "todos": [
                                    {
                                        "id": "todo6047",
                                        "title": "Evaluate the renovation process"
                                    },
                                    {
                                        "id": "todo6048",
                                        "title": "Document changes made"
                                    }
                                ]
                            }
                        ],
                        "style": {
                            "bgColor": "#E6EE9C"
                        },
                        "isDone": false
                    }
                ]
            }
        ]
    }






]
