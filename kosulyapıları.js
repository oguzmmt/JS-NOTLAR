//?--------------- KOŞUL YAPILARI ------------------
/*
? Bir programın belirli koşullara bağlı olarak farklı yolları izlemesini veya farklı işlemleri gerçekleştirmesini sağlayan temel programlama yapılarıdır.

1. If Koşulu:
   ? `if` koşulu, belirli bir koşulun doğru olduğu durumda bir kod bloğunun çalıştırılmasını sağlar.
    
   !Örnek
    let yas = 18;
    if (yas >= 18) {
     console.log('Oy kullanabilirsiniz.');
   }
   

2. If-Else Koşulu:
   ?Bir koşulun doğru olması durumunda bir kod bloğunu çalıştırırken, koşul yanlışsa başka bir kod bloğunu çalıştırır.
    
   !Örnek
   let puan = 75;
   if (puan >= 70) {
     console.log('Başarılı.');
   } else {
     console.log('Başarısız.');
   }
   


2. **Başka Bir İşlem Yapma:**
   Başarısız olduğunda başka bir işlem yapmak için `else` içinde işlevleri çağırabilirsiniz.

let puan = 60;
if (puan >= 70) {
  console.log('Başarılı.');
} else {
  gecmeDurumunuKontrolEt(); // Başka bir işlemi çağırma
}


3. **Başka Değişkenleri Değiştirme:**
   `else` içinde değişkenlerin değerlerini değiştirebilirsiniz.


let puan = 60;
let gecmeDurumu = 'Başarısız';
if (puan >= 70) {
  console.log('Başarılı.');
} else {
  gecmeDurumu = 'Başarısız. Sınavı geçmek için daha fazla çalışmalısınız.';
  console.log(gecmeDurumu);
}


4. **Başka Koşulları Kontrol Etme:**
   `else` içinde başka koşulları kontrol edebilirsiniz.

let puan = 60;
if (puan >= 70) {
  console.log('Başarılı.');
} else {
  if (puan >= 50) {
    console.log('Zayıf geçtiniz.');
  } else {
    console.log('Başarısız. Sınavı geçmek için daha fazla çalışmalısınız.');
  }
}


`else` bloğu, bir koşul karşılanmadığında çalışacak kodları içermek için kullanılır ve bu kodlar çeşitli işlemleri yapabilir.

3. Else-If Koşulu:
   ?Birden fazla koşulu kontrol etmek için kullanılır. İlk doğru koşulu bulduğunda diğer koşulları kontrol etmeyi bırakır.

   !Örnek:
   let not = 85;
   if (not >= 90) {
     console.log('AA');
   } else if (not >= 80) {
     console.log('BA');
   } else if (not >= 70) {
     console.log('BB');
   } else {
     console.log('Geçersiz');
   }

! 3.1 **İç İçe `if` İfadeleri (Nested `if` Statements):**


   let saat = 14;
   if (saat < 12) {
       console.log("Günaydın!");
       if (saat < 10) {
           console.log("Erken kalktınız.");
       }
   } else if (saat < 18) {
       console.log("İyi günler!");
   } else {
       console.log("İyi akşamlar!");
   }


! 3.2 **Kısa Devre `if` İfadesi:**

   let isDog = true;
   let isCat = false;
   if (isDog && isCat) {
       console.log("Hem köpek hem de kedi var.");
   } else if (isDog || isCat) {
       console.log("Köpek veya kedi var.");
   } else {
       console.log("Ne köpek ne de kedi var.");
   }   
   

4. Switch-Case Yapısı:
    ? Birden fazla seçenek arasından bir seçim yapmak için kullanılır. 
    ? Değişkenin değeri, farklı case (durum) bloklarında kontrol edilir ve eşleşen bir case bulunursa o case'in kodu çalıştırılır.
  
    !Örnek:

let gun = prompt('Bir gün girin:');
gun = gun.toLowerCase(); 

let sonuc = '';

switch (ifade) {
    case deger1:
        // Deger1'e karşılık gelen işlemler
        break; // İşlem tamamlandığında switch'ten çık
    case deger2:
        // Deger2'ye karşılık gelen işlemler
        break;
    // Diğer durumlar
    default:
        // Hiçbir case uymuyorsa yapılacak işlem
}


İşte farklı senaryolarda kullanılabilecek `switch-case` örnekleri:

1. **Temel Switch-Case:**


 const gun = prompt("Bir gün giriniz:");

switch (gun) {
    case "Pazartesi":
        console.log("Haftanın ilk günü.");
        break;
    case "Salı":
        console.log("Haftanın ikinci günü.");
        break;
    case "Çarşamba":
        console.log("Haftanın üçüncü günü.");
        break;
    default:
        console.log("Haftanın diğer günleri.");
}

  
2. **Birden Fazla Durum:**


   let meyve = "elma";
   switch (meyve) {
       case "elma":
       case "armut":
           console.log("Elma veya armut.");
           break;
       case "muz":
           console.log("Muz.");
           break;
       default:
           console.log("Diğer meyveler.");
   }


3. **Değerlerin Karşılaştırılması:**

   let puan = 85;
   switch (true) {
       case puan >= 90:
           console.log("Mükemmel!");
           break;
       case puan >= 70:
           console.log("Başarılı.");
           break;
       case puan >= 50:
           console.log("Geçerli.");
           break;
       default:
           console.log("Başarısız.");
   }

4. **Switch-Case ile Fonksiyon Kullanımı:**


   function karsilama(dil) {
       switch (dil) {
           case "TR":
               return "Merhaba!";
           case "EN":
               return "Hello!";
           case "FR":
               return "Bonjour!";
           default:
               return "Dil desteklenmiyor.";
       }
   }
  

5. **Switch-Case ile Dizi Kullanımı:

   
   let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
   for (let i = 0; i < gunler.length; i++) {
       switch (gunler[i]) {
           case "Pazartesi":
               console.log("Haftanın ilk günü.");
               break;
           case "Çarşamba":
               console.log("Haftanın üçüncü günü.");
               break;
           default:
               console.log("Diğer günler.");
       }
   }


`switch-case` yapısı, belirli değerlere veya koşullara göre farklı işlemler yapmak için kullanılır. 
Her bir örnek, `switch-case` ifadesinin farklı kullanım senaryolarını göstermektedir.
Bu koşul yapıları, programların belirli durumlarda farklı yolları takip etmesini sağlar ve kodunuzu daha esnek ve dinamik hale getirir. 
koşul yapıları, programların karmaşık kararlar almasına ve çeşitli senaryolara yanıt vermesine yardımcı olur.
*/








