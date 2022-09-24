var search = function(nums, target) {
    start = 0
    end = nums.length-1
    
    while(start<=end){
        mid = parseInt((start+end)/2)
        if(target ==nums[mid]){
            return mid
        }else if(target<nums[mid]){
            end = mid-1
        }else{
            start = mid + 1
        }
    }

    return -1
};

console.log(search([-1,0,3,5,9,12],0))