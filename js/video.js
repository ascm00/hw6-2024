const video = document.querySelector('#player1');
let videoSpeed = 1;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//video = this.document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
	//video.autoplay = true;
 	console.log("Play Video");
	video.play();
 });

document.querySelector("#pause").addEventListener("click", function() {
	//video.autoplay = true;
 	console.log("Pause Video");
	video.pause();
 });


document.querySelector("#slower").addEventListener("click", function() {
	videoSpeed = videoSpeed - (videoSpeed*0.1);
	console.log("Video speed set to " + videoSpeed);
	video.playbackRate = videoSpeed;
 });

document.querySelector("#faster").addEventListener("click", function() {
	videoSpeed = videoSpeed + (videoSpeed*0.1);
	console.log("Video speed set to " + videoSpeed);
	video.playbackRate = videoSpeed;
 });

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Current time set to: " + video.currentTime);
 });

document.querySelector("#mute").addEventListener("click", function() {
	if(!video.muted){
		video.muted = true;
		console.log("Video muted");
	} else {
		video.muted = false;
		console.log("Video unmuted");
	}
 });

document.querySelector("#slider").addEventListener("change", function() {
	let volumeValue = document.querySelector('#slider').value;
	volumeValue = parseInt(volumeValue)/100
	console.log("Volume set to: " + volumeValue);
	video.volume = volumeValue;
	
 });

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old schoold added");
	video.classList.add('oldSchool');
 });

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old schoold removed");
	video.classList.remove('oldSchool');
 });

