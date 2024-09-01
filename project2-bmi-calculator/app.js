function calculatefnc() {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('results');
    let guide = document.querySelector('.guide');

    // Validation for height
    if (isNaN(height) || height <= 0) {
        result.innerHTML = `${height}`;
        guide.innerHTML = " Please provide a valid height in cm";
        return;
    }

    // Validation for weight
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `${weight}`;
        guide.innerHTML = "Please provide a valid weight in kg";
        return;
    }

    // If inputs are valid, calculate BMI
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Display the result
    if (bmi < 18.6) {
        guide.innerHTML = "Oops you are under Weight";
    }
    if (bmi > 24.9) {
        guide.innerHTML = "Oops you are Over Weight";
    }
    if (bmi>=18.6 && bmi<=24.9) {
        guide.innerHTML = "Congrats!! you are Normal Weighted";
    }
    result.innerHTML = `Your BMI is ${bmi}.`;
}