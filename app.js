function checkEmptyObj(obj) {
  return JSON.stringify(obj) === "{}";
}

console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ name: "John", age: 30 })); // false
console.log(checkEmptyObj(null)); // false
console.log(checkEmptyObj([])); // false
console.log(checkEmptyObj(123)); // false
