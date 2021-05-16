jQuery(function ($) {
    $(".toogle").click(function () {
        $(".nav").stop().slideToggle("fast");
    });
});