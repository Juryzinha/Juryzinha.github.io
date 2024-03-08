<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Cartas</title>
    <link rel="stylesheet" href="style.css">
    <audio src="bundia.mp3" id="aud1"></audio>
</head>
<body>
    <div class="container">
        <div class="card" onclick="flipCard(this)">
            <div class="front">1</div>
            <div class="back"><p>Que parte do corpo é mais afetada pela tuberculose?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">2</div>
            <div class="back"><p>Como a tuberculose é transmitida?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">3</div>
            <div class="back"><p>Uma pessoa com tuberculose pode trabalhar?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">4</div>
            <div class="back"><p>Uma pessoa pode contrair a bactéria da TB e não desenvolver a doença?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">5</div>
            <div class="back"><p>Onde os medicamentos da tuberculose são disponibili-zados?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">6</div>
            <div class="back"><p>A tuberculose e transmitida pelo compartilha-mento de objetos?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">7</div>
            <div class="back"><p>Somente pessoas com AIDS tem tuberculose?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">8</div>
            <div class="back"><p>É possível se prevenir da TB com vacina?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">9</div>
            <div class="back"><p>Qual é a cor do mês da Tuberculose?</p></div>
        </div>

        <div class="card" onclick="flipCard(this)">
            <div class="front">10</div>
            <div class="back"><p>Uma pessoa com HIV, pode pegar tuberculose?</p></div>
        </div>
    </div>

    <div id="roulette">
        
    </div>

    <div class="contenedor">
        <div class="roulett">
            <div class="colors">
                <div class="colorOne"></div>
                <div class="colorTwo"></div>
                <div class="colorThree"></div>
                <div class="colorFour"></div>
            </div>
        </div>
    </div>
    <style id="animation"></style>
    <div id="premios">
        <h4 class="red"> premio vermelho </h4>
        <h4 class="green"> premio verde </h4>
        <h4 class="blue"> premio azul </h4>
        <h4 class="orange"> premio amarelo </h4>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    <script src="roulette.js"></script>
</body>
</html>
