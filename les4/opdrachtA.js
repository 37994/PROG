for (
    let number1 = 0, number2 = 1;
    number2 < 10000000000;
    [number1, number2] = [number2, number1 + number2]
) {
    console.log(number2)
}
