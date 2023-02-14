canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90));


	else
    {
		outras();
		document.getElementById("d1").innerHTML="Você apertou uma tecla da classe outras";
        alfabeto();
		document.getElementById("d1").innerHTML="Você apertou uma tecla da classe alfabeto";
        número();
		document.getElementById("d1").innerHTML="Você apertou uma tecla da classe número";
        direcional();
		document.getElementById("d1").innerHTML="Você apertou uma tecla da classe direcional";
        especial();
		document.getElementById("d1").innerHTML="Você apertou uma tecla da classe especial";
       
	}

}


function alfabeto()
{
    img_image:"alfabeto.png";
    add();

}
function número()
()
{
	img_image:"número.png";
    add();
}
function direcional()
{
    img_image:"direcional.png";
    add();
}
function especial()
{
	img_image:"especial.png";
    add();
}
function outras()
{
	img_image="outras.png";
	add();
}