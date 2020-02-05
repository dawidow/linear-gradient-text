function gradientText(options) {

	let items = document.querySelectorAll('.gradient-text');

	if(options.primaryColor === undefined) {
		options.primaryColor = '#fff';
	}

	if(options.secondaryColor === undefined) {
		options.secondaryColor = '#000';
	}

	if(options.direction === undefined) {
		options.direction = 'bottom';
	}

	if(options.type === undefined) {
		options.type = 'linear';
	}

	items.forEach(item => {
		item.style.setProperty('background-image', `linear-gradient(to ${options.direction}, ${options.primaryColor} 0%, ${options.secondaryColor} 100%`);
		item.style.setProperty('-webkit-background-clip', 'text');
		item.style.setProperty('color', 'transparent');
	});

}

module.exports.gradientText = gradientText;