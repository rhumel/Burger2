// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-it").on("click", function(event) {
      console.log("im in the devour part");
    var id = $(this).data("id");
    justDevoured= {
        devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: justDevoured
    }).then(
      function() {
        console.log("changed devoured to false");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("this is in the submit");
    var newBurger = {
      burger_name: $("input:text").val().trim(),
      devoured: false
    };
console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
