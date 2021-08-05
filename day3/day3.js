//Function
var inputSisiA = parseInt(prompt('Masukkan sisi kubus A ', '0-10'));
var inputSisiB = parseInt(prompt('Masukkan sisi kubus B ', '0-10'));
var volumeKubusA = hitungKubusA(inputSisiA);
var volumeKubusB = hitungKubusA(inputSisiB);
var jumlahKubus = penjumlahanKubus(volumeKubusA, volumeKubusB)
document.write('Sisi kubus A = '+inputSisiA+'<br>')
document.write('Sisi kubus B = '+inputSisiB+'<br>')
document.write('Volume kubus A = '+volumeKubusA+'<br>')
document.write('Volume kubus B = '+volumeKubusB+'<br>')
document.write('Jumlah kedua volume kubus = '+jumlahKubus+'<br>')

function hitungKubusA(sisiA){
    var jumlah =1;
    for (let index = 0; index < 3; index++) {
        jumlah *= sisiA;
    }
    return jumlah;
}

function hitungKubusB(sisiB){
    var jumlah = 1;
    var count = 0;
    while (count<3) {
        jumlah *= sisiB;
        count++;
    }
    return jumlah;
}

function penjumlahanKubus(volumeA, volumeB){
    var jumlah = 0;
    jumlah = volumeA+volumeB;
    return jumlah;
}