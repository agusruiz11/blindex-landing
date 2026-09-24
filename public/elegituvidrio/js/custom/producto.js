if(screen.width < 767) {


    /* Functiones que afectan a la INDEX */
    $('a.ficha_tecnica').click(function(e) {  
        e.preventDefault();
        var href = $(this).attr('href');
        var pdf = href.split('=');
        //window.location.href = 'pdf/' + pdf[1] + '.pdf';

        window.open(
          'pdf/' + pdf[1] + '.pdf',
          '_blank'
        );

    });


} else {


/* Functiones que afectan a la INDEX */
$('a').click(function(e) {
    e.preventDefault();
    //do other stuff when a click happens
});


const buttons = document.getElementsByTagName("a");

for (const button of buttons) {
  button.addEventListener('click', () => {
     var href = button.getAttribute("href");     
   
     var layerClass = ".left-layer";
     var layers = document.querySelectorAll(layerClass);
     for (const layer of layers) {
       layer.classList.toggle("active");

     }
     setTimeout(function() {window.location = href}, 100);
        return false;

   

    window.location = href;
  });
}


}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function mostrarNecesidades(cadenaADividir) {

   var arrayDeCadenas = cadenaADividir.split('+');

   for (var i=0; i < arrayDeCadenas.length; i++) {

     //Mostrar cada necesidad
     $('#' + arrayDeCadenas[i]).show();

     //Agregar el +
     if($('#' + arrayDeCadenas[i-1]).is(':visible')) {

      $('#' + arrayDeCadenas[i-1]).addClass('mas');

     }

   }
}

function mostrarTextoNecesidades(necesidades) { 

     //Quitar el +
     var i;
     for (i = 0; i < 6 ; i++) { 
        necesidades = necesidades.replace('+','_');
     }
     
     $('.' + necesidades).show();

     //alert(necesidades);

   

   
}


function alertaRollRoyce(seleccion) {

   if(seleccion === 'accidentes+robo+ruidos+energia+solar+') { $('#alertaRollRoyce').show(); }
   if(seleccion === 'accidentes+robo+energia+solar+') { $('#alertaRollRoyce').show(); }
   if(seleccion === 'robo+ruidos+energia+solar+') { $('#alertaRollRoyce').show(); }
   if(seleccion === 'robo+energia+solar+') { $('#alertaRollRoyce').show(); }

  
}

function linkFichaTecnica(seleccion,region,sol) {

  var ficha_tecnica_href = '.ficha_tecnica';
  var ficha_tecnica_link = 'ficha-tecnica.html?file=';

   //Producto 5a 5c 5d
   if(seleccion === 'accidentes+energia+' && region == 'ushuaia') {

    $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy');

  }

   //Producto 5b
   if(seleccion === 'accidentes+energia+' && region == 'resto_pais') {

      $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy');

    }

   //Producto 8a
   if(seleccion === 'accidentes+robo+ruidos+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy'); }

   //Producto 8b
   if(seleccion === 'accidentes+robo+ruidos+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo'); }
   
   //Producto 9a
   if(seleccion === 'accidentes+robo+ruidos+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy'); }

   //Producto 9b
   if(seleccion === 'accidentes+robo+ruidos+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo'); }

   //Producto 10a
   if(seleccion === 'accidentes+ruidos+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v5'); }
   if(seleccion === 'accidentes+ruidos+energia+solar+' && region == 'ushuaia') { $('video').attr("src", 'videos/12_dvh_laminado_energy.mp4')[0].load(); }

   //Producto 10b
   if(seleccion === 'accidentes+ruidos+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v5'); }
   if(seleccion === 'accidentes+ruidos+energia+solar+' && region == 'resto_pais') { $('video').attr("src", 'videos/11_dvh_solar_energy.mp4')[0].load(); }

   //Producto 11a
   if(seleccion === 'accidentes+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy'); }

   //Producto 11b
   if(seleccion === 'accidentes+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy'); }

   //Producto 13a
   if(seleccion === 'accidentes+ruidos+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v2'); }
   if(seleccion === 'accidentes+ruidos+energia+' && sol == 'otro') { $('video').attr("src", 'videos/12_dvh_laminado_energy.mp4')[0].load(); }


   //Producto 13b
   if(seleccion === 'accidentes+ruidos+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v2'); }
   if(seleccion === 'accidentes+ruidos+energia+' && sol == 'frente') { $('video').attr("src", 'videos/11_dvh_solar_energy.mp4')[0].load(); }

   //Producto 14a
   if(seleccion === 'accidentes+robo+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v4'); }
   if(seleccion === 'accidentes+robo+energia+' && sol == 'frente') {$('video').attr("src", 'videos/14_antirrobo_energy.mp4')[0].load(); }

   //Producto 14b
   if(seleccion === 'accidentes+robo+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v4'); }
   if(seleccion === 'accidentes+robo+energia+' && region == 'resto_pais') { $('video').attr("src", 'videos/13_dvh_antirrobo_solar.mp4')[0].load(); }

   //Producto 15a
   if(seleccion === 'accidentes+robo+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v4'); }
   if(seleccion === 'accidentes+robo+energia+solar+' && sol == 'frente') { $('video').attr("src", 'videos/14_antirrobo_energy.mp4')[0].load(); }

   //Producto 15b
   if(seleccion === 'accidentes+robo+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v4'); }
   if(seleccion === 'accidentes+robo+energia+solar+'  && region == 'resto_pais') { $('video').attr("src", 'videos/13_dvh_antirrobo_solar.mp4')[0].load(); }

   //Producto 16
   if(seleccion === 'accidentes+robo+solar+' && sol == 'frente') { $('video').attr("src", 'videos/16_dvh_solar_antirrobo.mp4')[0].load(); }

   //Producto 17
   if(seleccion === 'accidentes+ruidos+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-laminado'); }

   //Producto 7
   if(seleccion === 'accidentes+robo+ruidos+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-antirobo'); }

   //Producto 19
   if(seleccion === 'robo+ruidos+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-antirobo-v2'); }

   //Producto 20a
   if(seleccion === 'robo+ruidos+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v2'); }

   //Producto 20b
   if(seleccion === 'robo+ruidos+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v2'); }

   //Producto 21a
   if(seleccion === 'robo+ruidos+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v2'); }

   //Producto 21b
   if(seleccion === 'robo+ruidos+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v2'); }

   //Producto 22a
   if(seleccion === 'robo+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v3'); }
   if(seleccion === 'robo+energia+solar+' && sol == 'otro') { $('video').attr("src", 'videos/14_antirrobo_energy.mp4')[0].load(); }


   //Producto 22b
   if(seleccion === 'robo+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v3'); }
   if(seleccion === 'robo+energia+solar+' && region == 'resto_pais') { $('video').attr("src", 'videos/13_dvh_antirrobo_solar.mp4')[0].load(); }

   //Producto 23a
   if(seleccion === 'robo+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-antirobo-energy-v3'); }
   if(seleccion === 'robo+energia+' && sol == 'frente') { $('video').attr("src", 'videos/14_antirrobo_energy.mp4')[0].load(); }

   //Producto 23b
   if(seleccion === 'robo+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v3'); }
   if(seleccion === 'robo+energia+' && region == 'resto_pais') { $('video').attr("src", 'videos/13_dvh_antirrobo_solar.mp4')[0].load(); }

   //Producto 24
   if(seleccion === 'robo+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v3'); }
   if(seleccion === 'robo+solar+' && sol == 'frente') { $('video').attr("src", 'videos/16_dvh_solar_antirrobo.mp4')[0].load(); }

   //Producto 25
   if(seleccion === 'robo+ruidos+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v2'); }
   if(seleccion === 'robo+ruidos+solar+' && sol == 'frente') { $('video').attr("src", 'videos/17_dvh_solar_antirrobo_acustica.mp4')[0].load(); }

   //Producto 27a
   if(seleccion === 'ruidos+energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v3'); }
   if(seleccion === 'ruidos+energia+' && sol == 'otro') { $('video').attr("src", 'videos/12_dvh_laminado_energy.mp4')[0].load(); }


   //Producto 27b
   if(seleccion === 'ruidos+energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v3'); }
   if(seleccion === 'ruidos+energia+' && region == 'resto_pais') { $('video').attr("src", 'videos/11_dvh_solar_energy.mp4')[0].load(); }

   //Producto 16
   if(seleccion === 'accidentes+robo+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v4'); }

   //Producto 28
   if(seleccion === 'ruidos+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-laminado-v2'); }

   //Producto 29a
   if(seleccion === 'ruidos+energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v6'); }
   if(seleccion === 'ruidos+energia+solar+' && sol == 'otro') { $('video').attr("src", 'videos/12_dvh_laminado_energy.mp4')[0].load(); }

   //Producto 29b
   if(seleccion === 'ruidos+energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v3'); }
   if(seleccion === 'ruidos+energia+solar+' && region == 'resto_pais') { $('video').attr("src", 'videos/11_dvh_solar_energy.mp4')[0].load(); }

   //Producto 30a
   if(seleccion === 'energia+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v4'); }

   //Producto 30b
   if(seleccion === 'energia+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v4'); }

   //Producto 31a
   if(seleccion === 'energia+solar+' && region == 'ushuaia') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-laminado-energy-v4'); }

   //Producto 31b
   if(seleccion === 'energia+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-energy-v4'); }

   //Producto 33
   if(seleccion === 'accidentes+robo+ruidos+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-solar-antirobo-v5'); }
   if(seleccion === 'accidentes+robo+ruidos+solar+' && sol == 'frente') { $('video').attr("src", 'videos/17_dvh_solar_antirrobo_acustica.mp4')[0].load(); }

   //Producto 32
   if(seleccion === 'solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-blindex-solar-v2'); }
   if(seleccion === 'solar+' && sol == 'frente') { $('video').attr("src", 'videos/15_blindex_solar.mp4')[0].load(); }

   //Producto 6b
   if(seleccion === 'accidentes+solar+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-blindex-solar'); }

   //Producto 4
   if(seleccion === 'accidentes+ruidos+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-2laminados'); }

   //Producto 26
   if(seleccion === 'ruidos+' && region == 'resto_pais') { $('.ficha_tecnica').attr("href", ficha_tecnica_link + 'ficha-dvh-2laminados-v2'); }

   
   /*
   //Producto 6
   if(seleccion === 'accidentes+solar+' && region == 'resto_pais') {

      $('.accidentes_solar').show();

    }
    */


}


//Mostrar alerta RollRoyce
alertaRollRoyce(getUrlVars()["n"]);

//Mostar textos necesidades
mostrarTextoNecesidades(getUrlVars()["n"]);

//Mostrar necesidades
mostrarNecesidades(getUrlVars()["n"]);

