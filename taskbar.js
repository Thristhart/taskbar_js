var Taskbar = {
	// Generate a DOM element with the required classes and hierarchy
	build: function() {
		var taskbar = document.createElement("div");
		taskbar.className = "taskbar";
		
		var taskbar_button_table = document.createElement("table");
		taskbar_button_table.className = "taskbar_button_table";
		
		var taskbar_button_list = document.createElement("ul");
		taskbar_button_list.className = "taskbar_button_list"
		
		taskbar_button_table.appendChild(taskbar_button_list);
		taskbar.appendChild(taskbar_button_table);
		return taskbar;
	},
	
	// Add a button to the taskbar
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	//		- button
	//			when String, creates a button with the string as the innerHTML, and appends the element to the taskbar.
	//			when DOM element, simply appends the element to the taskbar.
	addButton: function(taskbar, button) {
		if(!button) {
			button = document.createElement("li");
		}
		else if(button instanceof String || typeof button == "string") {
			var elem = document.createElement("li");
			elem.innerHTML = button;
			button = elem;
		}
		button.className += " taskbar_button"; // TODO: Check if the button has this class already
		
		taskbar.getElementsByClassName("taskbar_button_list")[0].appendChild(button);
		
		return button;
	},
	
	// Remove a button from the taskbar
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	//		- button, which is passed to #getButton to find the button in question
	removeButton: function(taskbar, button) {
		button = this.getButton(taskbar, button);
		
		if(!button) // can't remove what isn't there
			return;
		taskbar.getElementsByClassName("taskbar_button_list")[0].removeChild(button);
	},
	// Returns the taskbar's total width in pixels
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	getWidth: function(taskbar) {
		return taskbar.offsetWidth;
	},
	// Answers the question: If all the buttons in the taskbar had width equal to their max-width, what would the total width of the buttons be?
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	getTotalWidth: function(taskbar) {
		var buttons = this.getTaskbarButtons(taskbar);
		if(buttons.length == 0) {
			return 0;
		}
		// We use an arbitrary button's width because we don't support different-width buttons
		var first_button = buttons[0];
		var style = window.getComputedStyle(first_button);
		var max_width = parseInt(style.maxWidth);
		
		if(isNaN(max_width)) {
			max_width = 0;
		}
		
		return max_width * buttons.length;
	},
	
	// Search for a button
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	//		- button
	//			when String, searches for a button with the string as innerHTML
	//			when DOM element, simply returns the element passed
	getButton: function(taskbar, button) {
		// if it's an element and it's a button they've already got it
		if(button.nodeName && button.className.indexOf("taskbar_button") != 0)
			return button;
		
		if(button instanceof String || typeof button == "string") {
			var buttons = this.getTaskbarButtons(taskbar);
			for(var i in buttons) {
				if(buttons[i].innerHTML == button)
					return buttons[i];
			}
		}
		
		return null; // we can't find the button!
	},
	
	// Return an array of the buttons in the taskbar.
	// Params:
	//		- taskbar, a taskbar built by Taskbar.build()
	getTaskbarButtons: function(taskbar) {
		return taskbar.getElementsByClassName("taskbar_button");
	}
	
	
}