var arr = [2,34,2,5,6,9,8,4,34,67,6,54,8,-1,-23,-1,99];

var newArr = [];

for(let i=0;i<arr.length;i++){
  if(arr.indexOf(arr[i])===i){
      newArr.push(arr[i]);
  }
}

console.log(newArr);