let input = prompt(`Введите число`);
let total = 0;

for (let i = 0; input !== 0; i += 1) {
    if (input) {
        total += Number(input);
        input = prompt(`Введите число`);
    } else {
        break;
    }
}
alert(`Общая сумма чисел равна ${total}`);
