function changeFormat(paragraph) {
  // Write the code that goes here
  let paragraphArr = paragraph.split(" ");
  const regex = /(\d{0,3})-(\d{0,2})-(\d{0,4})/g;
  const matches = paragraph.match(regex);
  console.log('matches: ', matches)
  for (let i = 0; i < matches.length; i++) {
    const numberArr = matches[i].split('-');
    paragraph = paragraph.replace(matches[i], `${numberArr[0]}/${numberArr[2]}/${numberArr[1]}`)
  }
  return paragraph;
}

console.log(changeFormat("Your long-term policy number are 112-39-8552, trdcxccfvygbhunyg ygvbyguhnyg 112-49-8552, and 112-59-8552."));
