"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
var clear_smaller = "";
try {
    clear_smaller = fs_1.readFileSync('../clear_smaller.txt', 'utf-8');
    //done
}
catch (err) {
    console.error(err);
}
let extractedNumbers = clear_smaller.replace(/\D/g, '').trim().split('').map(Number);
/*
a = 2
e = 4
i = 8
o = 16
u = 32

*/
let add_vocal_nums = clear_smaller.replace(/\d/g, '').toLowerCase().trim()
    .replace("a", '2')
    .replace("e", "4")
    .replace("i", "8")
    .replace("o", "16")
    .replace("u", "32").replace(/\D/g, '').trim().split('').map(Number);
let all_vocals_nums = add_vocal_nums;
console.log({ all_vocals_nums, extractedNumbers });
function sum(input) {
    if (toString.call(input) !== "[object Array]")
        return false;
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
var sum_of_number = sum(extractedNumbers);
var vocals = sum(all_vocals_nums);
var AFG1 = null;
var AFG2 = Number(sum_of_number); // Summe aller Zahlen
var AFG3 = Number(vocals) + AFG2; // Summe aller Zalen addirt mit Vokalen
var AFG4 = 0;
console.table({ AFG1, AFG2, AFG3, AFG4 });
