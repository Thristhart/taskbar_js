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
	}
}