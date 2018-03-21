// JavaScript File
//--------------------------JQUERY-----------------------------------
$(document).ready(function(){
    
    // Functions ----------------------------------------------------
    // Search books with the Search Term
    function getBooksFromAPI(SearchTerm) {
        $.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + SearchTerm,
            method: 'GET',
            success: function(response) {
                
            }
        });    
    }
    // Picks the first five books
    function getFiveBooks(response) {
        
    }
    // Append books to the page
    
    $("#contact").click(function(){
        $(".container").empty();
    });
    
    
    
    getBooksFromAPI('harry');

});
 
