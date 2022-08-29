//Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push()).
let arr = ['php', 'java', 'c++', 'css', 'python', 'javascript', 'c#', 'rust', 'go', 'swift']
let accumulator = []
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        accumulator.push(arr[i])
    }
}
  console.log(accumulator)