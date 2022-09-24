var maximumWealth = function(accounts) {
    max = 0
    rows = 0
    while(rows<accounts.length){
        sum = 0
        accounts[rows].filter(val=>sum+=val)
        if(sum>max){
            max=sum
        }
        rows+=1
    }
    return max
};
console.log(maximumWealth( [[1,2,3],[3,2,1]]));