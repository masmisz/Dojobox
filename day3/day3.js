//Function
function jumlah2kubus(a,b){
    function volumeKubus(s){
     v = s * s * s;
    return v;
    }
    var ka = volumeKubus(a);
    var kb = volumeKubus(b);
    var total = ka + kb;
    
    return total;
}


alert(jumlah2kubus(8,4));