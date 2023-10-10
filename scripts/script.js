// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/simulacroExamenTema1DWEC.git

function calcularAreaPerimetro(){
    let longitud = document.getElementById("longitud").value;
    let ancho = document.getElementById("ancho").value;

    let area = 0;
    let perimetro = 0;

    if(longitud > 0 && ancho > 0){
        area = longitud * ancho;
        perimetro = (longitud * longitud) + (ancho * ancho);
    }

    document.getElementById("area").innerHTML = "Ärea del rectangulo: " + area;
    document.getElementById("perim").innerHTML = "Longitud del rectángulo: " + perimetro;
}