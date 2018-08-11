
window.onload = () => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var screenValue = 0;
    var screen = document.getElementById('screen');
    screenValue = parseFloat(screen.innerHTML);
    var numbersToCalc = 0;

    // Print number on screen
    var numbers = document.getElementsByClassName('number');
    for(let i = 0; i < numbers.length; i++) {
        
        numbers[i].onclick = (e) => {
            
            var number = e.target.innerHTML;
            
            if(screenValue === 0) {
                
                if(number == "0") {
                    return;
                }

                screen.innerHTML = "";
                numbersToCalc = number;
                screenValue = number;

            } else {
                
                numbersToCalc += number;
                screenValue += number;
            }

            screen.innerHTML = numbersToCalc;
            console.log("Numbers to calculate: "+ parseFloat(numbersToCalc));
            console.log("Screen value: "+ screenValue);
        };
    }

    // Add dot to number
    var dot = document.getElementById('dot');
    dot.onclick = (e) => {
        var dot = e.target.innerHTML;
        if(numbersToCalc.toString().includes(".")) {
            return;
        } 
        if(numbersToCalc === 0) {
            numbersToCalc = "0"+dot;
            screenValue = "0"+dot;
        } else {
            numbersToCalc = numbersToCalc+dot;
            screenValue = numbersToCalc+dot;
        }
        screen.innerHTML = numbersToCalc;
    }

    // Clear screen
    var clear = document.getElementById('clear');
    clear.onclick = (e) => {
        screen.innerHTML = "0";
        numbersToCalc = 0;
        screenValue = 0;
    }
    
}