let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, "empty", "empty"];
console.log(arrays);

delete arrays[1];
console.log(arrays);

arrays.splice(3, 5);
console.log(arrays);

arrays.splice(0, 0, 0);
console.log(arrays);

arrays.splice(2, 1, "empty");
console.log(arrays);
