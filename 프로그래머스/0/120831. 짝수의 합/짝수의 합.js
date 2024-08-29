function solution(n) {
    var answer = 0;
    for(i = 0; i <= n; i++){
        if(0 == i%2) answer += i;
    }
    return answer;
}