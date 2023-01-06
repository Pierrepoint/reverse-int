module.exports = function reverse (n) {
newN = String(n);
if (newN[newN.length - 1] == '0'){newN = newN.slice(0,newN.length - 1);};
if (newN[0] == '-'){newN = newN.slice(1);};
let a = newN.length - 1;
let b = "";
while (a >= 0) {
b = b + newN[a];
a = a - 1;
};
return b;
}
