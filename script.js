$(document).ready(function() {
    $('#progress-bar-container li').click(function() {
        var index = $(this).index();

        $('#progress-bar-container li').removeClass('active');
        for (var i = 0; i <= index; i++) {
            $('#progress-bar-container li').eq(i).addClass('active');
        }

        var stepWidth = $(this).outerWidth();
        var newLineWidth = stepWidth * index + (stepWidth / 24); 
        $('#line-progress').css('width', newLineWidth + 'px'); 

        $('.section-content').removeClass('active');
        $('.section-content').eq(index).addClass('active');
    });
});
