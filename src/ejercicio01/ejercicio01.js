function resolver() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res").value;

    let solucion = document.getElementById("solucion");

    for (let d = 0; d <= 9; d++) {
        num1 = num1.toUpperCase();
        num2 = num2.toUpperCase();
        res  = res.toUpperCase();

        let n1 = parseInt(num1.replace("X", d));
        let n2 = parseInt(num2.replace("X", d));
        let r  = parseInt(res.replace("X", d));

        if (n1 + n2 === r) {
            solucion.innerText = "El valor de X es: " + d;
            return;
        }
    }

    solucion.innerText = "No se encontró solución válida.";
}