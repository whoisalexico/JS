let temperature = {
    Deustchland: 16,
    Canada: 13,
    Brasil: 22,
    Austria: 15,
    Ukraine: 18
}
let sum = 0, ammount = 0
for (a in temperature)
{
    sum+=temperature[a]
    ammount++
}
sum/=ammount
console.log('Average temperature:: ' + sum)
function maxtemperature(b)
{
    let max = 0
    for (let a in b)
    {
        if (max < b[a]) max = b[a]
    }
    return max
}
let max = maxtemperature(temperature)
console.log('Max temperature:: ' + max)