//----------------TÜR DÖNÜŞÜMLERİ------------

import { personel } from "../ozet"

/*
JavaScript'te tür dönüşümü (type conversion veya type casting), bir veri türünü başka bir veri türüne dönüştürme işlemidir. 
JavaScript, veri türleri arasında otomatik tür dönüşümü yapabilen bir dil olduğu için bu konu oldukça önemlidir.

1. Otomatik Tür Dönüşümü (Implicit Type Conversion):
   - JavaScript, bazı operatörler veya ifadeler kullanıldığında otomatik olarak veri türlerini dönüştürebilir.
   
   !Örnek:
   const sayi = 5;          // number türünde
   const metin = "2";       // string türünde

   const toplam = sayi + metin; // Otomatik olarak stringe çevrilir ve "52" olur.
   ```

2.Manuel Tür Dönüşümü (Explicit Type Conversion):
   - Veri türlerini istenen bir veri türüne dönüştürmek için JavaScript'te bazı yöntemler vardır.
   - Bu yöntemler:
     * parseInt(: Bir metni tamsayıya dönüştürür.
     * parseFloat(): Bir metni ondalık sayıya dönüştürür.
     * String(): Bir değeri stringe dönüştürür.
     * Number(): Bir değeri sayıya dönüştürür.
     * Boolean(): Bir değeri boolean'a dönüştürür.

   !Örnekler:
  ? const metinSayi = "123";
  ? const sayi = parseInt(metinSayi); // sayi değişkeni artık bir tamsayıdır.
  ? const sayiMetin = sayi.toString(); // sayiMetin değişkeni artık bir stringdir.
   

3. Falsy ve Truthy Değerler:
   - JavaScript'te bazı değerler doğru (truthy) veya yanlış (falsy) olarak kabul edilir. Bu kavramlar, bazı koşullarda otomatik tür dönüşümünün sonucunu etkiler.
   
   !Örnek:
   const deger = "Merhaba";
   if (deger) {
     console.log("Deger doğru (truthy).");
   } else {
     console.log("Deger yanlış (falsy).");
   }

*/


//?----------------Breakpoint (DEBUGGER)------------


/*
JavaScript kodunun belirli bir noktasına bir kesme noktası eklemek ve kodun çalışmasını o noktada duraklatmak için kullanılır. 
Bu, hata ayıklama amacıyla kullanılır ve tarayıcı geliştirici araçları ile birlikte çalışır.

? 1. Kod İçinde Yerleştirme:
   
   `debugger` ifadesini kodunuzun içinde bir satıra ekleyebilirsiniz. Kod bu noktaya geldiğinde tarayıcı, çalışmayı duraklatır ve geliştirici araçları otomatik olarak açılır. 
   Bu, kodunuzun belirli bir noktasında değişken değerlerini incelemenize ve kod akışını izlemenize olanak tanır.

   !Örnek:
   * function hesaplaToplam(a, b) {
   *   let toplam = a + b;
   *  * debugger; // Bu satıra eklenen debugger ifadesi NEREDEN EKLERSEN ORADA BAŞLAR
   *  return toplam;
   }

   let sonuc = hesaplaToplam(5, 3);
*/

//?----------------DÖNGÜLER------------

/*
? Döngüler, bir veya daha fazla kod bloğunu belirli bir koşula veya belirli bir sayıda tekrarlayan programlama yapılardır. 
? Belirli işlemleri tekrar etmek ve verileri işlemek için sıkça kullanılır. 

1. for Döngüsü:
   ? belirli bir başlangıç değeri, bir bitiş koşulu ve bir artırma veya azaltma adımı ile çalışır. Her adımda koşul kontrol edilir ve koşul doğruysa döngü devam eder.
   
   !Örnek:
       *değişken--koşul--artırma azaltma   
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. while Döngüsü:
    ?belirli bir koşul doğru olduğu sürece çalışır. Koşul her adımda kontrol edilir ve koşul doğruysa döngü devam eder.
   
    !Örnek:
   let sayi = 0;
    !koşul while yazılır 
   while (sayi < 5) { 
     console.log(sayi);
     !sayi++;  ----artırma azaltma sonsuz döngü olmaması için gerekiyor
   }


3. do...while Döngüsü:
   ? kodu en az bir kez çalıştırmak istediğinizde kullanılır. Koşul döngünün sonunda kontrol edilir ve koşul doğruysa döngü tekrar başlar.
   
   !Örnek:
   let sayi = 0;
   do {
     console.log(sayi);
     sayi++;
     ! değer do kısmına yazılır
   } while (sayi < 5);
   !while koşul yazılır 

   
4.**for...in Döngüsü**

JavaScript'te **for...in** döngüsü, bir dizi veya nesnenin tüm elemanlarını sırayla gezmek için kullanılır. 
*Döngü, her bir elemanın anahtarını (key) ve değerini (value) içeren bir ikili olarak çalışır.

*for...in** döngüsünün yapısı aşağıdaki gibidir:

for (var key in object) {
  // Kod bloğu
}


**for...in** döngüsünde, **object** değişkeni, dizi veya nesneyi temsil eder.
**key** değişkeni, her bir elemanın anahtarını (key) temsil eder. **value** değişkeni, her bir elemanın değerini (value) temsil eder.
**for...in** döngüsü, diziler ve nesneler üzerinde kullanılabilir. Diziler üzerinde kullanıldığında, **key** değişkeni, dizi elemanlarının indekslerini temsil eder. 
Nesneler üzerinde kullanıldığında, **key** değişkeni, nesnenin özelliklerini temsil eder.


!for...in** döngüsünün örnek kullanımı aşağıdaki gibidir:


// Dizi üzerinde kullanım
var dizi = ["a", "b", "c"];

for (var key in dizi) {
  console.log(key, dizi[key]);
}

// Çıktı:
// 0 a
// 1 b
// 2 c

// Nesne üzerinde kullanım
var nesne = {
  isim: "Bard",
  yaş: 25,
  şehir: "Ankara"
};

for (var key in nesne) {
  console.log(key, nesne[key]);
}

// Çıktı:
// isim Bard
// yaş 25
// şehir Ankara


5. **for...of Döngüsü**

* Döngü, her bir elemanı birer birer ele alır.

**for...of** döngüsünün yapısı aşağıdaki gibidir:

for (let element of iterable) {
  // Kod bloğu
}
```

**for...of** döngüsünde, **iterable** değişkeni, dizi veya iterable nesneyi temsil eder. **element** değişkeni, her bir elemanı temsil eder.

**for...of** döngüsü, diziler ve iterable nesneler üzerinde kullanılabilir. 
Diziler üzerinde kullanıldığında, **element** değişkeni, dizi elemanlarının değerlerini temsil eder. 
Iterable nesneler üzerinde kullanıldığında, **element** değişkeni, iterable nesnenin elemanlarını temsil eder.

**for...of** döngüsünün örnek kullanımı aşağıdaki gibidir:


// Dizi üzerinde kullanım
var dizi = ["a", "b", "c"];

for (let element of dizi) {
  console.log(element);
}

// Çıktı:
// a
// b
// c

// Nesne üzerinde kullanım
var nesne = {
  isim: "Bard",
  yaş: 25,
  şehir: "Ankara"
};

for (let element of nesne) {
  console.log(element);
}

// Çıktı:
// Bard
// 25
// Ankara

**for...of** döngüsünün **for...in** döngüsünden farklı yönleri aşağıdaki gibidir:

* **for...of** döngüsü, her bir elemanı birer birer işler. **for...in** döngüsü ise, her bir elemanı bir ikili olarak işler.
* **for...of** döngüsü, diziler ve nesneler dışındaki iterable nesneler üzerinde de kullanılabilir. **for...in** döngüsü ise, sadece diziler ve nesneler üzerinde kullanılabilir.
* **for...of** döngüsü, **for...in** döngüsünden daha verimlidir.
? `for...in`: Nesne özellikleri üzerinde dolaşır.  nesnenin anahtar(key)-değer(value) çiftleri üzerinde çalışmak için kullanılır. bir nesnenin her bir özelliğine erişebilirsiniz.
? - `for...of`: Diziler ve diğer yinelemeli nesneler üzerinde dolaşır. sadece elemanların değerlerine(value) erişmenizi sağlar, indekslere erişemezsiniz.
    
   !!!FOREACH DİZİLERDE KULANILIYOR

    TODO forEach  fonksiyonu, bir diziyi gezerek her bir öğesini eleman eleman işlemek için kullanılan bir döngü yöntemidir.   
    TODO `forEach()` yöntemi, bir dizi üzerinde çalışır ve her öğeyi işlemek için bir geri çağrı fonksiyonunu kabul eder. 
    TODO Bu geri çağrı fonksiyonu, her öğe için çağrılır ve öğenin değerini, indeksini ve diziyi temsil eden dizi nesnesini alabilir.

    !Örnek 1: Dizi Elemanlarını Ekrana Yazdırma
    
    const dizi = [1, 2, 3, 4, 5];
    dizi.forEach(function(eleman) {
    console.log(eleman);
    });

    !Örnek 2: Dizi Elemanlarını Toplama
    
    const dizi = [1, 2, 3, 4, 5];
    let toplam = 0;
    dizi.forEach(function(eleman) {
    toplam += eleman;
    });
    console.log("Toplam: " + toplam);

    !Örnek 3: Dizi Elemanlarını İşleme ve Yeni Bir Dizi Oluşturma

    const dizi = [1, 2, 3, 4, 5];
    const yeniDizi = [];
    dizi.forEach(function(eleman) {
    yeniDizi.push(eleman * 2);
    });
    console.log(yeniDizi);

?`forEach()` yöntemi, dizi üzerinde her öğe üzerinde dolaşmayı ve her adımda belirlediğiniz işlemi gerçekleştirmeyi kolaylaştırır. 
?Ancak dikkat etmeniz gereken önemli bir nokta, `forEach()` yöntemi ile dizi üzerinde dolaşırken özel bir `return` ifadesi kullanamazsınız. 
?Eğer dizi üzerinde dolaşmayı durdurmak veya belirli bir sonuç elde etmek istiyorsanız, `for` döngüsü veya başka yöntemler kullanmanız gerekebilir.

*/

/*
JavaScript'te `break` ve `continue` ifadeleri, döngülerin ve şartlı ifadelerin içinde kullanılarak kodun akışını kontrol etmek için kullanılır.

Break İfadesi:
- `break` ifadesi, bir döngüyü veya `switch` yapısını anında sonlandırmak için kullanılır.
 Döngü içinde veya `switch` yapısında bir `break` ifadesi bulunduğunda, bu ifadeye ulaşıldığında o anki döngü veya `switch` yapısı derhal sona erer ve kodun akışı dışarıya çıkar.

! Örnek 1: `for` döngüsünde `break` kullanımı
for (let i = 0; i < 5; i++) {
  console.log(i);
  if (i === 2) {
    break; // i değeri 2 olduğunda döngü sona erer.
  }
}




? Continue İfadesi:
bir döngü içinde çalıştığında, o adımdan sonraki işlemleri atlayarak bir sonraki döngü adımına geçer. Yani o anki adımı tamamlamadan bir sonraki adıma geçer.

! Örnek 1: `for` döngüsünde `continue` kullanımı
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // i değeri 2 olduğunda bu adımı atlar ve bir sonraki adıma geçer.
  }
  console.log(i);
}


! Örnek 2: Belirli bir koşulu sağlayan öğeleri atlamak
const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let sayi of sayilar) {
  if (sayi % 2 === 0) {
    continue; // Çift sayıları atlayarak sadece tek sayıları yazdırır.
  }
  console.log(sayi);
}

* `break` ve `continue` ifadeleri, döngülerin içinde veya `switch` yapısında kullanılarak programın akışını kontrol etmek için oldukça güçlüdür. 
 * Bu ifadeler, belirli koşullara bağlı olarak kodu atlamak veya sonlandırmak için kullanılabilir ve kodunuzu daha esnek ve verimli hale getirmenize yardımcı olabilir.
*/


