//2nd session(20 min).

function parent(i){
    return Math.floor(i/2);
}

function left(i){
    return 2*i;
}

function right(i){
   return (2*i) + 1;
}

function max_heapify(A, i){
    const l = left(i);
    const r = right(i);
    let largest;
    if(l <= A.heap_size && A[l] > A[i]){
        largest = l;
    } else if(r <= A.heap_size && A[r] > A[i]) {
        largest = r;
    } else {
        largest = i;
    }

    if(largest !== i){
        const temp = A[i];
        A[i] = A[largest];
        A[largest] = temp;
        
        max_heapify(A, largest);
    }
}

function build_max_heap(A, n){
    for (let i = Math.floor(n/2); i > 0; i--) {
        A.heap_size++;
        max_heapify(A, i);
    }
}

function heapsort(A, n){
    build_max_heap(A, n);
    for (let i = n; i > 1; i--) {
        let temp = A[i];
        A[i] = A[1];
        A[1] = temp;
        A.heap_size--;
    }
}