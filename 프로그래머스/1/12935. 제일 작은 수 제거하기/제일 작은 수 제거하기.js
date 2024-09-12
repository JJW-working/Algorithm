function solution(arr) {
    var answer = arr.filter((value) => {
     return value > Math.min(...arr)
    });
    
     if(answer.length == 0) {
      answer.push(-1);
    }
    return answer;
}