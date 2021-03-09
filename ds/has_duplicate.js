
function hasDuplicates(n) {
  const duplicates = [];
  let counter = 0; // debug

  for (let outter = 0; outter < n.length; outter++) {
    for (let inner = 0; inner < n.length; inner++) {
      counter++; // debug

      if(outter === inner) continue;

      if(n[outter] === n[inner]) {
        return true;
      }
    }
  }

  console.log(`n: ${n.length}, counter: ${counter}`); // debug
  return false;
}

let arr = [3,4,5,6,42,51,7];
console.log(hasDuplicates(arr))