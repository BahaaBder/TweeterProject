const tweeter = Tweeter()
const renderer = Renderer()
    // post new Tweet
const post = function() {
        tweeter.addPost($("#input").val())
        renderer.renderPosts(tweeter.getPosts())
    }
    // Delete Post
$("body").on("click", "#deletePostbtn", function() {
        tweeter.removePost($(this).closest("div").attr("data-id"))
        renderer.renderPosts(tweeter.getPosts())

    })
    // Add new Comment
$("body").on("click", "#addCommentbtn", function() {
        // console.log($(this).closest("div").find("input").val())
        tweeter.addComment($(this).closest("div").find("input").val(), $(this).closest("div").attr("data-id"))
        renderer.renderPosts(tweeter.getPosts())

    })
    // Remove Comment 
$("body").on("click", "#deleteComment", function() {
    // console.log($(this).parent().parent().attr("data-id"))
    tweeter.removeComment($(this).parent().parent().attr("data-id")

        , $(this).closest("div").attr("data-id"))
    renderer.renderPosts(tweeter.getPosts())

})
renderer.renderPosts(tweeter.getPosts())