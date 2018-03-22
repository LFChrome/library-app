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
                if (response.totalItems > 5) {
                    for(var i = 0; i < 5; i++) {
                        displayBook(response.item[i]);
                    }
                } else {
                    alert('Not enough books');
                }
            }
        });    
    }
    
    /*
    bookInfo = {
        kind: "books#volume",
        id: "S7XJU5kf6F4C",
        etag: "ETcc0G74mYo",
        selfLink: "https://www.googleapis.com/books/v1/volumes/S7XJU5kf6F4C",
        volumeInfo: {
            title: "Underwater Dogs",
            authors: [
                "Seth Casteel"
            ],
            publisher: "Little, Brown",
            publishedDate: "2012-10-23",
            description: "The exuberant, exhilarating photographs of dogs underwater that have become a sensation From the water's surface, it's a simple exercise: a dog's leap, a splash, and then a wet head surfacing with a ball, triumphant. But beneath the water is a chaotic ballet of bared teeth and bubbles, paddling paws, fur and ears billowing in the currents. From leaping Lab to diving Dachshund, the water is where a dog's distinct personality shines through; some lounge in the current, paddling slowly, but others arch their bodies to cut through the water with the focus and determination of a shark. In more than eighty portraits, award-winning pet photographer and animal rights activist Seth Casteel captures new sides of our old friends with vibrant underwater photography that makes it impossible to look away. Each image bubbles with exuberance and life, a striking reminder that even in the most loveable and domesticated dog, there are more primal forces at work. In Underwater Dogs, Seth Casteel gives playful and energetic testament to the rough-and-tumble joy that our dogs bring into our lives.",
            industryIdentifiers: [{
                    type: "ISBN_13",
                    identifier: "9780316227711"
                },
                {
                    type: "ISBN_10",
                    identifier: "0316227714"
                }
            ],
            readingModes: {
                text: true,
                image: false
            },
            pageCount: 144,
            printType: "BOOK",
            categories: [
                "Photography"
            ],
            averageRating: 4.5,
            ratingsCount: 6,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: true,
            contentVersion: "1.7.7.0.preview.2",
            panelizationSummary: {
                containsEpubBubbles: false,
                containsImageBubbles: false
            },
            imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=S7XJU5kf6F4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                thumbnail: "http://books.google.com/books/content?id=S7XJU5kf6F4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            language: "en",
            previewLink: "http://books.google.com/books?id=S7XJU5kf6F4C&printsec=frontcover&dq=dogs&hl=&cd=1&source=gbs_api",
            infoLink: "https://play.google.com/store/books/details?id=S7XJU5kf6F4C&source=gbs_api",
            canonicalVolumeLink: "https://market.android.com/details?id=book-S7XJU5kf6F4C"
        },
        saleInfo: {
            country: "US",
            saleability: "FOR_SALE",
            isEbook: true,
            listPrice: {
                amount: 12.99,
                currencyCode: "USD"
            },
            retailPrice: {
                amount: 12.99,
                currencyCode: "USD"
            },
            buyLink: "https://play.google.com/store/books/details?id=S7XJU5kf6F4C&rdid=book-S7XJU5kf6F4C&rdot=1&source=gbs_api",
            offers: [{
                finskyOfferType: 1,
                listPrice: {
                    amountInMicros: 12990000,
                    currencyCode: "USD"
                },
                retailPrice: {
                    amountInMicros: 12990000,
                    currencyCode: "USD"
                },
                giftable: true
            }]
        },
        accessInfo: {
            country: "US",
            viewability: "PARTIAL",
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: "ALLOWED",
            epub: {
                isAvailable: true,
                acsTokenLink: "http://books.google.com/books/download/Underwater_Dogs-sample-epub.acsm?id=S7XJU5kf6F4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            pdf: {
                isAvailable: false
            },
            webReaderLink: "http://play.google.com/books/reader?id=S7XJU5kf6F4C&hl=&printsec=frontcover&source=gbs_api",
            accessViewStatus: "SAMPLE",
            quoteSharingAllowed: false
        },
        searchInfo: {
            textSnippet: "In Underwater Dogs, Seth Casteel gives playful and energetic testament to the rough-and-tumble joy that our dogs bring into our lives."
        }
    };
    */
    // Displays a book with the response with an object 
    function displayBook(bookInfo) {
        var imgURL = bookInfo.volumeInfo.ImageLinks.thumbnail;
        var title = bookInfo.volumeInfo.title;
        var description = bookInfo.volumeInfo.description;
        $("body").append('<img src="https://goo.gl/GxX1g8">');

    // clear contents of page
    function clearContainer() {
        $(".container").empty();
    }
    
    
    
    $("#contact").click(function(){
        clearContainer();
    });
    


});
 
