// WITH THE HELP OF JQUERY FOR COMMUNICATION WITH SERVER


function fetchRandomDogImage(){
    
    // // 1st method
    // $.ajax({
    //     url : 'https://dog.ceo/api/breeds/image/random',
    //     method : 'GET',
    //     success : function(data){
    //         var imageUrl = data.message;
    //         $('#dog-image').attr('src' , imageUrl);
    //     },
    // }).fail(function(){
    //    console.log("error");
    // });


    // 2nd method
    $.get('https://dog.ceo/api/breeds/image/random' , function(data){
        var imageUrl = data.message;
        $('#dog-image').attr('src' , imageUrl);
    }).fail(function(xhr , textStatus , errorThrown){
        console.log("Request Failed");
    });
}

// First to handle click event for both method
$('#fetch-dog-image-button').click(fetchRandomDogImage);