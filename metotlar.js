// METOTLAR
/*

? 1. PARAMETRESİZ METOT
JavaScript'te parametresiz bir metot (fonksiyon) tanımlamak oldukça basittir. Parametresiz bir metot, herhangi bir girdi almadan belirli bir işlemi gerçekleştirir.


! Parametresiz metot tanımı
function selamla(PARAMETRE) {
  console.log("Merhaba, Dünya!");
}
! Parametresiz metodu çağırma
selamla(); // "Merhaba, Dünya!" çıktısını verir

*Yukarıdaki örnekte `selamla` adında bir parametresiz metot tanımlandı. Bu metot, herhangi bir parametre almadan sadece `"Merhaba, Dünya!"` metnini konsola yazdırır. 
*Daha sonra metot, `selamla()` çağrısı ile çağrılır ve "Merhaba, Dünya!" yazısı konsola yazdırılır.
*Parametresiz metotlar, belirli bir işlemi gerçekleştirmek veya belirli bir davranışı uygulamak için kullanışlıdır.
*Özellikle genel bir işlemi birden çok kez yapmanız gerektiğinde veya belirli bir yerde kodunuzu düzenlemek veya genişletmek istediğinizde kullanabilirsiniz.

? 2. PARAMETRELİ METOT
belirli girdileri kabul eden ve bu girdilere dayalı olarak işlem yapan bir fonksiyon oluşturmak anlamına gelir. 

!Parametreli metot tanımı
function toplama(a, b) {
  const sonuc = a + b;
  console.log("Toplam:", sonuc);
}

!Parametreli metodu çağırma
toplama(5, 3); // "Toplam: 8" çıktısını verir

*Yukarıdaki örnekte, `toplama` adında bir parametreli metot tanımlandı. Bu metot, `a` ve `b` adında iki parametre alır ve bu parametreleri toplar. 
*Daha sonra, `toplama(5, 3)` çağrısı ile metot çağrılır ve `a` için 5, `b` için 3 argümanları ile çağrılır. Sonuç olarak "Toplam: 8" çıktısı konsola yazdırılır.
*Parametreli metotlar, işlevselliği daha geniş ve esnek hale getirmenizi sağlar, çünkü farklı değerleri işlemek için aynı metodu tekrar tekrar kullanabilirsiniz. 

*/

//?---------RETURN---------------

/*
bir fonksiyonun çalıştırıldığı yere değer döndürmek için kullanılır ve bu değeri başka bir değişkende saklamak veya işlem yapmak için kullanabilirsiniz.

Bir fonksiyon, `return` ifadesini kullanarak bir değer döndürebilir.

!ÖRNEK
function toplama(a, b) {
  const sonuc = a + b;
  return sonuc;
}
const toplam = toplama(5, 3);
console.log("Toplam:", toplam); // "Toplam: 8" çıktısını verir

? Yukarıdaki örnekte, `toplama` adında bir fonksiyon tanımlandı ve bu fonksiyon, `a` ve `b` adında iki parametre alarak bu parametreleri topladı. 
? Daha sonra `return` ifadesi kullanılarak bu toplam sonucu döndürüldü. Çağrıldığı yerde bu sonuç, `toplama(5, 3)` çağrısı ile elde edildi ve `toplam` değişkenine atanarak saklandı. 
? Son olarak, `toplam` değişkeni `console.log` ile konsola yazdırıldı.

Fonksiyonun içinde bulunan `return` ifadesi çalıştığında, fonksiyonun işlemi sonlandırılır ve değer geri döndürülür.
TODO Not: Bir fonksiyon, birden çok `return` ifadesi içerebilir, ancak bir `return` ifadesi çalıştığında fonksiyon sonlanır ve geriye bir değer döner.

! VOİD GERİYE DEĞER DÖNDÜRMEYEN

*/

//?---------ARRAY---------------

/*

? JavaScript'te bir dizi (array), tek bir değişken adı altında birden çok değeri saklamak için kullanılan bir veri yapısıdır. 
Diziler, sıralı bir liste olarak değerleri depolar ve her bir değer, bir dizi içinde bir indeks numarasıyla erişilebilir. 


? 1. Dizi Tanımlama:
   JavaScript'te bir dizi tanımlamak için köşeli parantezleri `[]` kullanabilirsiniz. Dizi içine eklemek istediğiniz değerleri virgülle ayırarak eklersiniz.

  ! Örnek: 
   const sayilar = [1, 2, 3, 4, 5];
   const meyveler = ["elma", "armut", "çilek"];
 

? 2. Dizi Elemanlarına Erişme:
   Dizi elemanlarına erişmek için dizinin adını ve indeks numarasını kullanırsınız. İndeks numarası 0'dan başlar.

   ! Örnek:
   console.log(sayilar[0]); // 1
   console.log(meyveler[1]); // "armut"
 

? 3. Dizi Uzunluğu:
   Dizi uzunluğunu almak için `length` özelliğini kullanabilirsiniz.

   ! Örnek:
   console.log(sayilar.length); // 5
   console.log(meyveler.length); // 3


? 4. Diziye Değer Ekleme ve Çıkarma:
   Bir diziye yeni değerler eklemek veya mevcut değerleri çıkarmak için çeşitli dizi yöntemlerini kullanabilirsiniz.
   Örneğin, `push()`, `pop()`,  gibi yöntemlerle diziye eleman ekleyebilir veya çıkarabilirsiniz.

   ! Örnek:
   sayilar.push(6); // Dizi sonuna 6 ekler
   meyveler.pop(); // Dizi sonundaki elemanı çıkarır
   

? 5. Dizi Döngüleri:
   Dizilerle çalışırken genellikle döngüler kullanılır. `for` döngüsü, `forEach()`  gibi döngülerle dizinin her elemanını işleyebilirsiniz.

   ! Örnek:
   for (let i = 0; i < sayilar.length; i++) {
     console.log(sayilar[i]);
   }

   meyveler.forEach(function(meyve) {
     console.log(meyve);
   });

   for (let meyve of meyveler) {
     console.log(meyve);
   }
   

? 6. Dizi İşlemleri:
   Dizilerde sıralama, filtreleme, dizi elemanlarını değiştirme gibi çeşitli işlemler yapabilirsiniz. Bu işlemler için dizi yöntemlerini veya dizi işleme fonksiyonlarını kullanabilirsiniz.

   ! Örnek:
   const siraliSayilar = sayilar.sort(); // Diziyi sıralar
   const tekSayilar = sayilar.filter(sayi => sayi % 2 === 1); // Tek sayıları filtreler
   sayilar.splice(1, 2, 7, 8); // İndeks 1'den itibaren 2 elemanı çıkarır ve yerine 7 ve 8 ekler
  
*/

//! Dizinin Metotlarından bazıları EZBERLEME 

/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

/***************************************************************
 
let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
let arabalar2 = ["hundai","tofaş"];

PUSH METOT

console.log(arabalar.length);
arabalar.push("opel");
console.log(arabalar);

UNSHIFT METOT
arabalar.unshift("hundai");
console.log(arabalar);

POP METOT
let silinenEleman = arabalar.pop();
console.log(arabalar);
console.log(silinenEleman);

SHIFT METOT
let silinenEleman =arabalar.shift();
console.log(arabalar);
console.log(silinenEleman);

SPLİCE METOT
console.log(arabalar);
arabalar.splice(3,0,"hundai");
console.log(arabalar);

arabalar.splice(1,2);
console.log(arabalar);

arabalar.splice(2,2,"hundai");
console.log(arabalar);

TOSTRİNG METOT
console.log(typeof arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(stringArabalar);


JOIN METOT
let stringArabalar = arabalar.join("?");
console.log(stringArabalar);


CONCAT METOT 
let birlesmisDizi =  arabalar1.concat(arabalar2);
console.log(birlesmisDizi);

SLİCE METOT
console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi);


LENGTH ÖZELLİK
console.log(arabalar.length);

REVERSE METOT
console.log(arabalar);
arabalar.reverse();
console.log(arabalar);


SPLİT METOT
let isimler = "Enes,Ali,Veli";

let isimlerDizi = isimler.split(",");
console.log(typeof isimlerDizi);


INDEXOF METOT
let index = arabalar.indexOf("bmw");
if(index==0){
  console.log("belirtilen eleman vardır");
}else{
    console.log("elaman yoktur");
}


INCLUDES METOT

let sonuc = arabalar.includes("renault232");
if(sonuc){
      console.log("eleman vardır");
 }else{
    console.log("eleman yoktur");
 }

 */

 