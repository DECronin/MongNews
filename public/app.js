
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
$("#comments-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(event.currentTarget).attr("data-id");
    console.log('click = ' + thisId);
    // $(".comments-body").empty();
    $.ajax({
        method: "GET",
        url: "/api/comments/" + thisId
    }).then(data => {
        console.log(`comments:\n========\n${data}`);
    })
})
{/* <button id="submit-comment">Send</button> */}
// set display to visible
// grab article id for save
// get method

// Send New Comment Button
// $("#submit-comment")
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
// $(".close-comments")
// set css display to none