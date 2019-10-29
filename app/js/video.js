let video = document.getElementById("videoBG"),
quality = document.querySelector(".video-banner__panel__buttons__quality"),
qualityList = document.querySelector(".video-banner__panel__buttons__quality__settings"),
qualityItem360 = document.querySelector(".video-banner__panel__buttons__quality__settings__item__link--360"),
qualityItem720 = document.querySelector(".video-banner__panel__buttons__quality__settings__item__link--720"),
qualityItem1080 = document.querySelector(".video-banner__panel__buttons__quality__settings__item__link--1080"),
qualityItemActive = 'video-banner__panel__buttons__quality__settings__item--active'

;
//quality toggle

quality.onclick = function() {
	if(qualityList.style.display == "block" || qualityList.style.display == "inline-block" || qualityList.style.display == "") 
		qualityList.style.display = "none"
	else if(qualityList.style.display === "none") 
		qualityList.style.display = "block";
}
qualityItem360.onclick = function() {
	qualityItem360.classList.add(qualityItemActive);
	qualityItem720.classList.remove(qualityItemActive);
	qualityItem1080.classList.remove(qualityItemActive);
}
qualityItem720.onclick = function() {
	qualityItem720.classList.add(qualityItemActive);
	qualityItem360.classList.remove(qualityItemActive);
	qualityItem1080.classList.remove(qualityItemActive);
}
qualityItem1080.onclick = function() {
	qualityItem1080.classList.add(qualityItemActive);
	qualityItem720.classList.remove(qualityItemActive);
	qualityItem360.classList.remove(qualityItemActive);
}

//start video
video.onclick = function() {
	video.play();
}

//progress bar + video last 4 seconds
let progressBar = document.querySelector(".video-banner__panel__progress__time");
let nextVideo = document.querySelector(".next-video"),
nextVideoButton = nextVideo.querySelector(".button-circle--video");

video.addEventListener('timeupdate', function(){
	let videoCurrentTime = video.currentTime;
	let videoDuration = video.duration;
	//progress
	let progressPosition = videoCurrentTime / videoDuration;
	progressBar.style.width = progressPosition * 100 + "%";
	//last 4 seconds
	if(videoDuration - videoCurrentTime <= 4) {
		nextVideo.style.display = "flex";
	} else {
		nextVideo.style.display = "none";
	}
	if(video.ended) checkVideoEnd();
})
//if nextVideoButton pressed
nextVideoButton.onclick = function() {
	checkVideoEnd();
}

//video info/ pause/ play
let videoInfoButton = document.querySelector(".video-banner__panel__info"),videoInfo = document.querySelector(".modal-info"),
videoCloseButton = document.querySelector(".button-circle--close"),
videoInfoContainerFirst = videoInfo.querySelector('.container--first'),
videoInfoContainerSecond = videoInfo.querySelector('.container--second')
;
videoInfoButton.onclick = function() {
	video.pause();
	videoInfoButton.style.display = "none";
	videoInfo.style.display = "flex";
	videoCloseButton.style.display = "flex";
}
videoCloseButton.onclick = function() {
	if(video.paused) video.play();
	videoCloseButton.style.display = "none";
	videoInfoButton.style.display = "block";
	videoInfo.style.display = "none";
}
videoInfoContainerFirst.addEventListener('click', function(e){
	e.stopPropagation();
});
videoInfoContainerSecond.addEventListener('click', function(e){
	e.stopPropagation();
});
videoInfo.addEventListener('click', function(){
	videoCloseButton.style.display = "none";
	videoInfo.style.display = "none";
	videoInfoButton.style.display = "block";
	if(video.paused) video.play();
});

//last 4 seconds

video.addEventListener('timeupdate', function(){
	let progressPosition = video.currentTime / video.duration;
	progressBar.style.width = progressPosition * 100 + "%";
})

//video end => new video
const numberOfVideo = 3;

function checkVideoEnd() {
	let pathString = window.location.href;
	for(let i = 1; i <= numberOfVideo; i++) {
		if(pathString.indexOf(`video${i}`) != -1 && i != numberOfVideo)
			document.location.href = `./video${i + 1}.html`;
		// else if(pathString.indexOf(`video${i}`) != -1 && i == numberOfVideo)
		// 	document.location.href = `./video${1}.html`;
	}
}
