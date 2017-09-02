

      var gifArray = ["Dogs", "Cats", "Birds"];

    function displayGifInfo() {

        var gifSet = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifSet + "&api_key=dc6zaTOxFJmzC&limit=10";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          var results = response.data;

          for (var i = 0; i < results.length; i++) {


          var gifDiv = $("<div class='gifClass'>");

          var p = $("<p>").text("Rating: " + results[i].rating);


            var gifImage = $("<img>");
           
            gifImage.attr("src", results[i].images.fixed_height.url);


            gifDiv.append(p);
            gifDiv.append(gifImage);


          $("#gif-view").prepend(gifDiv);

        }
        });



      }


      function renderButtons() {

        $("#buttons-view").empty();


        for (var i = 0; i < gifArray.length; i++) {

        
          var a = $("<button>");

          a.addClass("gifClass");

          a.attr("data-name", gifArray[i]);

          a.text(gifArray[i]);

          $("#buttons-view").append(a);
        }
      }


      $("#add-gif").on("click", function(event) {
        event.preventDefault();

        var gifSearch = $("#gif-input").val().trim();


        gifArray.push(gifSearch);

        renderButtons();
      });


      $(document).on("click", ".gifClass", displayGifInfo);


      renderButtons();




