(function() {

	if (!location.host.includes('youtube.com')) {
		return;
	}
					
	let nextButton = document.querySelectorAll('.ytp-next-button')[0];

	if (!nextButton) {
		return;
	}

	if (!HTMLMediaElement.prototype.hasOwnProperty('isPlaying')) {
		Object.defineProperty(HTMLMediaElement.prototype, 'isPlaying', {
			get: function(){
				return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
			}
		})
	}

	let video = document.querySelectorAll('video.video-stream')[0];

	if (!video.isPlaying) {
		return;
	}
	
	nextButton.click();

})();