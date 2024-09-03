function solution(n) {
    var answer = 0;
    var i = 0;
    while(answer === 0){
        if(n%i === 1){
            answer = i
        }
        i++;
    }
    return answer;
}