//?--------------------ARİTMETİK OPERATÖRLER--------------
/*
? Toplama (+):
İki veya daha fazla sayıyı toplamak için kullanılır.
!Örnek:
TODO let toplam = 5 + 3; // toplam 8 olacaktır.

? Çıkarma (-):
İki sayı arasındaki farkı bulmak için kullanılır.
!Örnek:
TODO let fark = 10 - 4; // fark 6 olacaktır.

? Çarpma (*):
İki veya daha fazla sayıyı çarpmak için kullanılır.
!Örnek:
TODO let carpim = 6 * 7; // carpim 42 olacaktır.

? Bölme (/):
Bir sayıyı başka bir sayıya bölmek için kullanılır.
!Örnek:
TODO let bolum = 10 / 2; // bolum 5 olacaktır.

? Modülüs (%):
Bir sayının diğer sayıya bölümünden kalanı bulmak için kullanılır.
!Örnek:
TODO let kalan = 10 % 3; // kalan 1 olacaktır (10 / 3 = 3 kalan 1).

? Üs Alma ( veya Math.pow()):
Bir sayının üssünü almak için kullanılır. İlk sayı tabanı, ikinci sayı üssü temsil eder.
!Örnek:
TODO let usSonucu = 2**3; // usSonucu 8 olacaktır (2^3 = 8).

? Artırma (++) ve Azaltma (--) Operatörleri:
Değişkenin değerini 1 artırmak veya azaltmak için kullanılır.

!Örnekler:
TODO let sayi = 5;
sayi++; // sayi şimdi 6 olacaktır.
sayi--; // sayi tekrar 5 olacaktır
*/

//?--------------------ATAMA OPERATÖRLER------------------
/*
Bir değişkene değer atamak veya mevcut değeri değiştirmek için kullanılan operatörlerdir. 

1. Atama Operatörü (=):
   ?- Bir değişkene belirli bir değer atamak için kullanılır.
   
   !ÖRNEK
   let sayi = 42;  "sayi" adlı değişkene 42 değeri atanmıştır.
 

2. Toplama Atama Operatörü (+=):
   ?- Bir değişkenin mevcut değerine belirli bir değeri eklemek için kullanılır.
   
   !ÖRNEK
   let sayi = 5;
   sayi += 3;  "sayi" şimdi 8 olacaktır (5 + 3).
 

3. Çıkarma Atama Operatörü (-=):
   ?- Bir değişkenin mevcut değerinden belirli bir değeri çıkarmak için kullanılır.
   
   !ÖRNEK
   let sayi = 10;
   sayi -= 4;  "sayi" şimdi 6 olacaktır (10 - 4).

4. Çarpma Atama Operatörü (*=):
   ?- Bir değişkenin mevcut değerini belirli bir değerle çarpmak için kullanılır.
   
   !ÖRNEK
   let sayi = 7;
   sayi *= 2;  "sayi" şimdi 14 olacaktır (7 * 2).

5. Bölme Atama Operatörü (/=):
   ?- Bir değişkenin mevcut değerini belirli bir değere bölmek için kullanılır.
   
   !ÖRNEK
   let sayi = 20;
   sayi /= 4;  "sayi" şimdi 5 olacaktır (20 / 4).
 
6. Modülüs Atama Operatörü (%=):
   ?- Bir değişkenin mevcut değerini belirli bir değere böldüğünde kalanı atamak için kullanılır.
   
   !ÖRNEK
   let sayi = 15;
   sayi %= 4; "sayi" şimdi 3 olacaktır (15 % 4 = 3).
 
Bu atama operatörleri, değişkenlerin değerlerini güncellemek ve matematiksel işlemleri aynı satırda yapmak için kullanılır. Bu, kodunuzun daha kısa ve okunabilir olmasına yardımcı olabilir.
*/


//?--------------------MANTIKSAL  OPERATÖRLER-------------

/*
 ? Mantıksal ifadeleri değerlendirmek, karşılaştırmalar yapmak ve koşulları kontrol etmek için kullanılan operatörlerdir. 

?1. VE Operatörü (&&):
   - İki koşulu kontrol etmek ve her iki koşul da doğruysa sonucun doğru olduğunu belirlemek için kullanılır.
    
   !ÖRNEK
   if (sayi > 0 && sayi < 10) {
     ? sayi, 0'dan büyük ve 10'dan küçükse bu blok çalışır.
   }
   

?2.  VEYA Operatörü (||):
   - İki koşulu kontrol etmek ve en az bir koşul doğruysa sonucun doğru olduğunu belirlemek için kullanılır.
  
   !ÖRNEK
   if (renk === 'Kırmızı' || renk === 'Mavi') {
     ? renk ya "Kırmızı" ya da "Mavi" ise bu blok çalışır.
   }
   

?3. DEĞİL Operatörü (!):
   - Bir koşulu tersine çevirmek için kullanılır. Yani doğru koşulu yanlışa ve yanlışı doğruya çevirir.
   
   !ÖRNEK
   if (!hataVar) {
     ? hataVar yanlışsa bu blok çalışır.
   }
   

    Mantıksal operatörler, koşulları kontrol etmek ve karşılaştırmalar yapmak için çok önemlidir. 
    Genellikle `if` ifadeleri, döngüler ve karar yapıları gibi kontrol yapılarında kullanılırlar. 
    Bu operatörler sayesinde kodunuzun karmaşıklığını azaltabilir ve programınızın doğru çalışmasını sağlayabilirsiniz.

*/


//?--------------------KARŞILAŞMA OPERATÖRLER-------------

/*
Farklı değerleri karşılaştırmak ve karşılaştırma sonuçlarına göre işlem yapmak için kullanılır. 


1.Eşitlik Karşılaştırması (==):
   ? İki değeri karşılaştırmak için kullanılır ve değerler eşitse `true` (doğru) sonucunu verir. Tipler farklı olsa bile değerler eşitse `true` dönebilir.
    
   !ÖRNEK 
   let x = 5;
   let y = '5';
   TODO console.log(x == y); /true (değerler eşit, tip farklı)


2.Kesin Eşitlik Karşılaştırması (===):
   ? İki değeri karşılaştırmak için kullanılır ve hem değerler hem de tipler eşitse `true` (doğru) sonucunu verir.
    
   !ÖRNEK 
   let x = 5;
   let y = '5';
   TODO console.log(x === y);  false (değerler eşit, ancak tipler farklı)


3.Eşit Değil Karşılaştırması (!=):
   ? İki değeri karşılaştırmak için kullanılır ve değerler eşit değilse `true` (doğru) sonucunu verir.
    
   !ÖRNEK 
   let a = 10;
   let b = 20;
   TODO console.log(a != b); /true (değerler farklı)


4.Kesin Eşit Değil Karşılaştırması (!==):
   ? İki değeri karşılaştırmak için kullanılır ve hem değerler hem de tipler eşit değilse `true` (doğru) sonucunu verir.
    
   !ÖRNEK 
   let a = 10;
   let b = '10';
   TODO console.log(a !== b);  true (değerler aynı, ancak tipler farklı)


5.Büyük (>), Küçük (<), Büyük Eşit (>=), Küçük Eşit (<=) Karşılaştırmaları:
   ? İki değeri karşılaştırmak için kullanılırlar ve sonuç, karşılaştırma operatörünün ifadesine bağlı olarak `true` (doğru) veya `false` (yanlış) olur.
    
   !ÖRNEK 
   let sayi1 = 10;
   let sayi2 = 5;
   TODO console.log(sayi1 > sayi2);  // true
   console.log(sayi1 < sayi2);  // false
   console.log(sayi1 >= sayi2); // true
   console.log(sayi1 <= sayi2); // false

Bu karşılaştırma operatörleri, koşullu ifadeler, döngüler ve sıralama işlemleri gibi birçok programlama görevinde kullanılır. 
*/


//?----------------------------------------DİALOG KUTULARI-----------------------------
/*
Dialog kutuları (diyalog kutuları veya popup pencereler olarak da adlandırılırlar)

1. Alert Kutusu:
   - Alert kutusu, kullanıcıya bir bilgi mesajı veya uyarı göstermek için kullanılır. Kullanıcı bu mesajı okuyup onayladığında devam edebilir.
   ? JavaScript'de `alert()` fonksiyonu ile oluşturulur.
   
   !Örnek:  
   alert('Hoş geldiniz!'); // Kullanıcıya "Hoş geldiniz!" mesajını göster.


2. Confirm Kutusu:
   - Confirm kutusu, kullanıcıya bir soru sormak ve "Evet" veya "Hayır" gibi seçenekler sunmak için kullanılır. Kullanıcı seçimini yapar ve bu seçime göre bir işlem yapabilirsiniz.
   ? JavaScript'de `confirm()` fonksiyonu ile oluşturulur.
   
   !Örnek: 
    
  const onay = confirm('Devam etmek istiyor musunuz?');
   if (onay) {
  console.log("Kullanıcı 'Evet' seçeneğini seçti.");
   } else {
  console.log("Kullanıcı 'Hayır' seçeneğini seçti.");
  }


3. Prompt Kutusu:
   - Prompt kutusu, kullanıcıdan bir veri girişi almak için kullanılır. Kullanıcı bir metin kutusuna veri girer ve bu veriyi kullanarak bir işlem yapabilirsiniz.
   ? JavaScript'de `prompt()` fonksiyonu ile oluşturulur.
   
   !Örnek:  
   const isim = prompt('Adınızı giriniz:');
   if (isim) {
   alert(`Merhaba, ${isim}!`);
   } else {
  alert('İşlem iptal edildi.');
   }
   console.log(isim);


    TODO Dialog kutuları, kullanıcılarla etkileşimde bulunurken bilgi toplamak veya kullanıcıya bir uyarı vermek için kullanışlıdır.

*/
