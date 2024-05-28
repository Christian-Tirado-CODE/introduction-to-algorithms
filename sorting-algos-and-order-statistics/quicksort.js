// 1st practice session(30 min.)
function quicksort(A, p, r){

    

    const p = partition(A, 1, n);

    quicksort(A, p, q);
    quicksort(A, q + 1, r);

};

function partition(A, p, r){
    const x = A[r];

   let i = p - 1; 

    for(let j = p; j < r; j++){
        if(A[j] <= x){
            i++;
         // swap elements.
        }
    }

    //return pivot;
}

// Practice the partition method.