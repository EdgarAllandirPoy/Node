let estado = function (a){

    if (a =="sp" || a =="rj"){
        return "Permissão Liberada"
    } else{
        return "Permissão Negada"
    }
}

module.exports = estado