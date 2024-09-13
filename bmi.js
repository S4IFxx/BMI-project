document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // converting cm to meters
    var bmi = weight / (height * height);
    

    document.getElementById('bmi-value').textContent = `Your BMI: ${bmi.toFixed(2)}`;
    
    
    let category;
   
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmi-category').textContent = `Category: ${category}`;
});
