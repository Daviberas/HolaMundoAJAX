document.getElementById("btnPedirServidor").addEventListener("click", llamada);
document.getElementById("btnPedirSelectServidor").addEventListener("click", llamada2);
document.getElementById("btnPedirXMLServidor").addEventListener("click", llamada3);

function llamada()
{
    //1. Instanciar objeto XMLHttpRequest
    var xml = new XMLHttpRequest();

    //2. Definir método open
    xml.open("GET", "../Server/HolaMundo.html");

    //3. Definir cabeceras
        //En ese caso nada

    //4. Definir qué hacer cuando va cambiando el estado
    xml.onreadystatechange = function ()
    {
        if (xml.readyState < 4)
        {
            document.getElementById("txtContenedor").innerHTML = "Cargando...";
        }
        else
            if (xml.readyState == 4 && xml.status == 200)
            {
                //6.Tratamiento de los datos recibidos del servidor
                document.getElementById("txtContenedor").innerHTML = xml.responseText;
            }
    }
    
    //5. Enviar la solicitud, send tiene parámetros opcionales
    xml.send();
}

function llamada2() {
    //1. Instanciar objeto XMLHttpRequest
    var xml = new XMLHttpRequest();

    //2. Definir método open
    xml.open("GET", "../Server/SelectServidor.html");

    //3. Definir cabeceras
    //En ese caso nada

    //4. Definir qué hacer cuando va cambiando el estado
    xml.onreadystatechange = function () {
        if (xml.readyState < 4)
        {
            document.getElementById("txtContenedor").innerHTML = "Cargando...";
        }
        else
            if (xml.readyState == 4 && xml.status == 200) {
                //6.Tratamiento de los datos recibidos del servidor
                document.getElementById("txtContenedor").innerHTML = xml.responseText;
            }
    }

    //5. Enviar la solicitud, send tiene parámetros opcionales
    xml.send();
}

function llamada3() {
    //1. Instanciar objeto XMLHttpRequest
    var xml = new XMLHttpRequest();

    //2. Definir método open
    xml.open("GET", "../Server/personas.xml");

    //3. Definir cabeceras
    //En ese caso nada

    //4. Definir qué hacer cuando va cambiando el estado
    xml.onreadystatechange = function ()
    {
        if (xml.readyState < 4) {
            document.getElementById("txtContenedor").innerHTML = "Cargando...";
        }
        else
            if (xml.readyState == 4 && xml.status == 200) {
                //6.Tratamiento de los datos recibidos del servidor

                //Si SOLO queremos ver todo el texto que contiene el XML
                //document.getElementById("txtContenedor").innerHTML = xml.responseText;

                //Si queremos tratar la respuesta
                var respXML = xml.responseXML;
                escribirPersonas(respXML);
            }
    }

    //5. Enviar la solicitud, send tiene parámetros opcionales
    xml.send();
}

function escribirPersonas(respXML)
{
    var table = document.createElement("TABLE");
    table.setAttribute("border", "1");
    table.setAttribute("cellspacing", "0");
    var array = respXML.getElementsByTagName("persona");

    for( i = 0; i<array.length; i++)
    {
        var fila = document.createElement("TR");
        var columna1 = document.createElement("TD");
        var nombre = document.createTextNode(array[i].getElementsByTagName("nombre")[0].textContent);
        columna1.appendChild(nombre);
        fila.appendChild(columna1);
        var columna2 = document.createElement("TD");
        var apellidos = document.createTextNode(array[i].getElementsByTagName("apellidos")[0].textContent);
        columna2.appendChild(apellidos);
        fila.appendChild(columna2);
        table.appendChild(fila);
    }
    document.getElementById("txtContenedor").innerHTML = "";

    document.getElementById("txtContenedor").appendChild(table);
}