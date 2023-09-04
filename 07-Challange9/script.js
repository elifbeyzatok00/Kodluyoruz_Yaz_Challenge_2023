/*
🙌🏼 Easy: Kullanıcıdan aldığınız sayının tek mi çift mi olduğunu ekrana yazdıran bir kod parçacığı yazar mısın?
🌟Medium: Bir dizi oluşturup içindeki çift sayıların toplamını hesaplayan bir kod parçacığı yazar mısınız?
💪🏻Hard: Kullanıcıdan bir cümle girmesini ve bu cümlenin içinde ikileme olup olmadığını bulan bir kod parçası yazmanızı istiyorum.😀(Not: burada ikilemeleri sadece arka arkaya yazılmış aynı kelimeler olarak düşünmenizi istiyorum.)

🗝️     Kullanıcı metin: at ağır ağır ilerliyordu.
         Cevap: ikilime kullandınız.
         Kullanıcı metin: Yürüyerek gidiyorduk.
         Cevap: İkileme bulunamadı.
*/

//Easy
// Kullanıcıdan bir sayı iste
const sayi = parseInt(prompt("Bir sayı girin:"));

if (sayi % 2 === 0) {
  console.log(`${sayi} sayısı çifttir.`);
} else {
  console.log(`${sayi} sayısı tektir.`);
}

//Medium

//Hard
