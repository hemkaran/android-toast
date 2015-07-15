# android-toast
A jQuery widget to show Andriod like toast notification in web applications.

## Usage

1. Add androidToast.js and androidToast.css file to your project. Also include jQuery and jQuery-UI files as these are dependency of the widget.

1. Create an instance of Android Toast
    <pre>
    var toast = $(window).AndroidToast({
			message : "Hi, Message has been changed"
		});
		</pre>
		
2. Show whenever you want to show it.
  <pre>
      toast.AndroidToast('show');
  </pre>
  
  
#### Dependency
1. jQuery
2. jQuery-UI
