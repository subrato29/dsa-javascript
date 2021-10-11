function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
      blueShirtHeights.sort((a, b) => b - a);
      
        let colorInFirstRow = '';
        if (redShirtHeights[0] < blueShirtHeights[0]) {
            colorInFirstRow = "BLUE";
        } else {
            colorInFirstRow = "RED";
        }
        while (redShirtHeights.length > 0 && blueShirtHeights.length > 0) {
            if (colorInFirstRow == "BLUE" && redShirtHeights.pop() >= blueShirtHeights.pop()) {
                return false;
            } else if (colorInFirstRow == "RED" && redShirtHeights.pop() <= blueShirtHeights.pop()) {
                return false;
            }
        }
        return true;
  }