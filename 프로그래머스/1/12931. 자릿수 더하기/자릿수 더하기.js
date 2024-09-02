function solution(n)
{
    var answer = 0;
    var str1 = String(n);
    var str2 = str1.split("");
    
    for(i=0; i<str2.length; i++){
        answer += +str2[i]
    }

    return answer;
}