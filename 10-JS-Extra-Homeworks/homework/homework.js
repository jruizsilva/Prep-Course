// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let result = [];
  for (let key in objeto) {
    result.push([key, objeto[key]]);
  }
  return result;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  return result;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let upperCase = "";
  let lowerCase = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      upperCase += s.charAt(i);
    } else {
      lowerCase += s.charAt(i);
    }
  }
  return upperCase + lowerCase;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  str = str.trim();
  let result = "";
  let word = "";
  let array = [];
  let arrayInvertido = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      array.push(word);
      word = "";
      continue;
    }
    if (i === str.length - 1) {
      word += str.charAt(i);
      array.push(word);
      word = "";
      break;
    }
    word += str.charAt(i);
  }
  array.forEach(function (word) {
    let wordInvertida = "";
    for (let i = word.length - 1; i >= 0; i--) {
      wordInvertida += word.charAt(i);
    }
    arrayInvertido.push(wordInvertida);
  });
  arrayInvertido.forEach(function (word, index) {
    if (index !== arrayInvertido.length - 1) {
      result += word + " ";
    } else {
      result += word;
    }
  });
  return result;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const str = numero.toString();
  let strInvertido = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertido += str.charAt(i);
  }
  if (str === strInvertido) return "Es capicua";
  return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let result = "";
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena.charAt(i) === "a" ||
      cadena.charAt(i) === "b" ||
      cadena.charAt(i) === "c"
    ) {
      continue;
    }
    result += cadena.charAt(i);
  }
  return result.trim();
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const curr = arr[i];
      const iterator = arr[j];
      if (iterator.length < curr.length) {
        arr[j] = curr;
        arr[i] = iterator;
      }
    }
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const result = [];

  arreglo1.forEach(function (num1) {
    arreglo2.forEach(function (num2) {
      if (num1 === num2) {
        result.push(num1);
      }
    });
  });
  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
