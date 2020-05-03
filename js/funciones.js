function validar()      // METODO QUE VALIDA QUE TODOS LOS CAMPOS EN CONTACATAR NO ESTEN VACIOS --> 100%
{
    var nombre= document.getElementById("txtNombre").value;   
    var mail= document.getElementById("txtMail").value;
    var mensaje= document.getElementById("txtMsj").value;      
      
    if(nombre=="" || mail=="" || mensaje=="")
    {
        alert("Debes completar todos los campos.")
    }
    else
    {
        alert("Gracias por creer que funcionaría, pero NO! I´m sorry my little friend")
    }
}