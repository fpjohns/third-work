//Ниже напиши цикл for, который выводит в консоль всё четные числа.

//Еще ниже напиши цикл while, который выводит в консоль все нечетные числа.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])

    }
}

let i = 0
while(i < arr.length){
    if(arr[i] % 2 != 0){
        console.log(arr[i])
    }
    i++
}
