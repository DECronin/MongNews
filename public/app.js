
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
// $("#comments-btn")
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
// $("#delete-comment")
// ajax post
// grab id

// Close Comments Display
// $("#close-comments")
// set css display to none