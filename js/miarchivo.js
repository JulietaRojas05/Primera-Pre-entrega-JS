
const contraAutorizada = 12345;

for(let i = 0; i < 100 ; i++) {

    let contraIngresada = parseInt(prompt("Ingrese 12345 para iniciar esta calculadora"));

            if(contraIngresada === contraAutorizada) {

            console.log("Proceda!");

            break;

            }else {

                passwordUsuario = parseInt(alert("Solo tenias un trabajo :( ")); 

            }
}

Bienvenidos();

function Bienvenidos() {

            alert("Bienvenido! Esta es una calculadora para que usted sepa cuantos gramos de hongos secos puede comer segun su peso");

}

    let dosis = prompt("Para ingresar a la calculadora ingrese dosisbaja, dosismedia o dosisalta");

    let peso = parseInt(prompt("Ingrese su peso: "));

        while(isNaN(peso)){

        alert("Ingresá un valor correcto")

        peso = parseInt(prompt("Ingresá tu peso (VALOR CORRECTO PLS)"));

}

    let multiHongosBajo = peso * 11 

    let multiHongosMedio = peso * 3 

    let multiHongosAlto = peso * 6

            switch(dosis) {

                case "dosisbaja":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis baja es " + (multiHongosBajo / 1000)) ;

                        break
                
                case "dosismedia":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis media es " + (multiHongosMedio / 100)) ;

                        break 
                
                case "dosisalta":

                        console.log("Felicidades! La cantidad hongos secos en gramos que puedes consumir en una dosis baja es " + (multiHongosAlto / 100)) ;

                        break   
                
                default: 
                        
                        console.log("No elegiste ninguna opcion ¿Acaso no quieres viajar? :( ");

                        break;
}


