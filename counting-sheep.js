/*const sumOf = function(list){
    if(list.length === 1){
        return list[0];
    }
    return list[0] + sumOf(list.slice(1));
}

let lst = [2,4,6,8,10];
console.log(sumOf(lst));*/

//input : 3
//output :
//3: Another sheep jumps over the fence
//2: Another sheep jumps over the fence
//1: Another sheep jumps over the fence
//All sheep jumped over the fence

const countingSheep = function (count) {
  console.log(count);
  if (count === 0) {
    console.log("All sheep jumped over the fence");
    //return ; //break point
    return;
  }
  console.log(`${count} : Another sheep jumps over the fence`);
  countingSheep(count - 1);
};

countingSheep(3);
