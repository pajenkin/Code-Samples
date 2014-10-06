//This is the javascript file
$(document).ready(function(){
	initImages();
	setBackgroundImageRotation();
});

var imageArr = ['img/DSC00229.JPG', 'img/DSC01106.JPG', 'img/DSC01115.JPG', 'img/18.jpg']
var counter = 0;
var fadeTimer = 1000;
var duration = 10000;

function initImages(){
	if(imageArr.length != 0){
		returnHtml = '';
		for( var i = 0 ; i < imageArr.length ; i++ ){
			if( i == 0 ){
				returnHtml += returnImageHtml(imageArr[i], 'photo-background-visible first-photo');
			}else{
				returnHtml += returnImageHtml(imageArr[i], 'photo-background-hidden');
			}
		}
		$('.background-image-index').html(returnHtml);
	}
}

function setBackgroundImageRotation(){
	var visibleImage = $(".photo-background-visible");
	setTimeout(function(){
		visibleImage.toggleClass('photo-background-visible photo-background-hidden')
		if(visibleImage.is(":last-child")){
			$('.first-photo').toggleClass('photo-background-visible photo-background-hidden');
		}else{
			visibleImage.next().toggleClass('photo-background-visible photo-background-hidden')
		};
		console.log("This is the ticker");
		setBackgroundImageRotation();
	}, duration);
};

function returnImageHtml(imageSrc, imageClass){
	return '<img class="img-responsive ' + imageClass + '" src="' + imageSrc +'" alt="pilot_img-responsive photography">';
}
