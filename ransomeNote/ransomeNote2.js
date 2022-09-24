var canConstruct = function(ransomNote, magazine) {
    let mgzn = Array(26).fill(0);
       
    for(let i = 0; i < magazine.length; i++){
        let index = magazine.charCodeAt(i) - 97;
        mgzn[index]++;
    }

    console.log(mgzn)
    for(let i = 0; i < ransomNote.length; i++){
        let index = ransomNote.charCodeAt(i) - 97;
        if(mgzn[index] != 0){
            mgzn[index]--;
        }else{
            return false;
        }
    }
    console.log(mgzn)
    return true;
};

console.log(canConstruct("aab","baaa"))