/*
Clean code yazmanın ne kadar önemli olduğunu biliyor musunuz? 🤔Clean code yazmak demek aslında en kısa kod en iyidir demek değildir. Herkes bu konuyla çok ilgilenmese de yazdığımız kodların da bir maliyeti vardır. Okunabilirliğin yüksek olması da clean code prensiplerindendir. Bundan dolayı clean code yazmak bir sanat eseri oluşturmaktır. Aşağıya bıraktığım sayfaya göz atabilirsiniz 🙂
https://garywoodfine.com/what-is-clean-code/


🙌🏼 Easy: Kullanıcıdan aldığınız bir sayının faktöriyelini hesaplayan kod parçacığını yazmanızı istiyorum.
🌟Medium:  Bir dizi oluşturup bu sayıların ortalamasını hesaplayan bir kod parçacığı yazar mısın?
💪🏻Hard: Bir sıralanmış dizide (örneğin, artan sırada) hedef bir sayının kaç kez tekrar ettiğini bulan bir kod parçacığı yazar mısın?
*/

//Easy
// Kullanıcıdan bir sayı iste
const sayi = parseInt(
  prompt("Faktöriyelini hesaplamak istediğiniz sayıyı girin:")
);

// Faktöriyel hesaplama fonksiyonu
function faktoriyelHesapla(sayi) {
  if (sayi === 0 || sayi === 1) {
    return 1;
  } else {
    return sayi * faktoriyelHesapla(sayi - 1);
  }
}

// Sonucu ekrana yazdır
if (sayi < 0) {
  console.log("Negatif bir sayının faktöriyeli hesaplanamaz.");
} else {
  const faktoriyel = faktoriyelHesapla(sayi);
  console.log(`${sayi} sayısının faktöriyeli: ${faktoriyel}`);
}

//Medium

//Hard
