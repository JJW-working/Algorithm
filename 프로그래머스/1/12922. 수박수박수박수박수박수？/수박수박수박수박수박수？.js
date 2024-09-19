function solution(n) {
    var answer = '';
    for(i=0;i<n;i++){
        if(i%2===1){
            answer += '박'
        }
        else if(i%2===0){
            answer += '수'
        }
    }
    return answer;
}