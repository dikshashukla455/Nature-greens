const videoFile = document.getElementById("video-file"),
	videoButton = document.getElementById("video-button"),
	videoIcon = document.getElementById("video-icon");

function playPause() {
	if (videoFile.paused) {
		// Play video
		videoFile.play();
		// We change the icon
		videoIcon.classList.add("bx-pause");
		videoIcon.classList.remove("bx-play");
	} else {
		// Pause video
		videoFile.pause();
		// We change the icon
		videoIcon.classList.remove("bx-pause");
		videoIcon.classList.add("bx-play");
	}
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
	// Video ends, icon change
	videoIcon.classList.remove("bx-pause");
	videoIcon.classList.add("bx-play");
}
// ended, when the video ends
videoFile.addEventListener("ended", finalVideo);

