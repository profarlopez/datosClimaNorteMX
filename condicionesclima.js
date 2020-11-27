function cargarDatos(){
    console.log("diste");

    $.ajax({
        url: "https://api.datos.gob.mx/v1/condiciones-atmosfericas",
        type: 'GET',
        dataType: 'JSON',
        
        success: function(respuesta){
            console.log("todo bien",respuesta.results);            
            var resultados = $("#resultado");
            $.each(respuesta.results, function(index, elemento){
                resultados.append('<div>'+elemento.name + " | "+ elemento.skydescriptionlong+ " | "+ elemento.tempc + "° C"+'</div>');
            });
        }
    });

}