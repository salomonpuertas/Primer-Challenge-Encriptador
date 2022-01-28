/* llaves de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* llaves de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"

/* Solo letras minusculas

No se permite acentuación de palabras  
*/  


var texto_entrada = document.getElementById("input-texto");
var btn_encriptar = document.getElementById("btn-encriptar");
var btn_desencriptar = document.getElementById("btn-desencriptar");
var btn_copiar = document.getElementById("btn-copy");
var texto_salida = document.getElementById("msg");


function desencriptar(){
	var mensaje = texto_entrada.value;
	var mensaje_desencriptado = "";
	
	mensaje_desencriptado = mensaje.replace(/ai/gi , "a").replace(/enter/gi , "e").replace(/imes/gi , "i").replace(/ober/gi , "o").replace(/ufat/gi , "u");
	mostrar_mensaje(mensaje_desencriptado);
}


function encriptar(){
	var mensaje = texto_entrada.value;
	var mensaje_encriptado = "";

	if (validar_datos(mensaje)){
		mensaje_encriptado = mensaje.replace(/e/ , "enter").replace(/i/ , "imes").replace(/a/ , "ai").replace(/o/ , "ober").replace(/u/ , "ufat");
		mostrar_mensaje(mensaje_encriptado);
	}
	else{
		alert("Error, por favor ingrese solo letras minúsculas, sin acento ni caracteres especiales");
	}
	
}

function mostrar_mensaje(mensaje){
	texto_salida.value = mensaje;
}

function validar_datos(mensaje){
	return (mensaje == mensaje.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}áéíóú1234567890]/g, ''));
}
function copiar(){
	texto_salida.select();
	texto_salida.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(texto_salida.value);

}

btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copiar.onclick = copiar;