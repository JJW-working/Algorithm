function solution(arr, div) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % div == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}