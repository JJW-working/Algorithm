function solution(num) {
    var answer = 0;
    for(i=0;i<500;i++){
        if(num%2 === 0 && num != 1){
            num = num/2
            answer++
        }
        else if(num%2 === 1 && num != 1){
            num = num*3 + 1
            answer++
        }
        else if(num === 1){
            return answer;
        }
        
    }
    return -1;
}