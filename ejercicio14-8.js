//
//
//
//
//
//

console.log(document.body);

let dato = document.getElementsByTagName("li")

console.log(dato)

let infoCompleta = document.querySelectorAll("li")
console.log (infoCompleta)

for (let i = 0; i < infoCompleta.length; i++) {
    console.log(infoCompleta[i])

}

$(document).ready(function () {
    $("#comprar").click(function (e) { 
        e.preventDefault();
        $.get("comprar.txt",function(data,textStatus,jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
}); 

$(document).ready(function () {
    $("#cancelar").click(function (e) { 
        e.preventDefault();
        $.get("cancelar.txt",function(data,textStatus,jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
}); 