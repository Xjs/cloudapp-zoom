var the_image = $('#container > *:first-of-type')
var small_width = the_image.width();
var new_image = new Image();
new_image.src = the_image.attr("src");
var large_width = new_image.width;
the_image.css("width", small_width);
the_image.css("max-width", "none");

var large = false;

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