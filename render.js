const Renderer = function() {

    const renderPosts = (posts) => {

        $("#posts").empty();

        for (let i = 0; i < posts.length; i++) {
            $("#posts").append(`<div data-id=` + posts[i].id + `><h1>` + posts[i].text + `</h1></div>`)
                // $("div").find(`[data-id='${posts[i].id}']`) 
                //you can use above  with specific id of divs

            for (let comment of posts[i].comments) {
                $("div").find(`[data-id='${posts[i].id}']`).append(`<div data-id=` + comment.id + `>` +
                    comment.text + `<span id=deleteComment>  X</span>` + `</div>`)

            }
            $("div").find(`[data-id='${posts[i].id}']`).append(`<input type=text id=newComment >`)
            $("div").find(`[data-id='${posts[i].id}']`).append(`<button id=deletePostbtn>` + `Delete Post` + `</button>`)
            $("div").find(`[data-id='${posts[i].id}']`).append(`<button id=addCommentbtn>` + `Add Comment` + `</button>`)
        }


    }

    return { renderPosts: renderPosts }

}