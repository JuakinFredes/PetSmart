document.body.onload = divs;

function divs() {
    //si es en celular
    if(/Android|iPhone/i.test(navigator.userAgent)){
        //crea un div
        const newDiv = document.createElement("div");
        //crea elementos para el div
        const link = document.createElement("a")
        const newContent = document.createTextNode("Descargar");
        const button = document.createElement("button")
        //le da direccion/link/Imagen a un elemento
        link.href = "https://drive.google.com/uc?export=download&id=1VtjknfDLDGj_B_KteTwKCcRIBeCTH8-5"
        //agregar los elementos al div creado
        button.appendChild(newContent)
        link.appendChild(button)
        newDiv.appendChild(link);
        //busca el elemento en el html para darle lo creado en el codigo
        const descarga = document.getElementById("div_Target");
        descarga.appendChild(newDiv)
    //si es pc
    }else{
        //crea un div
        const newDiv = document.createElement("div");
        //crea elementos para el div
        const img = document.createElement("img");
        //le da direccion/link/Imagen a un elemento
        img.src = 'img/qr.png'
        //agregar los elementos al div creado
        newDiv.appendChild(img);
        //busca el elemento en el html para darle lo creado en el codigo
        const descarga = document.getElementById("div_Target");
        descarga.appendChild(newDiv)
    }
}