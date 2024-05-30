// 2nd practice session(11 min)
// Much more improvement than the first practice session.

function quicksort(A, p, r) {
    if(p >= r){
        return;
    }

    const q = partition(A, p, r);

    quicksort(A, p, q - 1);
    quicksort(A, q + 1, r);
}

function partition(A, p, r) {
      const x = A[r];

      let i = p - 1;

      for (let j = p; j < r; j++) {
          if(A[j] < x){
             i++;
             const temp = A[j];
             A[j] = A[i];
             A[i] = temp;
          }
      }
      A[i + 1] = x;

      return i;
}
