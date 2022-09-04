const users = [{
        userID: 1,
        userName: "Bui Thanh Tu",
    },
    {
        userID: 2,
        userName: "Nguyen Ngoc Ngan",
    },
    {
        userID: 3,
        userName: "Ca si LyLy",
    },
];
let cmtBlock = document.getElementById("comment-block");
const comments = [{
        id: 1,
        userID: 1,
        content: "em an com chua ?",
    },
    {
        id: 2,
        userID: 3,
        content: "em an roi a",
    },
];

let getComments = () =>
    new Promise(function(resolve) {
        resolve(comments);
    });

const getUserByID = (userIds) =>
    new Promise(function(resolve) {
        var result = users.filter((user) => userIds.includes(user.userID));
        resolve(result);
    });

// getUserByID([1, 2]).then((users) => console.log(users));

getComments()
    .then((comments) => {
        // * get all userId from comments
        let userIDs = comments.map((comment) => comment.userID);
        return getUserByID(userIDs).then((users) => {
            return {
                users: users,
                comments: comments,
            };
        });
    })

.then((data) => {
        var lis = "";
        data.comments.forEach((comment) => {
            var user = users.find((user) => user.userID === comment.userID);
            lis += `<li>${user.userName} : ${comment.content} </li>`;
        });
        cmtBlock.innerHTML = lis;
    })
    .catch((err) => console.log(err));