// // 文字列"あ"のCode Pointを取得
// console.log("あ".codePointAt(0)); // => 12354

// // Code Pointが`12354`の文字を取得する
// console.log(String.fromCodePoint(12354)); // => "あ"
// // `12354`を16進数リテラルで表記しても同じ結果
// console.log(String.fromCodePoint(0x3042)); // => "あ"

// // "あ"のCode Pointは12354
// const codePointOfあ = "あ".codePointAt(0);
// // 12354の16進数表現は"3042"
// const hexOfあ = codePointOfあ.toString(16);
// console.log(hexOfあ);// => "3042"
// // Unicodeエスケープで"あ"を表現できる
// console.log("\u{3042}"); // => "あ"

// // 文字列をCode Unit(16進数)の配列にして返す
// function convertCodeUnits(str) {
//   const codeUnits = [];
//   for (let i = 0; i < str.length; i++) {
//     codeUnits.push(str.charCodeAt(i).toString(16));
//   }
//   return codeUnits;
// }

// const str = "鈴木洋一朗";
// const codeUnits = convertCodeUnits(str);
// console.log(codeUnits);

const str1 = new String("test");
const str2 = "test"
console.log(str1);
console.log(str2);
console.log(typeof str1);
console.log(typeof str2);