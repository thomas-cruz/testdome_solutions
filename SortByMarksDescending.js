function sortByMarksDescending(jsonString) {
  // Yоur cоdе gоеs hеrе
  const arr = JSON.parse(jsonString);
  const sorted = arr
    .sort((a, b) => (b.mark - a.mark) || (a.name.localeCompare(b.name)));
  return JSON.stringify(sorted);
}

console.log(sortByMarksDescending('[{"name":"John","mark":85},{"name":"Alice","mark":90},{"name":"Bob","mark":88}]'));
