var string = "test";

//number
var so = 2;
var arr=[1,2,3];
//ob
var ob ={
    "key1": 3,
    "key2":[1,2,3],
    "key":"sssss"
}
function test(arr) {
    console.log(this.string)
    this.arr.forEach( x => {
        console.log(x)
    });
}
