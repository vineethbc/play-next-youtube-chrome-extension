let inject = () => {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.query({currentWindow: true}, (tabs) => {
	  tabs.forEach((tab) => {
		if (tab.url.startsWith('https://www.youtube.com')) {
		chrome.tabs.executeScript(tab.id, {
				file: 'inject.js'
			});
		}
	  });
	});
}

chrome.browserAction.onClicked.addListener(function (tab) {
	inject();
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'play-next-song') {
	inject();  
  }
});
