/******************
 * case on arrays *
 ******************/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr = [arr1, arr2];
console.log(arr);

arr = [...arr1, ...arr2];
console.log(arr);

/******************
 * case on object *
 ******************/
const username = { firstName: "Pramudia", lastName: "Pamungakas" };
const contact = {
  address: "Bandung",
  email: "pramudia@email.com",
  phoneNumber: "081234412398",
};

const user = { ...username, contact };
console.log(user);
