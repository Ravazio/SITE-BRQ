
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	//Carrega a posição Y para ir para a sessão do desenvolvedores caso a posição Y esteja no local storage
	let posicaoY = window.localStorage.getItem('posicaoY');
	if(posicaoY){
		window.scrollTo(0, posicaoY - $(".gallery-dois").height());
		window.localStorage.removeItem('posicaoY');
	}

	$(".gallery-dois a").on('click', function(){
		window.localStorage.setItem('posicaoY', window.scrollY);
	});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

