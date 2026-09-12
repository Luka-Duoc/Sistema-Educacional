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

            const porc = parseFloat(document.getElementById("asistencia").value);

            if (nombre === "" || apellido === "") {
                alert("El nombre y/o apellido no deben estar vacio.")
                return;
            }

            const notas = [n1, n2, n3];
            const validar = notas.every(n => !isNaN(n) && n >= 1.0 && n <= 7.0);

            if (!validar) {
                alert("Las 3 notas deben ser valores numéricos válidos entre 1.0 y 7.0.");
                return;
            }

            if (isNaN(porc) || porc < 0 || porc > 100) {
                alert("La asistencia debe ser entre  0 a 100")
                return;
            }


            const promedio = (n1 * 0.30) + (n2 * 0.40) + (n3 * 0.30)            
            const clasePromedio = promedio < 4.0 ? "text-danger fw-bold" : "";

            let estado = "";
            let badgeClass = ""

            if (porc < 60) {
                estado = "Reprobado por inasistencia";
                badgeClass = "text-warning fw-bold";
            } else if (porc <= 69.9) {

                if (promedio >= 5.0) {
                    estado = "Aprobado";
                    badgeClass = "text-success fw-bold";
                } else {
                    estado = "Reprobado";
                    badgeClass = "text-danger fw-bold"
                }

            } else {
                if (promedio >= 4.0) {
                    estado = "Aprobado";
                    badgeClass = "text-success fw-bold";
                } else {
                    estado = "Reprobado";
                    badgeClass = "text-danger fw-bold"
                }
            }

            tabla.innerHTML += ` 
                <tr>
                    <td> ${nombre} </td>
                    <td> ${apellido} </td>
                    <td> ${n1} </td>
                    <td> ${n2} </td>
                    <td> ${n3} </td>
                    <td class="${clasePromedio}"> ${promedio.toFixed(1)} </td>
                    <td>  ${porc}%  </td>
                    <td class="${badgeClass}"> ${estado} </td>
                </tr>
            `;

            form.reset();

        });
    };


});