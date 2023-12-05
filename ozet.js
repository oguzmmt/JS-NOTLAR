/*  JavaScript'te temel konseptleri özetleyen hatırlatıcı notlar :


1. **var:**
    - `var` anahtar kelimesi, eski JavaScript sürümlerinde kullanılan bir değişken tanımlama yöntemidir.
    - Değişkenleri global veya fonksiyon düzeyinde tanımlar.
    - Değişken yeniden tanımlanabilir ve güncellenebilir.
    - Scope (kapsam) sorunlarına yol açabilir.
 
 Örnek:

 var x = 10;
 x = 20; // Değişken güncellenebilir

 
1.1 **let:**
    - `let` anahtar kelimesi, blok düzeyinde kapsam oluşturur.
    - Değişkenleri tanımladığınız blok içinde kullanmanıza izin verir.
    - Değişken yeniden tanımlanabilir ve güncellenebilir.
 
 Örnek:

 let y = 30;
 y = 40; // Değişken güncellenebilir

 
1.2 **const:**
    - `const` anahtar kelimesi, sabit değişkenler oluşturmak için kullanılır.
    - Değişkenler sadece bir kez atanabilir ve daha sonra yeniden atanamaz.
    - Değişkenin değeri sabit kalır.
 
 Örnek:

 const z = 50;
  z = 60; // Hata: const değişkenleri yeniden atanamaz

 
2. **Temel Veri Türleri:**
    - **String**: Metin verilerini temsil eder. Örneğin: `"Merhaba, dünya"`.
    - **Number**: Sayısal değerleri temsil eder. Örneğin: `42`, `3.14`.
    - **Boolean**: `true` veya `false` gibi mantıksal değerleri temsil eder.
    - **Object**: Nesneleri ve karmaşık veri yapılarını temsil eder.
    - **Array**: Sıralı öğeleri içeren listeleri temsil eder.
    - **Function**: Bir işlevi temsil eder.
    - **undefined**: Değişkenin atanmamış veya tanımsız olduğunu gösterir.
    - **null**: Değişkenin hiçbir değere sahip olmadığını gösterir.
 
 Örnek:

 let isim = "Ahmet"; // String
 let yas = 25; // Number
 let aktif = true; // Boolean
 
 let kullanici = { ad: "Mehmet", yas: 30 }; // Object
 
 let meyveler = ["elma", "muz", "portakal"]; // Array
 
 function selamVer() {
     console.log("Merhaba, dünya!");
 } // Function
 
 let degisken; // undefined
 let deger = null; // null
  */
 


 /****************************** ÖNEMLİİİİİİİİİİİİİİİİİİ   **********************/

/* 3. **Operatörler (Operators):**
   TODO değişkenler ve değerler üzerinde işlemler gerçekleştirmek için kullanılır. 
   TODO Aritmetik operatörler matematiksel işlemleri gerçekleştirir, karşılaştırma operatörleri değerleri karşılaştırır ve mantıksal operatörler mantıksal işlemleri yapar. 
   ?- Aritmetik Operatörler: `+`, `-`, `*`, `/`, `%` vb.
   ?- Atama Operatörleri: `=`, `+=`, `-=` vb.
   !- Karşılaştırma Operatörleri: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` vb.
   !- Mantıksal Operatörler: `&&`, `||`, `!` vb.
   - Dizilere Yönelik Operatörler: `[]`, `.`, `in`, `instanceof` vb.

4. **Dialog Kutuları (Dialog Boxes):**  
    ?kullanıcıyla etkileşimde bulunmak için kullanılır
   - `alert()`: Kullanıcıya mesaj gösterir.
   - `confirm()`: Kullanıcıya bir soru sorar ve kullanıcının "Tamam" veya "İptal" düğmelerinden birini seçmesini bekler.
   - `prompt()`: Kullanıcıdan bir giriş alır.

5. **Koşul Yapıları (Conditional Statements):**
   TODO  belirli şartların karşılanıp karşılanmadığını kontrol etmek için kullanılır. 
   - `if`: Belirli bir şartın doğru olup olmadığını kontrol eder. !!!!!! iç içe if 
   - `else`: Bir `if` şartı yanlışsa çalışır.                      !!!!!!  else içinde değer değiştirme ve başka koşul ekleme, başka işlem çağırma
   - `else if`: Birden fazla koşul kontrolü için kullanılır.
   - `switch`: Birden fazla olası durum için kontrol yapar. fonksiyon ve array içinde kullanımı 

6. **Döngüler (Loops):**
   TODO belirli bir işlemi tekrarlamak için kullanılır. 
   - `for`: Belirli bir sayıda tekrarlanacak işlemler için kullanılır.
   - `while`: Belirli bir şart doğru olduğu sürece işlemleri tekrarlar.
   - `do...while`: Şart sona gelene kadar en az bir kez işlemi tekrarlar.
  ! - `for...in`: Nesne özellikleri üzerinde dolaşır.  nesnenin anahtar(key)-değer(value) çiftleri üzerinde çalışmak için kullanılır. bir nesnenin her bir özelliğine erişebilirsiniz.
  ? - `for...of`: Diziler ve diğer yinelemeli nesneler üzerinde dolaşır. sadece elemanların değerlerine(value) erişmenizi sağlar, indekslere erişemezsiniz.

    !----------------- forEach----------------- üç parametre alır: 1 elemanın değeri, 2 elemanın dizindeki indeksi ve 3 işlem yapılan dizi kendisi.
   - forEach` fonksiyonu, bir dizinin her elemanını sırayla incelemek ve her eleman üzerinde belirtilen bir işlemi gerçekleştirmek için kullanılır. İşte bazı önemli detaylar:
   - `forEach`, her eleman için bir işlevi (fonksiyonu) çağırır ve bu işlev, her elemanın üzerinde yapılacak işlemi tanımlar.
   - `forEach` işlemi, dizi içindeki her elemanın işlenmesi tamamlanana kadar devam eder.
   - `forEach` işlemi, özellikle dizi elemanlarını güncellemek, filtrelemek, toplamak veya asenkron işlemler için kullanılabilir.
   ! break metodu kırılmıyor ve 
Örnek kullanım:

var meyveler = ["elma", "muz", "portakal"];
                           !1       !2    !3 üç değer alır
meyveler.forEach(function(meyve, indeks, dizi) {
    console.log("Eleman: " + meyve);
    console.log("İndeks: " + indeks);
    console.log("Dizi: " + dizi);
});


7. **Diziler (Arrays):**
   TODO birden çok öğeyi tek bir değişken altında saklamak için kullanılır.
   - Dizi, birden çok öğeyi tek bir değişken altında saklamak için kullanılır.
   - Örnek diziyi tanımlama: `var meyveler = ["elma", "muz", "portakal"];`
   - Dizi elemanlarına erişim: `meyveler[0]` (0'dan başlayan indeksleme).

8. **Fonksiyonlar (Functions):**
  TODO belirli bir işlem veya işlemleri gruplayarak, bu işlemleri daha sonra çağırmak için kullanılır  
  TODO kodu daha düzenli hale getirmeye, tekrar kullanımı kolaylaştırmaya ve karmaşık işlemleri basitleştirmeye yardımcı olur.
  TODO Özellikle aynı işlemi birden fazla kez yapmanız gerektiğinde, bu işlemi bir fonksiyon içinde tanımlamak hem zaman kazandırır hem de hata riskini azaltır.
   - Fonksiyonlar, belirli bir işlemi yapmak için kullanılır ve belirli bir ad altında gruplanmış kod parçacıklarıdır.
   - Fonksiyon tanımlama: `function adim() {  kodlar  };
   - Fonksiyon çağırma: adim();

 9. Tür Dönüşümleri (Type Conversions):
    TODO bir veri türünü başka bir türe dönüştürmek için kullanılır
   - parseInt(): Bir metni tamsayıya dönüştürür.
   - parseFloat(): Bir metni ondalık sayıya dönüştürür.
   - String(): Bir değeri metin olarak dönüştürür.
   - Number(): Bir değeri sayıya dönüştürür.
     */


  /*  İlk önerilen yöntem, metni bir döngü kullanarak karakter karakter tersine çevirir ve bu nedenle daha düşük seviyede daha fazla kontrol sağlar. Ancak daha fazla kod yazmayı gerektirebilir.

   İkinci önerilen yöntem ise daha az kod kullanır ve JavaScript'in yerleşik işlevlerini kullanarak işlemi gerçekleştirir, bu nedenle daha basit ve hızlıdır.
   
   Genellikle yerleşik işlevleri kullanmak, kodun daha temiz ve anlaşılır olmasını sağlar ve hata yapma olasılığını azaltır. Ancak projenizin gereksinimlerine ve karmaşıklığına bağlı olarak farklı yaklaşımlar daha uygun olabilir. */