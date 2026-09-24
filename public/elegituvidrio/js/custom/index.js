/* Functiones que afectan a la INDEX */

const buttons = document.getElementsByTagName("button");

if(screen.width < 576) {
for (const button of buttons) {
  button.addEventListener('click', () => {
     var href = button.getAttribute("href");

     /*
    	
     var layerClass = ".left-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");

     }

     */
   
  });
}

} else {


	for (const button of buttons) {
  button.addEventListener('click', () => {
     var href = button.getAttribute("href");
    	
     var layerClass = ".left-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");

     }
   
  });
}

}

$('.continuar').attr("disabled", true);
var contar_seleccionado = 0;

function habilitar_button(a) {

	var button = $('.' + a).attr("disabled",false);
	$('.' + a).fadeIn();
}

//Acciones sobre los botones de las necesidades
$('.botonera a').attr("seleccionado",'no');
$('.botonera a').click(function(){

	var seleccion = $(this).attr("seleccion");
	var seleccionado = $(this).attr("seleccionado");

	//Verificar si no fue seleccionada
	if(seleccionado == 'no') {

		//Marcar como seleccionado
		$(this).attr("seleccionado",'si');
		seleccionado = $(this).attr("seleccionado");
		contar_seleccionado++;

		//Cambiar background
		$(this).find('img').attr("src", function(index, attr){
        	return attr.replace(".gif", "_on.png");
    	});

    	//Quitar clase seleccionado
		//$(this).find('img').addClass("seleccionado");

		$([document.documentElement, document.body]).animate({
						        scrollTop: $('.div_continuar').offset().top
						    }, 500);	


	} else {

		//Marcar como seleccionado
		$(this).attr("seleccionado",'no');
		seleccionado = $(this).attr("seleccionado");
		contar_seleccionado--;

		//Cambiar background
		$(this).find('img').attr("src", function(index, attr){
        	return attr.replace("_on.png", ".gif");
    	});
		
	}

	//Activar el boton de continuar
	if(contar_seleccionado > 0) {	
		habilitar_button('continuar');
	} else {
		$('.continuar').hide();
	} 

});

//Click en continuar
$('#continuar').click(function(){

	var seleccion = '';

	  $(".botonera a").each(function(index) {
	     
	      var seleccionado = $(this).attr("seleccionado");
	      if(seleccionado == 'si') {

	      	seleccion = seleccion + $(this).attr("seleccion") + '+';


	      }

	      

	  });
	  
	  //alert(seleccion);

	  var agregarSeleccion = '?n=' +seleccion;

	  //Blindex Laminado
	  if(seleccion === 'accidentes+') { href = 'blindex-laminado.html' + agregarSeleccion; }

	  //Blindex Antirrobo
	  if(seleccion === 'accidentes+robo+') { href = 'blindex-antirrobo.html' + agregarSeleccion; }

	  //DVH Blindex Doble Laminado
	  if(seleccion === 'accidentes+ruidos+') { href = 'dvh-blindex-doble-laminado.html' + agregarSeleccion; }

	  //Accidentes + Energia
	  if(seleccion === 'accidentes+energia+') { href = 'provincias/accidentes+energia.html' + agregarSeleccion; }

	  //Accidentes + Solar
	  if(seleccion === 'accidentes+solar+') { href = 'blindex-solar.html' + agregarSeleccion; }

	  //Accidentes + Robo + Ruidos
	  if(seleccion === 'accidentes+robo+ruidos+') { href = 'dvh-blindex-laminado-antirrobo.html' + agregarSeleccion; }

	  //accidentes+robo+ruidos+energia
	  if(seleccion === 'accidentes+robo+ruidos+energia+') { href = 'provincias/accidentes+robo+ruidos+energia.html' + agregarSeleccion; }

	  //accidentes+robo+ruidos+energia+solar
	  if(seleccion === 'accidentes+robo+ruidos+energia+solar+') { href = 'provincias/accidentes+robo+ruidos+energia+solar.html' + agregarSeleccion; }

	  //accidentes+ruidos+energia+solar
	  if(seleccion === 'accidentes+ruidos+energia+solar+') { href = 'provincias/accidentes+ruidos+energia+solar.html' + agregarSeleccion; }

	  //accidentes+energia+solar
	  if(seleccion === 'accidentes+energia+solar+') { href = 'provincias/accidentes+energia+solar.html' + agregarSeleccion; }

	  //accidentes+solar
	  if(seleccion === 'accidentes+solar+') { href = 'blindex-solar.html' + agregarSeleccion; }

	  //accidentes+ruidos+energia
	  if(seleccion === 'accidentes+ruidos+energia+') { href = 'provincias/accidentes+ruidos+energia.html' + agregarSeleccion; }

	  //accidentes+robo+energia
	  if(seleccion === 'accidentes+robo+energia+') { href = 'provincias/accidentes+robo+energia.html' + agregarSeleccion; }

	  //accidentes+robo+energia+solar
	  if(seleccion === 'accidentes+robo+energia+solar+') { href = 'provincias/accidentes+robo+energia+solar.html' + agregarSeleccion; }

	  //accidentes+robo+solar
	  if(seleccion === 'accidentes+robo+solar+') { href = 'dvh-blindex-antirrobo-solar.html' + agregarSeleccion; }

	  //accidentes+ruidos+solar
	  if(seleccion === 'accidentes+ruidos+solar+') { href = 'dvh-blindex-laminado-solar.html' + agregarSeleccion; }

	  //robo
	  if(seleccion === 'robo+') { href = 'blindex-antirrobo.html' + agregarSeleccion; }

	  //robo+ruidos
	  if(seleccion === 'robo+ruidos+') { href = 'dvh-blindex-laminado-antirrobo.html' + agregarSeleccion; }

	  //robo+ruidos+energia
	  if(seleccion === 'robo+ruidos+energia+') { href = 'provincias/robo+ruidos+energia.html' + agregarSeleccion; }

	  //robo+ruidos+energia+solar
	  if(seleccion === 'robo+ruidos+energia+solar+') { href = 'provincias/robo+ruidos+energia+solar.html' + agregarSeleccion; }

	  //robo+energia+solar
	  if(seleccion === 'robo+energia+solar+') { href = 'provincias/robo+energia+solar.html' + agregarSeleccion; }

	  //robo+energia
	  if(seleccion === 'robo+energia+') { href = 'provincias/robo+energia.html' + agregarSeleccion; }

	  //robo+solar
	  if(seleccion === 'robo+solar+') { href = 'dvh-blindex-antirrobo-solar.html' + agregarSeleccion; }

	  //robo+ruidos+solar
	  if(seleccion === 'robo+ruidos+solar+') { href = 'dvh-blindex-antirrobo-solar.html' + agregarSeleccion; }

	  //ruidos
	  if(seleccion === 'ruidos+') { href = 'dvh-blindex-doble-laminado.html' + agregarSeleccion; }

	  //ruidos+energia
	  if(seleccion === 'ruidos+energia+') { href = 'provincias/ruidos+energia.html' + agregarSeleccion; }

	  //ruidos+solar
	  if(seleccion === 'ruidos+solar+') { href = 'dvh-blindex-laminado-solar.html' + agregarSeleccion; }

	  //ruidos+energia+solar
	  if(seleccion === 'ruidos+energia+solar+') { href = 'provincias/ruidos+energia+solar.html' + agregarSeleccion; }

	  //energia
	  if(seleccion === 'energia+') { href = 'provincias/energia.html' + agregarSeleccion; }

	  //energia+solar
	  if(seleccion === 'energia+solar+') { href = 'provincias/energia+solar.html' + agregarSeleccion; }

	  //solar
	  if(seleccion === 'solar+') { href = 'blindex-solar.html' + agregarSeleccion; }

	  //solar
	  if(seleccion === 'accidentes+robo+ruidos+solar+') { href = 'dvh-blindex-antirrobo-solar.html' + agregarSeleccion; }

	  
	  //alert(href);
	  
	  //Redireccionar en base a la seleccion y href
	  setTimeout(function() {window.location = href}, 450);

	

	

});