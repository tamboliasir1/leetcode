var canConstruct = function (ransomNote, magazine) {
    chars = {}
    for (char of ransomNote) {
        if (magazine.includes(char)) {
            if (chars[char] === undefined) {
                chars[char] = ransomNote.split(char).length - 1
            }
        }
        else {
            return false
        }
    }
    flag = true
    doneCharArray = []
    for (char of magazine) {
        if(!doneCharArray.includes(char)){
            doneCharArray.push(char)
            charCount = magazine.split(char).length - 1
            if (chars[char]==undefined ||chars[char] <= charCount) {
                continue
            }
            else {
                flag = false
                break
            }
        }
        
    }
    return flag
};

console.log(canConstruct("aa", "aab"))