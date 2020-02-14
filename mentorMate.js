function validateNumber(number) {
    if(typeof number !== 'number'){
        console.log('Please enter numbers only!');
    }else if (1 > number || number > 10000 || number % 2 === 0) {
        console.log('Please enter odd number in the range (2,10000)!');
    } else {
        printMentorMateLogo(number);
    }
}
function printMentorMateLogo(n) {
    let star = "*";
    let dash = "-";
    let linesCounter = n + 1;
    let decreasingElementOneStep = n;
    let decreasingElementTwoSteps = n;
    let increasingElementTwoSteps = n;
    for (let i = 1; i <= linesCounter / 2; i++) { // prints the lines above the middile  of M
        console.log((dash.repeat(decreasingElementOneStep) +
            star.repeat(increasingElementTwoSteps) +
            dash.repeat(decreasingElementTwoSteps) +
            star.repeat(increasingElementTwoSteps) +
            dash.repeat(decreasingElementOneStep)).repeat(2));
        increasingElementTwoSteps += 2;
        decreasingElementOneStep -= 1;
        decreasingElementTwoSteps -= 2;
    }
    [increasingElementTwoSteps, decreasingElementTwoSteps] = [decreasingElementTwoSteps, increasingElementTwoSteps] // swapping the logic of the elements

    for (let i = linesCounter / 2; i <= n; i++) { // prints the lines  below the middle of M
        increasingElementTwoSteps += 2;
        decreasingElementTwoSteps -= 2;
        console.log((dash.repeat(decreasingElementOneStep) +
            star.repeat(n) + // stable element
            dash.repeat(increasingElementTwoSteps) +
            star.repeat(decreasingElementTwoSteps) +
            dash.repeat(increasingElementTwoSteps) +
            star.repeat(n) + // stable element
            dash.repeat(decreasingElementOneStep)).repeat(2));
        decreasingElementOneStep -= 1; 
    }
}
validateNumber(7);
