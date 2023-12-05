/*
    Çıktı Alma Metotları :

       ? 1. **Window İle Çıktı Alma Metodu **: 
        !BUNLARA ERİŞİRKEN BAŞINA WİNDOW YAZMANA GEREK YOK
            - Bu yöntem tarayıcı penceresini temsil eden global `window` nesnesini kullanır. 
            - Tarayıcı penceresi üzerinde birçok işlem yapmak için kullanılabilir, örneğin tarayıcı penceresinin URL'sini değiştirmek, tarayıcıyı yenilemek vb.
            - Örnek kullanım:

                todo location.href = "https://www.example.com";
                

       ? 2. **Document İle Çıktı Alma Metodu**: 
        !BUNLARA ERİŞİRKEN DOCUMENT YAZMAN GEREKİR
            - Bu yöntem, HTML belgesinin içeriğine erişmek ve değiştirmek için kullanılır.
            - HTML belgesi üzerindeki öğeleri (element) seçmek ve içeriklerini değiştirmek için kullanılır. Bu sayede sayfa içeriği dinamik olarak güncellenebilir.
            - Örnek kullanım:
            
            todo document.write("Hello, world!");

    
*/ 



/* GLOBAL SCOBE VE LOCAL SCOPE

   ? 1. Global Scope :
      Global scope'ta tanımlanan değişkenler ve fonksiyonlar, tüm kod dosyası veya sayfa boyunca erişilebilir.
      Global scope dışında tanımlanan bir değişkene global scope'tan erişilemez.
      
      ÖRNEK:

      todo var globalDegisken = "global bir değişken"; 

      todo function globalFonksiyon() {
      todo console.log(globalDegisken);}
        
      todo  globalFonksiyon();  "global bir değişken"

    
   ? 2.Local Scope (Yerel Kapsam veya Fonksiyon Kapsamı): 

      Local scope, bir fonksiyonun içinde tanımlanan değişkenlerin ve fonksiyonların kapsamını ifade eder. YANİ KISACA PARANTEZ İÇİNİ KAPSAR
      Bir değişken veya fonksiyon yalnızca kendi local scope'unda erişilebilir.
      Örnek:

       todo function lokalFonksiyon() {
       todo let lokalDegisken = "Ben lokal bir değişkenim";
       todo console.log(lokalDegisken);}

       todo lokalFonksiyon(); // "Ben lokal bir değişkenim"

       ! console.log(lokalDegisken); // Hata! lokalDegisken global scope'ta tanımlanmadı.
       ! lokalDegisken sadece lokalFonksiyon içinde erişilebilir

    Local scope, değişkenlerin sadece belirli bir fonksiyon içinde geçerli olduğu ve farklı fonksiyonlardaki aynı isimli değişkenlerin birbirini etkilemediği bir yapı sağlar. 
    Bu, değişkenlerin ve fonksiyonların izole edilmiş olmasını sağlar ve programın daha düzenli ve hatasız olmasına yardımcı olur.


   ? 3. Block Scope:

        ES6 (ECMAScript 2015) ile gelen let ve const anahtar kelimeleri, block scope (blok kapsamı) sağlar. 
       ! Bu, if ifadeleri, for döngüleri ve diğer blok yapıları içinde tanımlanan değişkenlerin sadece o blok içinde geçerli olduğu anlamına gelir. 
        Bu, daha spesifik kapsamların oluşturulmasına yardımcı olur.
        Örnek:

      todo  if (true) {
      todo  const blockScopeDegisken = "Ben blok kapsamındayım";
      todo  console.log(blockScopeDegisken);}

      !  console.log(blockScopeDegisken); // Hata! blockScopeDegisken tanımlı değil
      !  blockScopeDegisken sadece if bloğu içinde erişilebilir
        
*/

/*  VAR LET CONST DEĞİŞKENLER
        ? Değişkenler, program içinde verileri depolamak, işlemek ve kullanmak için temel bir yapı taşlarıdır. 
        ? Örneğin, bir değişken aracılığıyla kullanıcıdan alınan girişi saklayabilir, hesaplamalar yapabilir veya sonuçları görüntüleyebilirsiniz

       ? 1. VAR GLOBAL VE LOCAL SCOPE TA ÇALIŞIR

        * değişken değerleri değiştirilebilir
        todo var sayi = 5;
        todo sayi = 10;  Değişkenin değeri güncellenebilir.

        * aynı isimle tekrar tanımlanabilir
        todo var x = 5;
        todo var x = 10; // Aynı isimle tekrar tanımlama yapılabilir.

       ? 2. LET LOCAL VE BLOCK SCOPE TA ÇALIŞIR
        * değişken değerleri değiştirilebilir
        TODO let sayi = 5;
        TODO sayi = 10; // Değişkenin değeri güncellenebilir.

        ! AYNI İSİM İLE AYNI YERDE TANIMLANAMAZ FARKLI YERDE TANIMLANABİLİR

        let x = 5;
        let x = 10; // Hata! Aynı kapsam içinde tekrar tanımlama yapılamaz.

        function fonksiyonA() {
        let y = 15;
        console.log(y); // 15
        }

        function fonksiyonB() {
        let y = 20;
        console.log(y); // 20
        }

     ? 3. CONST BLOCK KAPSAMINDA ERİŞİLEBİLİR
 
       Değişkenlerin sabit değerlerini temsil etmek için kullanılır. 
       Bir değişkenin değerini daha sonra değiştirmek istemediğiniz durumlarda tercih edilir.

       !DEĞİŞKEN DEĞERLERİ DEĞİŞTİRİLEMEZ
       
       TODO const sayi = 5;
       TODO sayi = 10; // Hata! Bir kez atandıktan sonra değeri değiştirilemez.

       ?DEĞİKEN İÇERİĞİ DEĞİŞTİLEBİLİR
       const dizi = [1, 2, 3];
       dizi.push(4); // Geçerli, diziye yeni bir eleman eklenebilir.

       const obj = { anahtar: "değer" };
       obj.anahtar = "yeniDeğer"; // Geçerli, objenin içeriği güncellenebilir.

       ? AYNI İSİMLE AYNI YERDE TANIMLANAMAZ

*/ 








