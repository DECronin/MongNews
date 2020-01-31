// Display Functionality

// Event Listeners & on.load
// =======  1 ============
// scrape 20
// compare to saved
// ///// & button for 20 new
// ======== 2 ============
// render saved
// ====// 3 == unsave button?
// ======== 4 ============
// pull up comments from button
// ====// 5 == delete button
// ====// 6 == new comment form and submit button


// function displayResults(animals) {
//   $("tbody").empty();
//   animals.forEach(function(animal) {
//     var tr = $("<tr>").append(
//       $("<td>").text(animal.name),
//       $("<td>").text(animal.numLegs),
//       $("<td>").text(animal.class),
//       $("<td>").text(animal.weight),
//       $("<td>").text(animal.whatIWouldReallyCallIt)
//     );
//     $("tbody").append(tr);
//   });
// }

// $.getJSON("/all", function(data) {
//   displayResults(data);
// });

// $("#weight-sort").on("click", function() {
//   $.getJSON("/weight", function(data) {
//     displayResults(data);
//   });
// });

// $("#name-sort").on("click", function() {
//   $.getJSON("/name", function(data) {
//     displayResults(data);
//   });
// });
