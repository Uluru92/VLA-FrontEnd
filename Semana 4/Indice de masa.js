var peso = 63
var altura = 1.71
IMC = peso / (altura*altura)

if (IMC < 18.5)

{
    console.log("Esta bajo de peso ")
}
else if (IMC >= 18.5 && IMC <= 24.9)
{
    console.log("Esta normal de peso ")
}
else if (IMC > 24.9 && IMC <= 29.9)
{
    console.log("Esta con sobrepeso")
}
else if (IMC > 29.9)
{
    console.log("Esta con sobrepeso")
}