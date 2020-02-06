function populateCommentsBox(thisId) {
    console.log(`repopulating==== ${thisId}`);
    $(".comments-body").empty();
    $(".submit-comment").remove();
    $.ajax({
        method: "GET",
        url: "/api/comments/" + thisId
    }).then(data => {
        let commentsArray = data.comment;
        commentsArray.forEach((el, i) => {
            if (i > 0){
                let newDiv = $("<div class='row comment-block'>");
                newDiv.append(`<h3 class='li-user col-10'>${el.user}</h3>`);
                newDiv.append(`<p class='li-body col-10'>${el.body}</p>`);
                newDiv.append(`<button class='delete-comment col-2' data-id=${el._id} data-articleid="${thisId}">X</button>`)
                $(".comments-body").append(newDiv);
            }
        });
        $(".comments-footer").append(`<button class='submit-comment' data-id='${data._id}'>Send</button>`);
    })
}

// Save Button
$(".save-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(event.currentTarget).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/api/articles/" + thisId + "/save",
    })
})

// Unsave Button
$(".unsave-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(event.currentTarget).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/api/articles/" + thisId + "/unsave",
    })
})

// Display Comments Button
$(".comments-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(event.currentTarget).attr("data-id");
    $(".comments-box").show();
    populateCommentsBox(thisId);
})

// Send New Comment Button
$(document).on("click", ".submit-comment", () => {
    event.preventDefault();
    let thisId = $(event.srcElement).attr("data-id");
    let data = {
        user: $("#userinput").val(),
        body: $("#bodyinput").val()
    };
    $.ajax({
            method: "POST",
            url: "/api/new-comment/" + thisId,
            data: data
        }).then(data => {
            populateCommentsBox(thisId);
        })
})
// Delete Comment Button
$(document).on("click", ".delete-comment", () => {
    event.preventDefault();
    let thisId = $(event.srcElement).attr("data-id");
    let articleId = $(event.srcElement).attr("data-articleid");
    $.ajax({
        method: "POST",
        url: "/api/del-comment/" + thisId
    }).then(data => {
        populateCommentsBox(articleId);
    })
})

// Close Comments Display
$(".close-comments").on("click", () => {
    $(".comments-body").empty();
    $(".comments-box").hide();
})