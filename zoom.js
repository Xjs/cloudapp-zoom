var the_image, new_image, small_width, large_width, large;


function init() {
    the_image = $('#container > img:first-of-type')
    small_width = the_image.width();
    if (small_width == 0) {
        setTimeout("init()", 200);
    }
    else {
        new_image = new Image();
        new_image.src = the_image.attr("src");
        large_width = new_image.width;
        the_image.css("width", small_width);
        the_image.css("max-width", "none");
        
        large = false;
    }
}

init();

the_image.click(
    function () {
        var final_width;
        if (large)
        {
            final_width = small_width;
        }
        else
        {
            final_width = large_width;
        }
        the_image.animate({width: final_width});
        large = !large;
    }
)
