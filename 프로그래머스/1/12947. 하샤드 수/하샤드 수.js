function solution(x) {
    var answer = String(x).split("").map(Number).reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    if(x%answer === 0) return true;
    else return false;
}