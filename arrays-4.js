//Ниже напиши цикл while, который выводит в консоль все названия длиннее трёх символов.
let arr = ['php', 'java', 'c++', 'css', 'python', 'javascript', 'c#', 'rust', 'go', 'swift']
let i = 0
while(i < arr.length){
    if(arr[i].length > 3){
       console.log(arr[i])
      
    }
    i++
}