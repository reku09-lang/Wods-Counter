$(function(){

    $('#text').on('input', function(){
        var count = $('#text').val().length;
        $('span').html(count);
    })

    $('button').on('click', function(){
        $('#text').select();
        document.execCommand('copy');
        $('.copy').fadeIn(200).delay(1000).fadeOut(300);
    });

});