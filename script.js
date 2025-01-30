function calculateRisk() {
    const age = document.getElementById("age").value;
    const familyHistory = document.getElementById("familyHistory").value;
    const cognitiveScore = document.getElementById("cognitiveScore").value;
    const lifestyle = document.getElementById("lifestyle").value;
  
    
    let riskScore = 0;
    if ( !age || !familyHistory || !cognitiveScore||!lifestyle) {
        alert('Please fill in all the fields before submitting.');
        return; // Stop further execution
      }
  
      if (age <= 0) {
        alert('Please enter a valid age (positive number).');
        return;
      }

      if (cognitiveScore >= 0 && cognitiveScore <= 30) {
        // This block will execute if the score is between 0 and 30 (inclusive)
        console.log("Cognitive score is within the range.");
      } else {
        // This block will execute if the score is outside of the range
        alert ("Cognitive score is outside the valid range.");
      }
    
    if (age > 65) riskScore += 2;
    if (familyHistory === "Yes") riskScore += 3;
    if (cognitiveScore < 20) riskScore += 5;
    if (lifestyle === "Sedentary") riskScore += 2;
  
    let riskLevel = "";
    let color = "";
  
    if (riskScore >= 8) {
      riskLevel = "High Risk";
      color = "red";
    } else if (riskScore >= 4) {
      riskLevel = "Moderate Risk";
      color = "orange";
    } else {
      riskLevel = "Low Risk";
      color = "green";
    }
  
    document.getElementById("result").innerHTML = `
      <h3 style="color: ${color};">Your Risk Level: ${riskLevel}</h3>
      <p>Please consult a healthcare professional for further advice.</p>
    `;
  }
  