export default function addition(text: string):string{
    const numbers = text.split("plus").map((number) => parseInt(number))
    let sum = 0
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i]
    }
    return sum.toString()
}
