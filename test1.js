const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
    s.forEach((v, i) => {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] > s[j]) {
                [s[i],s[j]] = [s[j],s[i]]
            }
        }
    })
    return s;
}

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
console.log(editInPlace());