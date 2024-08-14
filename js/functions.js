const texto = document.getElementById('text');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;

// Función de encriptación
const encriptacion = texto => {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función de desencriptación con orden corregido
const desencriptacion = texto => {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

let textoFinal = '';

// Verifica si el texto contiene acentos
function verAcentos(texto) {
    let resultado = acentos.test(texto);
    if (resultado) {
        error.classList.add("error"); 
    } else {
        error.classList.remove("error");
    }
    return resultado;
}

// Función para encriptar texto
function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos(textoInicial);

    // Verifica si el campo está vacío
    if (textoInicial.trim() === '') {
        window.location.reload();
        return;
    }

    // Si no hay acentos y el campo no está vacío, encripta el texto
    if (!acento) {
        textoFinal = encriptacion(textoInicial);
        imagen.classList.add("ocultarImagen");
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

// Función para desencriptar texto
function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos(textoInicial);

    // Verifica si el campo está vacío
    if (textoInicial.trim() === '') {
        window.location.reload();
        return;
    }

    // Si no hay acentos y el campo no está vacío, desencripta el texto
    if (!acento) {
        textoFinal = desencriptacion(textoInicial);
        imagen.classList.add("ocultarImagen");
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
    }    
}

// Copiar el texto encriptado/desencriptado al portapapeles
copiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoFinal);
});
