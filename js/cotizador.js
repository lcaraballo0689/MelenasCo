document.addEventListener("DOMContentLoaded", function () {
    let dataJson = {};

    fetch("cotizador.json")
        .then(response => response.json())
        .then(data => {
            dataJson = data;
            console.log("Datos cargados:", dataJson);
        })
        .catch(error => console.error("Error al cargar el JSON:", error));

    document.getElementById("cotizador-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let ubicacion = document.getElementById("ubicacion").value;
        let longitud = document.getElementById("longitud").value;
        let cantidad = document.getElementById("cantidad").value;

        console.log("Valores seleccionados:", ubicacion, longitud, cantidad);

        let resultado = dataJson?.[ubicacion]?.[longitud]?.[cantidad];

        if (resultado) {
            const formatoCOP = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0
            });

            document.getElementById("valor-min").textContent = resultado.valor_venta_min 
                ? formatoCOP.format(resultado.valor_venta_min) 
                : "No disponible";

            document.getElementById("valor-max").textContent = resultado.valor_venta_max 
                ? formatoCOP.format(resultado.valor_venta_max) 
                : "No disponible";

            document.getElementById("ganancia").textContent = resultado.ganancia 
                ? formatoCOP.format(resultado.ganancia) 
                : "No disponible";

            document.getElementById("unidad").textContent = resultado.precio_por_unidad 
                ? formatoCOP.format(resultado.precio_por_unidad) 
                : "No disponible";

            // Abrir el modal con Bootstrap API
            let modal = new bootstrap.Modal(document.getElementById("resultadoModal"));
            modal.show();
        } else {
            alert("No se encontraron datos para la selección realizada.");
        }
    });

    // Resetear el formulario al cerrar el modal
    document.getElementById("reset").addEventListener("click", () => {
        document.getElementById("cotizador-form").reset();
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const modoOscuro = document.getElementById("modoOscuro");
    const icono = modoOscuro.querySelector("i");

    modoOscuro.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");

        if (document.body.classList.contains("bg-dark")) {
            icono.classList.remove("mdi-lightbulb-outline");
            icono.classList.add("mdi-lightbulb");
            icono.style.color = "yellow"; // Cambia el color del icono a amarillo
            icono.style.textShadow = "0 0 10px yellow, 0 0 20px yellow, 0 0 30px yellow"; // Efecto neón
        } else {
            icono.classList.remove("mdi-lightbulb");
            icono.classList.add("mdi-lightbulb-outline");
            icono.style.color = ""; // Restablece el color del icono
            icono.style.textShadow = ""; // Quita el efecto neón
        }
    });
});

document.getElementById("reset").addEventListener("click", function () {
    // Restablece el formulario
    document.getElementById("cotizador-form").reset();

   

    // Restablece los valores mostrados en los resultados
    document.getElementById("valor-max").textContent = "-";
    document.getElementById("valor-min").textContent = "-";
    document.getElementById("ganancia").textContent = "-";
});
