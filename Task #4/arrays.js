function sumOf100Nums()
{
    const nums = [];
    let sum = 0;
    for(let i = 0; i <= 100; i++)
    {
        nums[i] = i;
        sum += nums[i];
    }
    console.log(sum);
}