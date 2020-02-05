
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
    $(".comments-box").show();
    let thisId = $(event.currentTarget).attr("data-id");
    console.log('click = ' + thisId);
    $(".comments-body").empty();
    $(".submit-comment").remove();
    $.ajax({
        method: "GET",
        url: "/api/comments/" + thisId
    }).then(data => {
        console.log(`comments:\n========\n${JSON.stringify(data)}\n\nArray:\n`);
        let commentsArray = [data.comment];
        console.log(commentsArray);
        commentsArray.forEach(el => {
            let newDiv = $("<div class='row comment-block'>");
            newDiv.append(`<h3 class='li-user col-10'>${el.user}</h3>`);
            newDiv.append(`<p class='li-body col-10'>${el.body}</p>`);
            newDiv.append(`<button class='delete-comment col-2' data-id=${el.id}>X</button>`)
            $(".comments-body").append(newDiv);
        });
        $(".comments-footer").append(`<button class='submit-comment' data-id=${data._id}>Send</button>`);
    })
})
{/* <button id="submit-comment">Send</button> */}
// set display to visible
// grab article id for save
// get method

// Send New Comment Button
// $(".submit-comment")
// $.ajax({
//         method: "POST",
//         url: "/articles/" + thisId,
//         data: {
//           user: $("#userinput").val(),
//           body: $("#bodyinput").val()
//         }
//       }).then(data => {
//         //   append new divs
//       })

// Delete Comment Button
// $(".delete-comment")
// ajax post
// grab id

// Close Comments Display
$(".close-comments").on("click", () => {
    $(".comments-body").empty();
    $(".comments-box").hide();
})
// set css display to none