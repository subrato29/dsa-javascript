
function longestPalindromicSubstring (string) {
    if (string === '') {
        return null;
    }
    if (string.length === 1) {
        return string;
    }
    let longest = string.substring(0, 1);
    for (let i = 0; i < string.length; i++) {
        let temp = helper(string, i - 1, i + 1);
        if(temp.length > longest.length) {
            longest = temp;
        }
        temp = helper (string, i - 1, i);
        if(temp.length > longest.length) {
            longest = temp;
        }
    }
    return longest;
}

function helper(string, left, right) {
    while (left >= 0 && right < string.length) {
        if (string.charAt(left) != string.charAt(right)) {
            break;
        }
        left--;
        right++;
    }
    return string.substring(left + 1, right);
}