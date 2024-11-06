//Mudei o nome da função so pra testar commit
function soumteste(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}

const x = [1, 2, 3, 4, 5, 6];
const y = soumteste(x);
console.log(y);
