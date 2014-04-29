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
		button.className += " taskbar_button"; // TODO: Check if the button has this class already
		
		taskbar.getElementsWithClassName("taskbar_button_list")[0].appendChild(button);
	}
	
	getTaskbarButtons: function(taskbar) {
		return taskbar.getElementsWithClassName("taskbar_button");
	}
	
	
}