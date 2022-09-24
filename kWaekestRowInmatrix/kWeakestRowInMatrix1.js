var kWeakestRows = function(mat, k) {
    let m = 0;
    let arr = []
    let weakArr= []
    while(m<mat.length){
        arr.push([m,mat[m].filter(val=>val==1).length])
        m++
    }

    let sorted = arr.sort((a, b) => {
        console.log(a,b)
        if (a[1] > b[1]) return 1;
        else if (a[1] < b[1]) return -1
        else return 0;
    })

    console.log(sorted)

    let res = [];
    
    let i = 0;
    while (k > 0) {
        res.push(sorted[i][0]);
        k--;
        i++;
    }
    
    console.log(res);

    return weakArr.slice(0,k)
};


mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]

console.log(kWeakestRows(mat,3))