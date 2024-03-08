var multiplicador = 7;

$('.roulett').click(function(){
    $('.roulett').css('pointer-events', 'none');
    $('.colors').removeClass('animation');
    var color = colorAleatorio(1, 360);
    
    $('#animation').empty().append(
        '@keyframes animation{'+
        '0%{transform: rotate(0deg)}'+
        '100%{transform: rotate('+color+'deg)}'+
        '}'
    );

    setTimeout(function(){
        $('.colors').addClass('animation');
    }, 1);

    setTimeout(function(){
        if(color > 0 && color <= (90 + (360 * multiplicador))){
            $('#roulette').css('background-color', 'var(--bg-b)');
        } else if(color > (90 + (360 * multiplicador)) && color <= (180 + (360 * multiplicador))){
            $('#roulette').css('background-color', 'var(--bg-y)');
        } else if(color > (180 + (360 * multiplicador)) && color <= (270 + (360 * multiplicador))){
            $('#roulette').css('background-color', 'var(--bg-g)');
        } else if(color > (270 + (360 * multiplicador))){
            $('#roulette').css('background-color', 'var(--bg-r)');
        }
        $('.roulett').css('pointer-events', 'initial');
    }, 4000);

    setTimeout(function() {
        $('#roulette').css('background-color', 'var(--bg-cont-b)');
    },10000);
});

function colorAleatorio(min, max) {
    var colorAleatorio = ((Math.random() * (max - min) + min).toFixed(0)) * 1;
    colorAleatorio = colorAleatorio + (360 * multiplicador);
    return colorAleatorio;
}
