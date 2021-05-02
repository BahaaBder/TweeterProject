const Tweeter = function() {
    let postsArray = [{
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2
    let commentIdCounter = 6
    const getPosts = function() {
        return postsArray
    }
    const addPost = function(text) {
        postIdCounter += 1
        newPost = { id: "p" + postIdCounter, text: text, comments: [] }
        postsArray.push(newPost)


    }
    const removePost = function(postID) {
        for (let i = 0; i < postsArray.length; i++) {
            if (postsArray[i].id == postID) {
                postsArray.splice(i, 1)
                postIdCounter -= 1

            }
        }
    }
    const addComment = function(text, postID) {
        for (let i = 0; i < postsArray.length; i++) {
            if (postsArray[i].id == postID) {
                commentIdCounter += 1
                newComment = { id: "c" + commentIdCounter, text: text }
                postsArray[i].comments.push(newComment)

            }
        }
    }
    const removeComment = function(postID, commentId) {
        for (let i = 0; i < postsArray.length; i++) {
            if (postsArray[i].id == postID) {
                for (let j = 0; j < postsArray[i].comments.length; j++) {
                    if (postsArray[i].comments[j].id == commentId) {
                        postsArray[i].comments.splice(j, 1)
                        commentIdCounter -= 1

                    }
                }
            }
        }
    }
    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//     //This should be added to the posts array:
//     //{text: "This is my own post!", id: "p3", comments: []}
// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//     //There should only be two posts in the post's array:
//     //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//     //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//     //This should be added to the third post's comments array:
//     //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//     //This comment should be removed:
//     //{id: "c6", text: "Haha second place what a joke."}