//---------------- VERİ TİPLERİ ----------------------------
/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol 
8. Object 

 !let sonuc = String(true);
 !console.log(typeof sonuc);
 !console.log(sonuc);

*/

//----------------- STRİNG VERİ TİPİ ----------------------
/*
? Metin veya karakter dizilerini temsil eder. Tek tırnak (' ') veya çift tırnak (" ") içinde tanımlanabilir.

! let metin1 = 'Merhaba, dünya!';
! let metin2 = "Bu bir örnek metindir.";

*/

//----------------- NUMBER VERİ TİPİ -----------------------
/*

? Tam sayılar (integer) veya  noktalı sayılar (float) olarak temsil edilir.

! let sayi1 = 42;
! let sayi2 = 3.14;


*/

//----------------- BİGİNT VERİ TİPİ -----------------------
/*
? Çok büyük tam sayıları temsil etmek için kullanılır. Bir sayıya "n" veya "N" eklemek suretiyle tanımlanır.
! const buyukSayi = 1234567890123456789012345678901234567890n;
*/

//----------------- BOOLEAN VERİ TİPİ ----------------------
/*
? Sadece iki değere sahiptir: true (doğru) veya false (yanlış).
! let dogruMu = true;
! let yanlisMi = false;

*/

//----------------- UNDIFİNED VERİ TİPİ --------------------
/*
? Değer atanmamış veya tanımlanmamış bir değişkeni temsil eder.
! let degisken;
! console.log(degisken); // undefined
*/

//----------------- NULL VERİ TİPİ -------------------------
/*
? Değerin bilinmediğini veya mevcut olmadığını belirtir.
! let degisken = null;
*/

//----------------- SYMBOL VERİ TİPİ -----------------------
/*
? Benzersiz ve değiştirilemez değerler oluşturmak için kullanılır. 
! const sembol = Symbol('Benzersiz sembol');
*/

//----------------- OBJECT VERİ TİPİ -----------------------
/* 
?Birden fazla değeri ve özelliği içeren bir veri türüdür
!let personel = {
ad: 'Ahmet',
soyad: 'Yılmaz',
yas: 30};

*/


//----------------- FUNCTİON VERİ TÜRÜ DEĞİL  -----------------------

/*
? bir görevi yerine getiren ve tekrar tekrar kullanılabilen bir kod bloğudur.

! FONKSİYON SÖZDİZİMİ
?function fonksiyonAdi(parametre1, parametre2, ...) {
   Fonksiyonun içinde yapılacak işlemler
   
?return sonuc; // İsteğe bağlı olarak bir değer döndürebilir }

! ÖRNEK 1  Toplama Fonksiyonu:

function toplama(a, b) {
  return a + b;
}

const sonuc = toplama(5, 3); // sonuc 8 olacaktır.
console.log(sonuc);

! ÖRNEK 2 Merhaba Mesajı Veren Fonksiyon:

function selamVer(isim) {
  console.log(`Merhaba, ${isim}!`);
}

selamVer('Ahmet'); // "Merhaba, Ahmet!" çıktısını üretir.

! ÖRNEK 3 Fonksiyon İçinde Şart İfadesi:

function kontrolEt(yas) {
  if (yas >= 18) {
    console.log('Oy kullanabilirsiniz.');
  } else {
    console.log('Oy kullanamazsınız.');
  }
}

let yas = prompt('yaşınız:');
let b = parseInt(yas);

kontrolEt(b);

kontrolEt(20); // "Oy kullanabilirsiniz." çıktısını üretir.
kontrolEt(15); // "Oy kullanamazsınız." çıktısını üretir.

!ÖRNEK 4 Dizi Elemanlarını Toplayan Fonksiyon:

function diziElemanlariniTopla(dizi) {
  let toplam = 0;
  for (let i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
  }
  return toplam;
}

const sayilar = [1, 2, 3, 4, 5];
const sonuc = diziElemanlariniTopla(sayilar); // sonuc 15 olacaktır.
console.log(sonuc);

*/