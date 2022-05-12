// JS
$(document).ready(function(){

    // AJAX Service request to grab text data from json file
    $.getJSON('../model/data.json', function(jsonObj) {

        // Home Page Main Text Data 
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        // Home Page Left Column Text Data 
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        // Home Page Centre Column Text Data 
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        // Home Page Right Column Text Data 
        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
    
        //Get Coke Text Data
        $('#x3dModelTitle_coke').html('<h2>' + jsonObj.pageTextData[4].x3dModelTitle + '</h2>');
        $('#x3dCreationMethod_coke').html('<p>' + jsonObj.pageTextData[4].x3dCreationMethod + '</p>');
        $('#title_coke').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
        $('#subTitle_coke').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_coke').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        //Get Sprite Text Data
        $('#x3dModelTitle_sprite').html('<h2>' + jsonObj.pageTextData[5].x3dModelTitle + '</h2>');
        $('#x3dCreationMethod_sprite').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '</p>');
        $('#title_sprite').html('<h2>' + jsonObj.pageTextData[5].title + '</h2>');
        $('#subTitle_sprite').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
        $('#description_sprite').html('<p>' + jsonObj.pageTextData[5].description + '</p>');		

        //Get DR Pepper Text Data
        $('#x3dModelTitle_pepper').html('<h2>' + jsonObj.pageTextData[6].x3dModelTitle + '</h2>');
        $('#x3dCreationMethod_pepper').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '<p>');
        $('#title_pepper').html('<h2>' + jsonObj.pageTextData[6].title + '</h2>');
        $('#subTitle_pepper').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
        $('#description_pepper').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

        //Get Fanta Text Data
        $('#x3dModelTitle_fanta').html('<h2>' + jsonObj.pageTextData[7].x3dModelTitle + '</h2>');
        $('#x3dCreationMethod_fanta').html('<p>' + jsonObj.pageTextData[7].x3dCreationMethod + '</p>');
        $('#title_fanta').html('<h2>' + jsonObj.pageTextData[7].title + '</h2>');
        $('#subTitle_fanta').html('<h3>' + jsonObj.pageTextData[7].subTitle + '</h3>');
        $('#description_fanta').html('<p>' + jsonObj.pageTextData[7].description + '</p>');

        //Get Camera Data
        $('.x3dCameraTitle').html('<h2>' + jsonObj.pageTextData[8].CameraTitle + '</h2>');
        $('.x3dCameraSubtitles').html('<p>' + jsonObj.pageTextData[8].CameraSubtitles + '</p>');
        $('.x3dCameraDescription').html('<p>' + jsonObj.pageTextData[8].CameraDescription + '</p>');

        //Get CocaCola Logo Data
        $('#logotitle').html('<h1>' + jsonObj.pageTextData[9].logotitle + '</h1>');
        $('#logotitle2').html('<h1>' + jsonObj.pageTextData[9].logotitle2 + '</h1>');
        $('#logotitle3').html('<h2>' + jsonObj.pageTextData[9].logotitle3 + '</h2>');
        $('#logotitle4').html('<h3>' + jsonObj.pageTextData[9].logotitle4 + '</h3>');
        $('#logomotto').html('<p>' + jsonObj.pageTextData[9].logomotto + '</p>');

        //Get 3D Gallery Title,text data content
        $('.gallery_title').html('<h4>' + jsonObj.pageTextData[10].gallery_title + '</h4>');
        $('.gallery_description').html('<p>' + jsonObj.pageTextData[10].gallery_description + '</p>');

        //Get text
        $('.x3dAnimationDescription').html('<p>' + jsonObj.pageTextData[11].AnimationDescription + '</p>');
        $('.x3dRenderDescription').html('<p>' + jsonObj.pageTextData[11].RenderDescription + '</p>');
       
    });

});

$(document).ready(function(){

    //AJAX service request to get the main text data from the json data store
    $.getJSON('../model/data.json', function(jsonObj) {

    });
});