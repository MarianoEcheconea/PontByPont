function check(){

    //Limpiamos consola cada vez que ejecutamos la función.
    //Esto es simplemente para ver más claro en el navegador el resultado.
    console.clear();

    //Declaramos la variable donde vamos a guardar la cantidad de respuestas correctas.
    var correctAnswers = 0;
    var finalResult = "";

    //Obtenemos todas las etiquetas <fieldset> y sus etiquetas hijas.
    var fieldsetGroup = document.getElementsByTagName("fieldset");

    //Recorremos todas las etiquetas <fieldset> para conocer la cantidad de preguntas ya que en el HTML pusimos por cada <fieldset> una pregunta.
    for (var i = 0; i < fieldsetGroup.length; i++){

        //Declaramos la variable donde vamos a almacenar todas las opciones que tiene cada pregunta.
        var radioGroup = fieldsetGroup[i].getElementsByClassName("form-check-input");

        //Vamos a tomar una pregunta y recorrer cada una de sus opciones.
        for (var x = 0; x < radioGroup.length; x++){

            //Detectamos si la opción está seleccionada.
            if(radioGroup[x].checked){
                //Si está seleccionado vamos a revisar que su valor sea "true" para incrementar 1 punto a la variable de respuestas correctas.
                if(radioGroup[x].value == "true"){
                    correctAnswers++;
                }
                else{/*No hacemos nada*/}
            }else{/*No hacemos nada*/}
        }
    }
    
    if(fieldsetGroup.length == correctAnswers){
        finalResult = "Ganaste, sos crack!"
    }else{
        finalResult = "Noooo re perdiste!"
    }

    //Mostramos por consola la respuesta
    console.log(finalResult+" Se han detectado "+correctAnswers+" respuestas correctas de "+fieldsetGroup.length+".")
    alert(finalResult+" Se han detectado "+fieldsetGroup.length+" preguntas. De las cuales "+correctAnswers+" han sido respondidas correctamente.");
    
}

