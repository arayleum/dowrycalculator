document.getElementById('calculateBtn').addEventListener('click', function() {
    
    let price = 100;
    
    
    const education = parseFloat(document.getElementById('education').value);
    price *= education;
    
    
    const familyNetWorth = parseFloat(document.getElementById('familyNetWorth').value);
    price *= familyNetWorth;
    
    
    const caste = parseInt(document.getElementById('caste').value);
    price += caste;
    
    
    if (document.getElementById('skill1').checked) price += 10;
    if (document.getElementById('skill2').checked) price += 20;
    if (document.getElementById('skill3').checked) price += 15;
    if (document.getElementById('skill4').checked) price += 10;
    
    
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);
    price *= age;
    
    if (document.getElementById('rep1').checked) price *= 0.85;
    if (document.getElementById('rep2').checked) price *= 0.9;
    if (document.getElementById('rep3').checked) price -= 20;
    
    
    price = Math.round(price * 100) / 100;
    
    
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `The groom's price is: $${price}`;
    resultDiv.style.display = 'block';
    
    
    if (price > 500) {
        resultDiv.style.backgroundColor = '#d4edda';
        resultDiv.style.color = '#155724';
    } else if (price > 200) {
        resultDiv.style.backgroundColor = '#fff3cd';
        resultDiv.style.color = '#856404';
    } else {
        resultDiv.style.backgroundColor = '#f8d7da';
        resultDiv.style.color = '#721c24';
    }
});