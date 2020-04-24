function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    A.sort();
    console.log(A)

    for(var i=0;i<A.length-1;i++){
        
        if(A[i+1]-A[i]!=1){
            
            return A[i+1]-A[i]+A[i];
            
        }
        
        
    }
    var r=A[A.length-1]+1
    
    return r ;
    
}

console.log(solution([1, 3, 6, 4, 1, 2]))

/**For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1. */