// Создай переменную accumulator и собери в ней все имена, которые начинаются на букву "а".
let arr = ['akhmed', 'asadin', 'mansur', 'iznaur', 'zurab', 'mohmad', 'asus', 'lenovo', 'alvi', 'rasul']
let accumulator = []
for(let i = 0; i < arr.length; i++){
    if(arr[i][0] == 'a'){
        accumulator.push(arr[i])
    }
}
console.log(accumulator)