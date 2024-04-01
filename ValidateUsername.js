function validate(username) {
  // Write the code that goes here
  if (username.length < 4) {
    return false;
  }
  const isMatch = username.match(/^(?!.*_.*_)[a-z]([\w\d_?])*(?<!_)$/i);
  return isMatch?.length ? true : false;
}

console.log(validate('Mike1_Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username
