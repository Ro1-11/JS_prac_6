/*Write a program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

function computeDash(num1)
{

  let num=num1.toString()
  let num_array=num.split("")
  let array_index=[]
  for(let i=0;i<num_array.length-1;i++)
  {   
    if (parseInt(num_array[i],10)%2==0 && parseInt(num_array[i+1],10)%2==0)
    {
      num_array.splice(i+1,0,"-")
    }
  }
  let result=num_array.join("")
  console.log(result)
}
computeDash(25468)
