/*
🙌🏼 Easy: Bir kutuda 5 kırmızı, 4 yeşil ve 3 mavi top bulunuyor. Kutudan rastgele çekilen 2 topun aynı renk olma olasılığı nedir?

🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗

🌟Medium:  Bir öğrenci kitap okuma hedefi olarak yılda 36 kitap okumayı belirledi. Eğer her ay eşit sayıda kitap okursa kaç kitap okumuş olur?

🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗

💪🏻Hard: Bir yarış pistinde iki yarışmacı aynı anda start alıyor. İlk yarışmacı saatte 15 km hızla, ikinci yarışmacı ise saatte 20 km hızla koşuyor. İkinci yarışmacı kaç saat sonra ilk yarışmacıyı yakalar?😀🗝️ Bu problemi çözen kodu yazmanı istiyorum🤗
*/

//Easy
const red = 5;
const green = 4;
const blue = 3;
const total = red + green + blue;
const probability =
  (red / total) * ((red - 1) / (total - 1)) +
  (green / total) * ((green - 1) / (total - 1)) +
  (blue / total) * ((blue - 1) / (total - 1));
console.log(probability);

//Medium

//Hard
