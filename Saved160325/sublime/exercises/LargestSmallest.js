var Lrg;
var Sml;
var numbers = [56, 74, 31, 89, 8,
                    22, 5, 19, 28, 100,
                    82, 72, 39, 25, 90,
                    1, 97, 83, 58, 38,
                    57, 71, 70, 7, 3,
                    12, 48, 45, 43, 84,
                    68, 49, 37, 41, 92,
                    96, 6, 66, 95, 15,
                    67, 2, 59, 4, 91,
                    44, 50, 17, 30, 88,
                    34, 55, 64, 9, 27,
                    73, 60, 32, 81, 10,
                    53, 61, 63, 51, 65,
                    36, 26, 99, 76, 47,
                    21, 14, 16, 40, 79,
                    75, 85, 42, 86, 18,
                    23, 24, 46, 69, 29,
                    77, 20, 54, 80, 87,
                    13, 94, 98, 93, 62,
                    35, 33, 11, 52];
Lrg = numbers[0];
Sml = Lrg;
for (ndx = 0; ndx < numbers.length; ndx++) {
  if (numbers[ndx] > Lrg) {
    Lrg = numbers[ndx];
    console.log(Lrg);
  }
  if (numbers[ndx] < Sml) {
    Sml = numbers[ndx];
    console.log(Sml);
  }
}
console.log(Lrg, Sml);
