function solution(pn) {
    var answer = pn.split("");
    for(i=0;i<answer.length-4;i++){
        answer[i]="*"
    }
    answer = answer.join("")
    return answer;
}