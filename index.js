/*Saludo

Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y 
luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".*/

let nombre = prompt("Decime tu nombre")

let apellido = prompt("Decime tu apellido")

let nombreCompleto = nombre + " " + apellido

let saludo = "Hola, " + nombreCompleto + " Bienvenide a Ada"


alert(saludo)