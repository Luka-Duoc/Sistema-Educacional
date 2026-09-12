document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formEstudiante");
    const tabla = document.getElementById("tablaEstudiantes");

    if (form && tabla) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const promedio = parseFloat(document.getElementById("promedio").value);

            if (nombre === "" || apellido === "") {
                alert("El nombre y/o apellido no deben estar vacio.")
                return;
            };

            if (isNaN(promedio) ||promedio < 1.0 || promedio > 7.0) {
                alert("El promedio debe estar entre 1.0 a 7.0");
                return;
            };

            const aprobado = promedio >= 4.0;
            const estado = aprobado ? "Aprobado" : "Reprobado";
            const badgeClass = aprobado ? "text-success fw-bold" : "text-danger fw-bold";


            tabla.innerHTML += ` 
                <tr>
                    <td> ${nombre} </td>
                    <td> ${apellido} </td>
                    <td> ${promedio.toFixed(1)} </td>
                    <td class="${badgeClass}"> ${estado} </td>
                </tr>
            `;

            form.reset();

        });
    };


});