var fizzBuzz = function(n) {
    let answer = []
    for(i=1;i<=n;i++){
        switch(true){
            case(i%3==0 &&i%5==0):
                answer.push("FizzBuzz")
                break;
            case(i%3==0):
                answer.push("Fizz")
                break;
            case(i%5==0):
                answer.push("Buzz")
                break;
            default:
                answer.push(String(i))
        }
    }

    return answer
};

console.log(fizzBuzz(10))