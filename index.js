var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.

// a = 10;
// x = --a + a++;
// x = 9 + a++; a = 9
// x = 9 + 9; x = 18 a = 10 final;