// Write a javascript function find_largest to return the nth largest number
// in an arrayeg-
// given an array of integers- [3,45,6,7,23,5,7,8]
// find_largest(3) will return third largest number from the above array -
// which is 8.

function find_largest(nth)
{
    let nos=new Array (3,45,6,7,23,5,7,8)
    let b=nos.sort(function(a, b){return b-a})
    
    let max=nos.length
    if (nth>max || nth===0)
    {
        console.log("Enter Valid Input"); 
    }
    else
    {
        console.log(b[nth-1]);
    }
}
find_largest(3)
