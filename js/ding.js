let app = document.querySelector('#app');

		// Track the count
		let count = 5;

		/**
		 * Play the chime sound
		 */
		function playSound () {
			let ding = new Audio('rr.mp3');
			ding.play();
		}

		// Run a callback function once every second
		let timer = setInterval(function () {

			// Reduce count by 1
			count--;

			// Update the UI
			if (count > 0) {
				app.textContent = count;
			} else {
				app.textContent = '⏰';
				clearInterval(timer);
				playSound();
			}

		}, 1000);
