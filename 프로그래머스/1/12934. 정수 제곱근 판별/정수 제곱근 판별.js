function solution(n) {
    var answer = 0;
    for(i=0; i<=n;i ++){
        if(i*i === n){
            answer = (i+1)**2
            break;
        }
        else answer = -1
    }
    return answer;
}