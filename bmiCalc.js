// Calculate Body Mass Index (BMI)
// English formula is
  // BMI = (Weight in Pounds / (Height in inches x Height in inches)) x 703
// Metric formula is
  //BMI = (Weight in Kilograms / (Height in Meters x Height in Meters))

let calcButton = document.getElementById('calculate');

const calculateBMI = function() {
  //Get Weight and store as variable
  let weight = prompt("what is your weight in lbs?");
  //Get height and store as variable
  let height = prompt("what is your height in inches?");
  //English Formula solution
  bmiEnglish = function (weight, height) {
    let engWeight = weight;
    let engHeight = (height * height);
    //window.alert(((engWeight / engHeight)*703).toFixed(2));
    let bmIndex = ((engWeight / engHeight)*703).toFixed(2);
    if (bmIndex <= 18.5) {
      window.alert('Your BMI index is: ' + bmIndex + '. Which is considered to be underweight.');
    } else if (bmIndex <= 25.0) {
      window.alert('Your BMI index is: ' + bmIndex + '. Which is considered normal.');
    } else if (bmIndex <= 30.0) {
      window.alert('Your BMI index is: ' + bmIndex + '. Which is considered to be overweight.');
    } else if (bmIndex > 30.0) {
      window.alert('Your BMI index is: ' + bmIndex + '. Which is considered to be obese.');
    } else if (bmIndex !== NaN) {
      window.alert('There seems to be an error. Please verify your information and try again');
    }
  };
  bmiEnglish(weight, height);
};


let runCalc = function (){
  calculateBMI();
};



calcButton.addEventListener('click', runCalc);
calcButton.addEventListener('touchend', runCalc);
//Determine BMI Classification
//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"
