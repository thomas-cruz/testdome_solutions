function wrap (execute) {
  let isError = false
  // Return modified function
  // console.log('execute::', execute)
  return () => {
    if (isError) return null;
    try {
      const res = execute();
      return res;
    } catch (err) {
      isError = true;
      return null;
    } 
  }
}

var errorExec = wrap(function () {
  throw new Error('Error');
});
var resultExec = wrap(function () {
  return "Result";
});
console.log(typeof errorExec === "function" && errorExec()); // Should output null
console.log(typeof resultExec === "function" && resultExec()); // Should output "Result"
