export default function addition(text: string):string{
    const numbers = text.split("plus").map((number) => parseInt(number))
    let sum = 0
    for(const number of numbers){
        sum += number
    }
    return sum.toString()
}
