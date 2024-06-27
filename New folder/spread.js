// const a = [
//   {
//     name: "noman",
//     phn: 0,
//     cnic: 352,
//     education: [
//       {
//         name: "bsit",
//         cgpa: 3.0,
//       },
//       {
//         name: "inter",
//         cgpa: 3.0,
//       },
//     ],
//   },
// ];

// const b = [...a];
// console.log(typeof b);

// console.log("Original array a:", b);

// let u = ["name", "phn", "cnic"];
// let [name, phn, cnic] = ["usman", "0341484", "3574216348"];

// console.log(name, phn, cnic);

// let u = ["name", "phn", "cnic"];
// let [a, b, c] = u;
// console.log(u);

// let e = {
//   name: "usman",
//   phn: "465465",
//   cnic: "44755",
// };

// let { n, p, c } = e;
// console.log(e);

const person = [
  {
    name: "usman",
    phn: "021654",
    cnic: "546854",
    education: [
      {
        degree: "bsit",
        gpa: "3.2",
      },
      {
        degree: "bscs",
        gpa: "3.5",
      },
      {
        degree: "bs-Physics",
        gpa: "3.0",
      },
    ],
  },
  {
    name: "Ali",
    phn: "021552524",
    cnic: "0005524",
  },
  {
    name: "Zohaib",
    phn: "000000",
    cnic: "245451231",
  },
];
console.log(person);
const b = JSON.parse(JSON.stringify(person));

b[0].education[2].degree = "BS-Ecnomics";
b[0].education[1].cgpa = "2.81";
b[2].name = "tajmul";
b[2].phn = "03329080400";

console.log(b);
console.log(person);
