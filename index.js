function calculatePrice(squares) {
    const pricePerSquare = 1.3;
    return (squares * pricePerSquare).toFixed(2);;
}

function handleCalculateButtonClicked() {
    const squares = parseInt(forma.kvadrat.value);

    if (isNaN(squares) || squares <= 0) {
        return;
    }

    forma.cijena.value = calculatePrice(squares);
}
