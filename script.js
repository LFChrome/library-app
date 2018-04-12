// JavaScript File
/* global $*/
//--------------------------JQUERY-----------------------------------
$(document).ready(function(){
    
    // Functions ----------------------------------------------------
    // Search books with the Search Term
    function getBooksFromAPI(SearchTerm) {
        var APIwithKeyTerm = 'https://www.googleapis.com/books/v1/volumes?q=' + SearchTerm;
        $.ajax({
            url: APIwithKeyTerm, 
            method: 'GET',
            success: function(response) {
                if (response.totalItems >= 6) {
                    for(var i = 0; i < 6; i++) {
                        displayBook(response.items[i]);
                    }
                } else {
                    alert('Book(s) could not be found, be more specific!');
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
        $(".container").hide();
    }
    // Search button for books
    $('#search').click(function() {
        var userInput = $('#input').val();
        getBooksFromAPI(userInput);
        console.log(userInput);
    });
    // Show contact information
    $("#contact").click(function(){
        $(".contactInfo").css('display','flex');
    });
    

});
 
