var Taskbar = {
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
		
		taskbar.getElementsWithClassName("taskbar_button_list")[0].appendChild(button);
		
		return button;
	},
	
	removeButton: function(taskbar, button) {
		button = this.getButton(taskbar, button);
		
		if(!button) // can't remove what isn't there
			return;
		
		taskbar.removeChild(button);
	},
	
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
	
	getTaskbarButtons: function(taskbar) {
		return taskbar.getElementsWithClassName("taskbar_button");
	}
	
	
}