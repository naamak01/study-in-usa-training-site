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
		this.style.backgroundColor = '#0c0c0c';
		this.style.color = '#fbfbfc';

		// Reset the background color of all buttons to default
		buttons.forEach((btn) => {
			if (btn !== this) {
				btn.style.backgroundColor = '';
				btn.style.color = '#023047';
			}
		});
	});
});

// Ensure the first button is selected by default
if (buttons.length > 0) {
	buttons[0].style.backgroundColor = '#0c0c0c'; // Set the first button's background color to indicate it's active
	buttons[0].style.color = '#fbfbfc'; // Changes font color to white
}
