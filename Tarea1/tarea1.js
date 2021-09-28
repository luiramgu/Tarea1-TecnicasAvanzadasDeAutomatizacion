function analizar (palabra){
    var aux = convierteArray(palabra);
    var cont=1;
    var letra = palabra[0];
    var resultado= new Array();
    if (palabra.length==1){
        resultado.push ([letra,cont]);
    } else{
        while (aux.length>0){
            aux.shift();
            if (aux[0]===letra){
                cont++;
                aux.shift;
               
            }else{
                
                resultado.push([letra,cont]);
                cont=1;
                letra=aux[0];
                aux.shift;
            }
        }
    }    
    
    document.getElementById('resultadotxt').innerHTML = txtToString(resultado) ;
}


function txtToString (array){
    var aux;
    
    for (let i=0;i<array.length;i++){
        if (array[i]){
            aux = aux + "{ " + array[i] + " }";
        }
    }
    aux =  aux.replace ('undefined','');
    return aux;
}

function convierteArray (palabra){
    var arreglo = new Array(palabra.length);
    for(let i=0;i<palabra.length;i++){
        arreglo.push= (palabra[i]);
    }
    return arreglo;
}


function aplanar(parametros){
    var arreglo = parametros.split (',');
    for (let i=0;i<arreglo.length;i++){
        arreglo[i]=arreglo[i].replace ('[','');
        arreglo[i]=arreglo[i].replace (']','');
    }
    
    document.getElementById('lblaplanar').innerHTML = txtToString(arreglo) ;

}

function formarmeta (lista,meta){
    var min = lista.toLowerCase();
    var arreglo = min.split(',');
    min=meta.toLowerCase();
    var palabrasencontradas = new Array();   
    for(let i=0;i<arreglo.length;i++){
        if(min.includes (arreglo[i])){
            palabrasencontradas.push(arreglo[i],i);
        }
    }
    if (palabrasencontradas.length<2 | meta=="" | lista==""){
        document.getElementById('lblpalabracompuesta').innerHTML ="Nulo" ;
    } else{
        var aux = palabrasencontradas[0];
        var aux2 = palabrasencontradas[2];
        var formar = aux+aux2;

        if (min==formar){
            document.getElementById('lblpalabracompuesta').innerHTML ="[ "+ palabrasencontradas[0]
            +","+palabrasencontradas[2]+" ]" +" ["+ palabrasencontradas[1]+","+palabrasencontradas[3]+" ]";
            
        } else{
            document.getElementById('lblpalabracompuesta').innerHTML ="[ "+ palabrasencontradas[2]
            +","+palabrasencontradas[0]+" ]" +" ["+ palabrasencontradas[3]+","+palabrasencontradas[1]+" ]";
           
        }
    }
}

function elevar (numero){
    var aux = "";
    for(let i=0;i<numero.length;i++){
        
        aux = aux + Math.pow(numero[i],2);
    }
    document.getElementById('lblResultado').innerHTML = aux ;
}

elevar()
aplanar ();
analizar();
formarmeta();