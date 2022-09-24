var maximumWealth = function(accounts) {
    accounts = accounts.map((banks)=>banks.reduce((a,b)=>a+b)).sort((a,b)=>b-a)
    return accounts[0]
};
console.log(maximumWealth( [[1,2,3],[3,2,1]]));