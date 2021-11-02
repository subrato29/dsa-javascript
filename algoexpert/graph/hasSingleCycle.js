function hasSingleCycle(array) {
    let currentIdx = 0;
      let visistedIdx = 0;
        while (visistedIdx < array.length) {
          if (visistedIdx > 0 && currentIdx == 0) {
              return false;
          }
        visistedIdx++;
        currentIdx = getNextIdx (currentIdx, array);
      }
    return currentIdx == 0;
  }
  
function getNextIdx (currentIdx, array) {
    const jump = array[currentIdx];
    const nextIdx = (currentIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
  