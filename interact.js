/*
-When a button is clicked, the corresponding paragraph will be displayed, and all others will be hidden. 
- Targeting buttons in the research questions part
*/

// Get all the buttons
const buttons = document.querySelectorAll('.r-button');

// Add event listener to each button
buttons.forEach((button) => {
	button.addEventListener('click', function () {
		// Hide all ul elements
		document.querySelectorAll('.content-container ul').forEach((ul) => {
			ul.style.display = 'none';
		});

		// Get the ul id based on the button id
		const ulId = this.id.replace('btn-', 'content');

		// Display the corresponding ul
		document.getElementById(ulId).style.display = 'block';

		// Change the button's background color to indicate it's active
		this.style.backgroundColor = '#b0c4b1';

		// Reset the background color of all buttons to default
		buttons.forEach((btn) => {
			if (btn !== this) {
				btn.style.backgroundColor = '';
			}
		});
	});
});

// Ensure the first button is selected by default
if (buttons.length > 0) {
	buttons[0].style.backgroundColor = '#b0c4b1'; // Set the first button's background color to indicate it's active
}
