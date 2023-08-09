function calculatePrice(squares) {
  const pricePerSquare = 1.3;
  return (squares * pricePerSquare).toFixed(2);
}
function displayErrorMessage(message) {
  const forma = document.querySelector('.form-cijena');
  const kvadratInput = forma.querySelector('[name="kvadrat"]');
  const errorMessage = kvadratInput.nextElementSibling;

  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
  }
}
// eslint-disable-next-line no-unused-vars
function handleCalculateButtonClicked() {
  const forma = document.querySelector('.form-cijena');
  const kvadratInput = forma.querySelector('[name="kvadrat"]');
  const cijenaInput = forma.querySelector('[name="cijena"]');
  const squares = parseFloat(kvadratInput.value, 10);

  const errorMessage = kvadratInput.nextElementSibling;

  if (errorMessage) {
    errorMessage.textContent = '';
  }

  if (Number.isNaN(squares) || (squares <= 0) || (squares === '')) {
    displayErrorMessage('Unesite važeći broj!');
    return;
  }

  cijenaInput.value = calculatePrice(squares);
}
