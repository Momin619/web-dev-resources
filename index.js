const users = [
  { name: "Momin", age: 12 },
  { name: "Ali", age: 22 },
  { name: "Akbar", age: 27 },
  { name: "Ahsan", age: 18 },
  { name: "Tawab", age: 28 },
  { name: "Aslam", age: 29 },
];
console.table(users);

console.log(JSON.stringify(users, null, 2));
