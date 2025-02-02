function sumOf100evenNums()
{
    const nums = [];
    let sum = 0;
    for(let i = 0; i <= 100; i++)
    {
        nums[i] = i;
        if(i%2 == 0)
        { 
            sum += nums[i];
        }
    }
    console.log(sum);
}