const palabra = "arenera"

for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
    if (palabra[i] == palabra[palabra.length - 1 - i])
        console.log("La palabra es palindrome")
    else
        console.log("La palabra no es palindrome")    
}

