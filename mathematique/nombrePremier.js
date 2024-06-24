const estPremier = (n) => {
    return n <= 1 ? `${n} n'est pas premier` :
           n === 2 ? `${n} est premier` :
           n % 2 === 0 ? `${n} n'est pas premier` :
           !Array.from({ length: Math.floor(Math.sqrt(n)) - 1 }, (_, i) => 2 * i + 3)
            .every(i => n % i !== 0) ? `${n} n'est pas premier` :
           `${n} est premier`;
}

/*function estPremier(n) {
    if (n <= 1) {
        return `${n} n'est pas premier`;
    }
    if (n === 2) {
        return `${n} est premier`; 
    }
    if (n % 2 === 0) {
        return `${n} n'est pas premier`;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return `${n} n'est pas premier`;
        }
    }
    return `${n} est  premier`;
} */
// Exemple 
console.log(estPremier(5));