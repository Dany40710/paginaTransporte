const btnCalcular = document.getElementById("btnCalcular");
const resultadoTexto = document.getElementById("resultadoTexto");

if (btnCalcular) {
btnCalcular.addEventListener("click", function () {

    // 🔹 1. Obtener kilómetros
    let km = Number(document.getElementById("distanciaKilometros").value);

    // 🔹 2. Obtener zona seleccionada
    let zona = document.querySelector('input[name="zonaDistancia"]:checked');

    if (!zona) {
        alert("Selecciona una ciudad");
        return;
    }

    let precioPorKm = Number(zona.value);

    // 🔹 3. Calcular costo por distancia
    let costoDistancia = km * precioPorKm;

    // 🔹 4. Obtener equipaje
    let chico = Number(document.getElementById("equipajeChico").value);
    let grande = Number(document.getElementById("equipajeGrande").value);

    // 🔹 5. Precios por maleta
    let precioChico = 10;
    let precioGrande = 20;

    let costoEquipaje =
        (chico * precioChico) +
        (grande * precioGrande);

    // 🔹 6. Total final
    let subtotal = costoDistancia + costoEquipaje;

  // 🔹 1. Salida de terminal
let terminal = document.getElementById("salidaTerminal").checked;

if (terminal) {
    subtotal += 30;
}

// 🔹 2. Zona utilidad
let aplicarZona = document.getElementById("activarZona").checked;
let totalFinal = subtotal;

if (aplicarZona) {
    let porcentaje = Number(document.getElementById("zonaUtilidad").value);
    totalFinal = subtotal * (1 + porcentaje);
}

// 🔹 Mostrar resultado
document.getElementById("costoTotal").textContent =
    "$ " + totalFinal.toFixed(2);

if (resultadoTexto) {
    resultadoTexto.classList.remove("d-none");
}
});
}


const activarZona = document.getElementById("activarZona");

if (activarZona) {
activarZona.addEventListener("change", function() {
    let select = document.getElementById("zonaUtilidad");

    if (this.checked) {
        select.style.display = "block";
    } else {
        select.style.display = "none";
    }
});
}