<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
$(function(){
});
var carouselList = $("#carousel ul");

setInterval(changeSlide, 3000);
carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");
lastItem.after(firstItem);
carouselList.css({marginLeft:0});