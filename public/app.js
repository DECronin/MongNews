// Save Button
$(".save-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(event.currentTarget).attr("data-id");
    console.log(`save: ${thisId}`);
    // $.ajax({
    //     method: "POST",
    //     url: "/articles/" + thisId + "save",
    // }).then(location.reload())
})

// Unsave Button
$(".unsave-btn").on("click", () => {
    event.preventDefault();
    let thisId = $(this).attr("data-id");
    // console.log(`unsave: ${thisId}`);
    // $.ajax({
    //     method: "POST",
    //     url: "/articles/" + thisId + "unsave",
    // }).then(location.reload())
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