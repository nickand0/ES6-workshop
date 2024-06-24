
const fibonacci = (n, sequence = [0, 1]) => 
    n <= 1 ? sequence.slice(0, n) : 
    (sequence.length === n ? sequence : fibonacci(n, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]));
  
 
    console.log(fibonacci(6));

  
// function Fibonacci(n) {
//     if (n <= 0) {
//         return [];
//     }
//     if (n === 1) {
//         return [0];
//     }
//     let sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return `les sequences de fibonacci de ${n} sont:${sequence}`;
// }

// Exemple 
