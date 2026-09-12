document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formEstudiante");
    const tabla = document.getElementById("tablaEstudiantes");

    if (form && tabla) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            
            const n1 = parseFloat(document.getElementById("nota1").value);
            const n2 = parseFloat(document.getElementById("nota2").value);
            const n3 = parseFloat(document.getElementById("nota3").value);

            if (nombre === "" || apellido === "") {
                alert("El nombre y/o apellido no deben estar vacio.")
                return;
            };

            const notas = [n1, n2, n3];
            const validar = notas.every(n => !isNaN(n) && n >= 1.0 && n <= 7.0);

            if (!validar) {
                alert("Las 3 notas deben ser valores numéricos válidos entre 1.0 y 7.0.");
                return;
            }

            const promedio = (n1 * 0.30) + (n2 * 0.40) + (n3 * 0.30)
            const aprobado = promedio >= 4.0;
            const estado = aprobado ? "Aprobado" : "Reprobado";
            const badgeClass = aprobado ? "text-success fw-bold" : "text-danger fw-bold";

            const clasePromedio = promedio < 4.0 ? "text-danger fw-bold" : ""

            tabla.innerHTML += ` 
                <tr>
                    <td> ${nombre} </td>
                    <td> ${apellido} </td>
                    <td class="${clasePromedio}"> ${promedio.toFixed(1)} </td>
                    <td class="${badgeClass}"> ${estado} </td>
                </tr>
            `;

            form.reset();

        });
    };


});