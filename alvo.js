    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 800, 400);

    var raio = 10;
    var xAleatorio;
    var yAleatorio;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }
    function desenhaAlvo (x, y){
        desenhaCirculo(x, y, raio + 20, 'red'); // maior círculo
        desenhaCirculo(x, y, raio + 10, 'white');
        desenhaCirculo(x, y, raio, 'red'); // menor circulo
    }

    function coordenadas(maximo) {
        return Math.floor (Math.random() * maximo)
    }
    function limpaTela(){
        pincel.clearRect(0, 0, 800, 400);
    }
    function atualizaTela() {
        xAleatorio = coordenadas(800);
        yAleatorio = coordenadas(400);
        limpaTela();    
        desenhaAlvo (xAleatorio, yAleatorio);
    }

    setInterval(atualizaTela, 900);

    function tiro(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

       if ( x > xAleatorio - raio
        && x < xAleatorio + raio 
            && y > yAleatorio - raio   
                && y < yAleatorio + raio)
                 { alert("Você acertou!");}
    }

    tela.onclick = tiro;