var salario = 600

if (salario <= 600000)
{
    console.log("Tarjeta Clasic")
}
else if (salario > 600000 && salario <= 900000)
{
    console.log("Tarjeta Gold")
}
else if (salario > 900000 && salario <= 1400000)
{
    console.log("Tarjeta Platinum")
}
else if (salario > 1400000 && salario <= 2000000)
{
    console.log("Tarjeta Black")
}
else if (salario > 2000000)
{
    console.log("Tarjeta Emerald")
}