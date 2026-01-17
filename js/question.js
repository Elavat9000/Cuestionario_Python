class Question {
    constructor(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(answer){
        return answer === this.correctAnswer;
    }
}
let questions = [
    // ===== Programación General (5) =====
    new Question("¿Qué es un programa en informática?", {
        a: "Un calendario de actividades",
        b: "Un dispositivo físico de la computadora",
        c: "Un conjunto de datos sin orden",
        d: "Una secuencia de instrucciones para realizar una tarea"
    }, "d"),

    new Question("¿Qué es un algoritmo?", {
        a: "Un lenguaje de programación",
        b: "Un conjunto de pasos para resolver un problema",
        c: "Un tipo de software",
        d: "Un error del sistema"
    }, "b"),

    new Question("¿Qué es una variable en programación?", {
        a: "Un valor que no puede cambiar",
        b: "Un espacio para almacenar información",
        c: "Un tipo de función",
        d: "Un archivo del sistema"
    }, "b"),

    new Question("¿Para qué sirve una estructura condicional?", {
        a: "Para repetir instrucciones",
        b: "Para almacenar datos",
        c: "Para tomar decisiones en el programa",
        d: "Para ejecutar siempre el mismo código"
    }, "c"),

    new Question("¿Qué es la Programación Orientada a Objetos?", {
        a: "Un tipo de hardware",
        b: "Un paradigma basado en clases y objetos",
        c: "Un lenguaje exclusivo de Python",
        d: "Una base de datos"
    }, "b"),

    // ===== Python Básico (5) =====
    new Question("¿Qué es Python?", {
        a: "Un sistema operativo",
        b: "Un lenguaje de programación interpretado",
        c: "Un compilador",
        d: "Un editor de texto"
    }, "b"),

    new Question("¿Cómo se define una función en Python?", {
        a: "function nombre()",
        b: "def nombre():",
        c: "func nombre()",
        d: "define nombre()"
    }, "b"),

    new Question("¿Qué es una lista en Python?", {
        a: "Una variable que solo guarda números",
        b: "Una colección ordenada y mutable",
        c: "Un tipo de función",
        d: "Un archivo externo"
    }, "b"),

    new Question("¿Qué estructura se usa en Python para guardar datos en formato clave-valor?", {
        a: "Lista",
        b: "Tupla",
        c: "Diccionario",
        d: "Cadena"
    }, "c"),

    new Question("¿Para qué se utiliza el archivo JSON en programación?", {
        a: "Para diseñar interfaces gráficas",
        b: "Para intercambiar y almacenar datos",
        c: "Para ejecutar programas",
        d: "Para compilar código"
    }, "b"),

    // ===== Programación General =====
    new Question("¿Qué ocurre cuando un programa tiene un error durante su ejecución?", {
        a: "El programa se compila nuevamente",
        b: "Se produce una excepción o error en tiempo de ejecución",
        c: "El error se corrige automáticamente",
        d: "El sistema operativo ignora el error"
    }, "b"),

    new Question("¿Qué es la depuración (debugging)?", {
        a: "Escribir documentación",
        b: "Optimizar el código para que sea más rápido",
        c: "Buscar y corregir errores en el código",
        d: "Convertir código a otro lenguaje"
    }, "c"),

    new Question("¿Qué es una función recursiva?", {
        a: "Una función que nunca termina",
        b: "Una función que se ejecuta una sola vez",
        c: "Una función que se llama a sí misma",
        d: "Una función que solo usa ciclos"
    }, "c"),

    new Question("¿Cuál es la principal ventaja de usar funciones?", {
        a: "Hacen el programa más lento",
        b: "Permiten reutilizar y organizar el código",
        c: "Evitan el uso de variables",
        d: "Eliminan la necesidad de pruebas"
    }, "b"),

    new Question("¿Qué es una clase abstracta (concepto general)?", {
        a: "Una clase que no puede tener métodos",
        b: "Una clase que sirve como base para otras clases",
        c: "Una clase que no usa objetos",
        d: "Una clase que solo existe en Python"
    }, "b"),

    // ===== Python =====
    new Question("¿Qué hace la palabra clave 'return' en una función?", {
        a: "Imprime un valor en pantalla",
        b: "Detiene la ejecución del programa",
        c: "Devuelve un valor y finaliza la función",
        d: "Repite la función"
    }, "c"),

    new Question("¿Cuál es la diferencia principal entre una lista y una tupla?", {
        a: "No hay diferencia",
        b: "La tupla es mutable y la lista no",
        c: "La lista es mutable y la tupla es inmutable",
        d: "La tupla solo guarda números"
    }, "c"),

    new Question("¿Qué hace la palabra clave 'import' en Python?", {
        a: "Ejecuta un archivo automáticamente",
        b: "Copia el código dentro del programa",
        c: "Permite usar módulos y librerías",
        d: "Declara variables globales"
    }, "c"),

    new Question("¿Para qué se usa el bloque try / except?", {
        a: "Para crear funciones",
        b: "Para repetir código",
        c: "Para manejar errores y excepciones",
        d: "Para importar módulos"
    }, "c"),

    new Question("¿Qué tipo de error ocurre cuando el programa se ejecuta pero falla por datos incorrectos?", {
        a: "Error de sintaxis",
        b: "Error lógico",
        c: "Error de compilación",
        d: "Error del sistema operativo"
    }, "b")
];
