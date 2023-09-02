/*
🙌🏼 Easy: Kullanıcıdan bir sayı almanızı ve bu sayının asal olup olmadığını kullanıcıya söylemenizi istiyorum. 

🗝️ Asal sayıların ortak özelliği kendisine ve bire kalansız bölünmesidir. 2’nin de asal sayı olduğunu programında unutma 😀Bütün asal sayıları tanımlamak ve kontrol etmek yerine sayının asal sayı olup olmadığını matematik işlemleriyle anlayabilirsin 😉

Örnek çıktı aşağıdaki gibi olmalıdır 🤗

Bir sayi girin: 17

17 asal bir sayidir.

Bir sayi girin: 10

10 asal bir sayi degildir.

🌟Medium: Kullanıcıdan bir kelime almanız gerekiyor. Bu kelimenin harflerini büyük harflere dönüştüren bir program yazmanızı istiyorum. 

🗝️ C dilinde toupper() fonksiyonu harfleri büyük harfe dönüştürür.

Örnek çıktı aşağıdaki gibi olmalıdır 🤗

Orijinal kelime: Merhaba

Büyük harfli kelime: MERHABA

💪🏻Hard: Bir şirket, bir ürünü üretmek ve satmak için belirli bir maliyet ve satış fiyatı hesaplamaktadır. Şirketin bir ürün için birim maliyeti ve birim satış fiyatı verildiğinde, kaç adet ürünün satılması durumunda şirketin kar edeceğini bulmanı istiyorum. Sakin ol şimdi biraz daha detaylandıracağım 😀

🗝️ Bir adet cost ve price değişkeni oluşturmalısın. Bunları kullanıcıdan istemene gerek yok. Örneğin cost:100 price:150 olması durumunda 3 ürün satıldığında kâr edilmeye başlanmış olur. Cost price’dan her zaman düşük olmalıdır, eğer aynı veya yüksek olursa  kâr edilemez uyarısı dönmelidir.

Örnek çıktı aşağıdaki gibi olmalıdır 🤗

Cost: 100

Price: 150

Kaç ürün satılırsa kâr edilir?: 3 
 */

//Easy
// Fonksiyon, girilen sayının asal olup olmadığını kontrol eder.
function isPrimeNumber(number) {
  if (number <= 1) {
    return false; // 1 veya daha küçük sayılar asal değildir.
  }

  // 2 özel durumdur, asal bir sayıdır.
  if (number === 2) {
    return true;
  }

  // 2'den başlayarak sayının kareköküne kadar olan tüm sayılarla bölünüp bölünmediğini kontrol ediyoruz.
  // Eğer bölen bir sayı bulunursa, asal olmadığını anlarız.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // Hiçbir bölen bulunmadıysa, asal sayıdır.
  return true;
}

// Kullanıcıdan sayı alınıyor.
const number = parseInt(prompt("Bir sayi girin:"));

// Fonksiyon çağrılarak sayının asal olup olmadığı kontrol ediliyor.
if (isPrimeNumber(number)) {
  console.log(number + " asal bir sayidir.");
} else {
  console.log(number + " asal bir sayi degildir.");
}

//Medium

//Hard
