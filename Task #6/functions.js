function divisibleBy3()
{
    console.log("Divisible by 3");
    const nums = [];
    for(let i=0; i<100; i++)
    {
        nums.push(i);
    }        
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i]%3 == 0)
        {
            nums.splice(i,1);
        }
    }
    console.log(nums);
}
function addNums()
{
    console.log("0-150");
    const nums = [];
    for(let i=0; i<100; i++)
    {
        nums.push(i);
    }
    for(let i = nums.length; i<150; i++)
    {
        nums.push(i);
    }
    console.log(nums);
}
function addThree()
{
    console.log("Adding 3");
    const nums = [];
    for(let i=0; i<100; i++)
    {
        nums.push(i);
    }
    for(let i=0; i<nums.length; i++)
    {
        nums[i] += 3;
    }
    console.log(nums);
}
function printSpecificIndex()
{
    console.log("[20-40]");
    const nums = [];
    for(let i=0; i<100; i++)
    {
        nums.push(i);
    }
    console.log(nums.slice(20,41));
}
function shuffle()
{
    console.log("Shuffling..");
    const nums = [];
    for(let i=0; i<100; i++)
    {
        nums.push(i);
    }
    for(let i = nums.length-1; i>0; i--)
    {
        let j = Math.floor(Math.random() * (i+1));
        [nums[i],nums[j]] = [nums[j], nums[i]];
    }
    console.log(nums);
    nums.sort(function(a,b) {return b-a;});
    console.log("Sorted Descendingly");
    console.log(nums);
    
}