 let array = [1, 2, 3, 4];

 let [first] = array;

 console.log(first)

 let user = {
    name: 'Никита',
    age: 18
 }

 let admin = {
    admin: 'Илья',
    ...user
 }

 console.log(array4)
 let store = { // 1 уровень
    state: { // 2 уровень
        profilePage: { // 3 уровень
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1}
            ],
            newPostText: 'About me'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name:'Andrey'},
                {id: 3, name:'Sasha'},
                {id :4, name:'Viktor'}
            ],
            messages:[
                {id :1 ,message :'hi'},
                {id :2 ,message :'hi hi'},
                {id :3 ,message :'hi hi hi'}
             ]
        },
        sidebar:{}
    }
}

let { state: { profilePage, dialogsPage, sidebar } } = store;

profilePage.posts.forEach(post => {
    console.log(post.likesCount);
});

dialogsPage.dialogs.forEach(dialog => {
    if(dialog.id % 2 == 0){
        console.log(dialog.name);
    }
});

dialogsPage.messages.forEach(message =>{
    message.message = 'Hello user'; 
    console.log(message);
})

let task = [
    { id: 6, title: 'C#', isDone: true}
]

let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
    ...task
  ]

console.log(tasks);

let array2 = [1, 2, 3, 4, 5];

function sumValues(a,b,c){
    return a + b + c;
}

console.log(sumValues(...array2))