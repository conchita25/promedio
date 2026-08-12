 nombre= prompt("Ingrese su nombre: ")
            calif1 = parseFloat(prompt("Ingrese la primera calificación: "))
            calif2 = parseFloat(prompt("Ingrese la segunda calificación: "))
            calif3 = parseFloat(prompt("Ingrese la tercera calificación: "))

            prmedio= (calif1 + calif2 + calif3) / 3
            alert("Hola " + nombre + ", tu promedio es: " + prmedio)

            if (prmedio >= 6) {
                alert("Felicidades " + nombre + ", has aprobado con un promedio de: " + prmedio)
            } else {
                alert("Lo siento " + nombre + ", has reprobado con un promedio de: " + prmedio)
            }

            continuePrompt = prompt("¿Desea calcular otro promedio? (si/no)").toLowerCase();
            while (continuePrompt === "si") {
                nombre= prompt("Ingrese su nombre: ")
                calif1 = parseFloat(prompt("Ingrese la primera calificación: "))
                calif2 = parseFloat(prompt("Ingrese la segunda calificación: "))
                calif3 = parseFloat(prompt("Ingrese la tercera calificación: "))

                prmedio= (calif1 + calif2 + calif3) / 3
                alert("Hola " + nombre + ", tu promedio es: " + prmedio)

                if (prmedio >= 6) {
                    alert("Felicidades " + nombre + ", has aprobado con un promedio de: " + prmedio)
                } else {
                    alert("Lo siento " + nombre + ", has reprobado con un promedio de: " + prmedio)
                }

                continuePrompt = prompt("¿Desea calcular otro promedio? (si/no)").toLowerCase();
            }