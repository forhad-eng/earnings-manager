function getInput(id) {
    const input = document.getElementById(id);
    const inputText = input.value;
    const inputValue = parseInt(inputText);
    input.value = '';

    // empty field validation
    if (inputText == '') {
        alert(`${id.toUpperCase()} field is Empty!`);
        return;
    }
    // String validation
    if (!isNaN(inputValue)) {
        //Negative number validation
        if (inputValue < 0) {
            alert(`Please insert a Positive value in ${id.toUpperCase()} field`);
        } else {
            return inputValue;
        }
    } else {
        alert(`Can't be processed! String inserted in ${id.toUpperCase()} field`);
        return;
    }
}
//Calculate Button Event Handler
document.getElementById('calculate').addEventListener('click', function () {
    const income = getInput('income');
    const foodCost = getInput('food');
    const rentCost = getInput('rent');
    const clothesCost = getInput('clothes');
    const totalCost = foodCost + rentCost + clothesCost;

    //Total Cost vs Income Validation
    if (totalCost < income) {
        document.getElementById('total-expense').innerText = totalCost;
        document.getElementById('balance').innerText = income - totalCost;
    }
    if (totalCost > income) {
        alert('Sorry! Insufficient Income');
    }
})