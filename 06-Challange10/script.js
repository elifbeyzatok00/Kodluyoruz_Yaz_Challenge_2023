/*
🙌🏼 Easy: Bir dizi tanımladıktan sonra bu dizinin içinden en büyük sayıyı bulan kod parçacığını yazar mısın?

🌟Medium:  Bir dizi oluşturup içindeki sayıların en büyük ve en küçük değerlerini bulan ve ekrana yazdıran bir kod parçacığı yazar mısınız?

💪🏻Hard: Kullanıcının girdiği bir sayının tam bölenlerinin toplamını hesaplayan bir kod parçacığı yazınız.
*/

//Easy
// Bir dizi tanımla
const sayilar = [10, 5, 25, 30, 15, 40, 20];

// Dizinin ilk elemanını en büyük olarak kabul et
let enBuyukSayi = sayilar[0];

// Dizi içinde dolaşarak en büyük sayıyı bul
for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] > enBuyukSayi) {
    enBuyukSayi = sayilar[i];
  }
}

// Sonucu ekrana yazdır
console.log("Dizinin en büyük sayısı:", enBuyukSayi);

//Medium

//Hard
