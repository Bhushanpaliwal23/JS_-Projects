const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const conclussion = document.querySelector('#conclussion');

  let bmi;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Hight ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

  if (bmi < 18.6){
    conclussion.innerHTML = `<span>You fall in UnderWeight Catagory </span>`
  }
  else if (bmi >= 18.6 && bmi < 24.9){
    conclussion.innerHTML = `<span>You fall in Normal Catagory </span>`
  }
  else {
    conclussion.innerHTML = `<span>You fall in OverWeight Catagory </span>`
  }

});
