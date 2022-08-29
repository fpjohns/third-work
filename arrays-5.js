//Ниже напиши цикл for, который выводит в консоль имена начинающиеся на букву "а".
let arr = ['akhmed', 'asadin', 'mansur', 'iznaur', 'zurab', 'mohmad', 'asus', 'lenovo', 'alvi', 'rasul']
for(let i = 0; i < arr.length; i++){
    if(arr[i][0] == 'a'){
        console.log(arr[i])
    }
}