// JavaScript File
/* global $*/
//--------------------------JQUERY-----------------------------------
$(document).ready(function(){
    
    // Functions ----------------------------------------------------
    // Search books with the Search Term
    function getBooksFromAPI(SearchTerm) {
        var APIwithKeyTerm = 'https://www.googleapis.com/books/v1/volumes?q=' + SearchTerm +'';
        console.log(APIwithKeyTerm);
        $.ajax({
            url: APIwithKeyTerm, 
            method: 'GET',
            success: function(response) {
                console.log("Success");
                for(var i = 0; i < 6; i++) {
                    displayBook(response.items[i]);
                }
            },
            error: function() {
                alert('Book(s) could not be found, be more specific!');
            }
        });    
    }
    
    // Displays a book with the response with an object 
    function displayBook(bookInfo) {
        clearContainer();
        var imgURL = bookInfo.volumeInfo.imageLinks.thumbnail;
        var title = bookInfo.volumeInfo.title;
        var description = bookInfo.volumeInfo.description;
        $("body").append('<img src="' + imgURL + '">');
        $("body").append('<h1>' + title + '</h1>');
        $("body").append('<h3>' + description + '</h3>');
    }
    // clear contents of page
    function clearContainer() {
        $(".container").empty();
    }
    // Search button for books
    $('#search').click(function() {
        var userInput = $('#input').val();
        getBooksFromAPI(userInput);
        console.log(userInput);
       $(".bookShow").empty();
       $(".guide").empty();
       $(".review").empty();
       $(".reviewSection").empty();
    });
    //Review button for books
    $("#Review").click(function(){
       $(".bookShow").empty();
       $(".guide").empty();
       $(".review").show();
    });
    // Show contact information
    $("#contact").click(function(){
        $(".contactInfo").css('display','flex');
        $(".bookShow").empty();
        $(".guide").empty();
        $(".review").empty();
        $(".reviewSection").empty();
    });
  
    $("#submit").click(function(){
        console.log("hello");
        $(".clear").empty();
        console.log(addReview());
        displayReview(reviewObject);
    });
    
    
function displayReview(reviewObject){
	var containerMove = "<div class='clear' id='bookInfo'></div>";
    $("body").append(containerMove);
    $("#bookInfo").append('<h3>' + reviewObject["title"] + '</h3>');
    $("#bookInfo").append('<p>' + reviewObject["author"] + '</p');
    $("#bookInfo").append('<img src="' + reviewObject["date"] + '">');
    $("#bookInfo").append('<a href="' + reviewObject["comment"] + '">Click Here!' + '</a>');

}

function addReview(){
	
	var bookGrab = $("#title").val();
    var authorGrab = $("#author").val();
    var dateGrab = $("#date").val();
    var commentGrab = $("#comment").val();
    
    var reviewHolder = {
    	"title": bookGrab,
    	"author": authorGrab,
    	"date": dateGrab,
    	"comment": commentGrab,
    };
        return reviewHolder;
    }   
});
