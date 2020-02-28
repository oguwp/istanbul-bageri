// VIDEO

// Get the video
const video = document.getElementById("myVideo");

// Controls video
video.muted = true;
video.loop = true;
video.autoplay = true;


$(function () {
    $(".divload").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".divload:hidden").slice(0, 4).slideDown();
    });
});