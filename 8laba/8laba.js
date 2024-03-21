let user = {
    name: "Masha",
    age: 21,
};

let usercopy = {
    ...user,
};

console.log(usercopy);

let numbers = [1, 2, 3];

let numberscopy = [...numbers];

console.log(numberscopy);

let user1 = {
    name: "Masha",
    age: 23,
    location: {
        city: "Minsk",
        country: "Belarus",
    },
};

let user1copy = {
    ...user1,
    location: {
        ...user1.location,
    },
};

console.log(user1);

let user2 = {
    name: "Masha",
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"],
};

let user2copy = {
    ...user2,
    skills: [...user2.skills],
};

console.log(user2copy);

const array = [{
        id: 1,
        name: "Vasya",
        group: 10,
    },
    {
        id: 2,
        name: "Ivan",
        group: 11,
    },
    {
        id: 3,
        name: "Masha",
        group: 12,
    },
    {
        id: 4,
        name: "Petya",
        group: 10,
    },
    {
        id: 5,
        name: "Kira",
        group: 11,
    },
];

let arraycopy = [{
    ...array
}];

console.log(array);

let user4 = {
    name: "Masha",
    age: 19,
    studies: {
        university: "BSTU",
        speciality: "designer",
        year: 2020,
        exams: {
            maths: true,
            programming: false,
        },
    },
};

let user4copy = {
    ...user4,
    studies: {
        ...user4.studies,
        exams: {
            ...user4.studies.exams,
        },
    },
};

console.log(user4copy);

let user5 = {
    name: "Masha",
    age: 22,
    studies: {
        university: "BSTU",
        speciality: "designer",
        year: 2020,
        department: {
            faculty: "FIT",
            group: 10,
        },
        exams: [{
                maths: true,
                mark: 8,
            },
            {
                programming: true,
                mark: 4,
            },
        ],
    },
};

let user5copy = {
    ...user5,
    studies: {
        ...user5.studies,
        department: {
            ...user5.studies.department,
        },
        exams: [
            ...user5.studies.exams.map((exam) => ({
                ...exam,
            })),
        ],
    },
};

user5copy.studies.exams[0].mark = 7;

console.log(user5copy)

user5copy.studies.department.group = 12;

user5copy.studies.exams = user5copy.studies.exams.map((exam) => {
    if ("programming" in exam) {
        return {
            ...exam,
            mark: 10
        };
    }
    return exam;
});

console.log(user5copy);

let user6 = {
    name: "Masha",
    age: 21,
    studies: {
        university: "BSTU",
        speciality: "designer",
        year: 2020,
        department: {
            faculty: "FIT",
            group: 10,
        },
        exams: [{
                maths: true,
                mark: 8,
                professor: {
                    name: "Ivan Ivanov ",
                    degree: "PhD",
                },
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: "Petr Petrov",
                    degree: "PhD",
                },
            },
        ],
    },
};

let user6copy = {
    ...user6,
    studies: {
        ...user6.studies,
        department: {
            ...user6.studies.department,
        },
        exams: [
            ...user6.studies.exams.map((exam) => ({
                professor: {
                    ...exam.professor,
                },
            })),
        ],
    },
};

user6copy.studies.exams = user6copy.studies.exams.map((exam) => {
    if ("professor" in exam) {
        return {
            ...exam,
            name: "Добрыня Никитич"
        };
    }
    return exam;
});

console.log(user6copy);

let user7 = {
    name: "Masha",
    age: 20,
    studies: {
        university: "BSTU",
        speciality: "designer",
        year: 2020,
        department: {
            faculty: "FIT",
            group: 10,
        },
        exams: [{
                maths: true,
                mark: 8,
                professor: {
                    name: "Ivan Petrov",
                    degree: "PhD",
                    articles: [{
                            title: "About HTML",
                            pagesNumber: 3,
                        },
                        {
                            title: "About CSS",
                            pagesNumber: 5,
                        },
                        {
                            title: "About JavaScript",
                            pagesNumber: 1,
                        },
                    ],
                },
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: "Petr Ivanov",
                    degree: "PhD",
                    articles: [{
                            title: "About HTML",
                            pagesNumber: 3,
                        },
                        {
                            title: "About CSS",
                            pagesNumber: 5,
                        },
                        {
                            title: "About JavaScript",
                            pagesNumber: 1,
                        },
                    ],
                },
            },
        ],
    },
};

let user7copy = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.department,
        },
        exams: [
            ...user7.studies.exams.map((exam) => ({
                ...exam,
                professor: {
                    ...exam.professor,
                    articles: [
                        ...exam.professor.articles.map((article) => ({
                            ...article
                        })),
                    ],
                },
            })),
        ],
    },
};

user7copy.studies.exams = user7copy.studies.exams.map((exam) => {
    if (exam.professor.name == "Petr Ivanov") {
        exam.professor.articles = exam.professor.articles.map((article) => {
            if (article.title == "About CSS") {
                return {
                    ...article,
                    pagesNumber: 3
                };
            }
            return article;
        });
    }
    return exam;
});

console.log(user7copy);

let store = {
    // 1 уровень
    state: {
        // 2 уровень
        profilePage: {
            // 3 уровень
            posts: [{
                    id: 1,
                    message: "Hi",
                    likesCount: 12
                },
                {
                    id: 2,
                    message: "By",
                    likesCount: 1
                },
            ],
            newPostText: "About me",
        },
        dialogsPage: {
            dialogs: [{
                    id: 1,
                    name: "Valera"
                },
                {
                    id: 2,
                    name: "Andrey"
                },
                {
                    id: 3,
                    name: "Sasha"
                },
                {
                    id: 4,
                    name: "Viktor"
                },
            ],
            messages: [{
                    id: 1,
                    message: "hi"
                },
                {
                    id: 2,
                    message: "hi hi"
                },
                {
                    id: 3,
                    message: "hi hi hi"
                },
            ],
        },
        sidebar: {},
    },
};

store.state.profilePage.posts = store.state.profilePage.posts.map((post) => {
    return {
        ...post,
        message: "Hello"
    };
});

store.state.dialogsPage.messages = store.state.dialogsPage.messages.map(
    (message) => {
        return {
            ...message,
            message: "Hello"
        };
    }
);

console.log(store);