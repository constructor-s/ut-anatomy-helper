function toggle(tab) {
	browser.tabs.executeScript({
		code: `{
			// document.body.style.border = "10px solid blue";
			let items = document.querySelectorAll('text[fill="#7030A0"]');
			if (items.length > 0) {
				console.log(items);
				for (let i = 0; i < items.length; i++) {
					console.log(items[i]);
					items[i].setAttribute("fill", "#FFFFFF");
					items[i].setAttribute("purplehidden", true);
				}
			} else {
				let itemsHidden = document.querySelectorAll('text[purplehidden=true]');
				console.log(itemsHidden);
				for (let i = 0; i < itemsHidden.length; i++) {
					console.log(itemsHidden[i]);
					itemsHidden[i].setAttribute("fill", "#7030A0");
					itemsHidden[i].removeAttribute("purplehidden");
				}
			}
		}
		`
	});
}

browser.browserAction.onClicked.addListener(toggle);
