/ latihan prompt
alert('selamat datang di website saya');
var nama = prompt ('masukan nama anda');


// latihan confirm if
var tes = confirm('apakah nama anda sudah betul?');
alert(tes +nama);
   

if ( tes === true) {
    alert('nama menyetujui!')
}
    else{
    alert('nama membatalkan!')

}

// latihan confirm while
alert('selamat datang');
var lagi = true;

while ( lagi === true){
    var nama = prompt ('masukan nama:');
    alert('halo ' +nama);

    lagi = confirm('coba lagi?');
}

alert('terimakasih..');

//menentukan angka ganjil
var angka = prompt('Masukkan angka : ');
if(angka % 2 == 0) {
	alert(angka + ' adalah bilangan GENAP');
} 
else if(angka % 2 == 1) {
	alert(angka + ' adalah bilangan GANJIL');
} 
else {
	alert( 'yang anda masukkan bukan angka!' );
}

//latihan while
var ulang = true;
while (ulang) {
   console.log('hello word');
   ulang = confirm('lagi');
}

