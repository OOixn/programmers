function solution(n)
{ let arr = n.toString().split("");
 let answer = 0;
    for(let i = 0; i < arr.length; i++){
        answer += parseInt(arr[i]);
    }

    return answer;
}