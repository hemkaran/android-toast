/**
 * Created by hemkaran on 5/20/14.
 */
/**
 * Toast Notification like android
 * Dependency : jQuery and jQueryUI
 * Usage :
 * include AndroidToast.js and AndroidToast.css in your HTML file
 * <script src="AndroidToast.js"></script>
 * <link rel="stylesheet" href="AndroidToast.css"/>
 *
 * Where you want to show toast notification, write :
 * Declaration : var toast = $(window).AndroidToast();
 * Usage: toast.AndroidToast('show');
 *
 * Options: (default values are given)
 * message:"Hi, I am android like toast",    //message to show
 * fadeInTime : "700",                       //fade in time for toast
 * fadeOutTime : "400",                     //fade out time for toast
 * easing: "swing",                         //easing to show toast
 * stayTime: "1000",                        //delay time to stay on the screen
 * maxWidth: "300",                         //max-width toast can
 * bottomPosition: "150",                   //value from bottom of the window
 * customClass : "",                        //custom class to add, you can give your own css using custom class
 * beforeShow: function() {},               //method to trigger before the toast shows
 * afterShow : function() {},               //method to trigger after the toast show
 * afterHide : function(){}                 //method to trigger after the toast hide
 */
$.widget("ui.AndroidToast",{
    options : {
        message:"Hi, I am android like toast",
        fadeInTime : "700",
        fadeOutTime : "400",
        easing: "swing",
        stayTime: "1000",
        maxWidth: "300",
        bottomPosition: "150",
        customClass : "",
        beforeShow: function() {},
        afterShow : function() {},
        afterHide : function(){}
    },
    _element:null,
    _create: function() {
        if($("#hr-toast").length == 0) {
            $("body").prepend("<div id='hr-toast' style='display:none'>" + this.options.message + "</div>");
        } else {
            $("#hr-toast").innerHTML(this.options.message);
        }
        this._element = $("#hr-toast");
        this._element.addClass(this.options.customClass);
        this.options.maxWidth = parseInt(this.options.maxWidth);
        this.options.bottomPosition = parseInt(this.options.bottomPosition);
        this._element.css({
            bottom: this.options.bottomPosition,
            maxWidth: this.options.maxWidth
        });
    },
    show: function() {
        this.options.beforeShow();
        this._element.fadeIn(this.options.fadeInTime,this.options.easing,this.options.afterShow).delay(this.options.stayTime).fadeOut(this.options.fadeOutTime,this.options.easing,this.options.afterHide);
    }
});
