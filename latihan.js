/ latihan prompt
alert('selamat datang di website saya');
var nama = prompt ('masukan nama anda');


// latihan confirm if
var tes = confirm('apakah nama anda sudah betul?');
alert(tes +nama);
   

if ( tes === true) {
    alert('anda menyetujui!')
}
    else{
    alert('anda membatalkan!')
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
