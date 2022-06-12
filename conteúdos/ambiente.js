let num = [5, 8, 2, 9, 3 ]
console.log(`Nosso vetor é o ${num} `);
console.log(`O vetor tem ${num.length} posições `);
console.log(`O primeiro valor do vetor é ${num[0]} `);
num.push(1);
num.sort();

//
console.log(`Nosso vetor em ordem crescente é ${num} `);

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]} `);
}
