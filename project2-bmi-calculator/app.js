function calculatefnc() {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('results');

    // Validation for height
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Please provide a valid height in cm--> ${height}`;
        return;
    }

    // Validation for weight
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please provide a valid weight in kg--> ${weight}`;
        return;
    }

    // If inputs are valid, calculate BMI
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Display the result
    result.innerHTML = `Your BMI is ${bmi}.`;
}