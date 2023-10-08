// if, else, nestad if

let kondisi1 = true;
let kondisi2 = true;

if (kondisi1) {
  console.log("aku sehat");
  if (kondisi2) {
    console.log("makan setiap hari");
  } else {
    console.log("tidak makan sama sekali");
  }
} else {
  console.log("aku akan sakit");
}

// Switch case

let pilihan = "F";

switch (pilihan) {
  case "F":
    console.log("F");
    break;
  case "G":
    console.log("G");
    break;
  default:
    console.log("null");
}
console.log(pilihan);

// for statemen

for (let i = 0; i <= 70; i++) {
  console.log("nilai " + i);
}

//While, do while

let h = 0;
while (h <= 40) {
  console.log("while" + h);
  h++;
}

let z = 10;
do {
  console.log("nilai " + z);
  z -= 5;
} while (z >= 15);

// function

function latihanThrow(x, y) {
  if (y == 0) {
    throw new Error("eror");
  }
  return x / y;
}
try {
  let hasil = latihanThrow(40, 5);
  console.log("nilai " + hasilBagi);
} catch (error) {
  console.log("");
}