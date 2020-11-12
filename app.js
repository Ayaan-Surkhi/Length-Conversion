const form = document.querySelector('.form');
const centimeterInput = document.getElementById('centimeter-input');
const meterInput = document.getElementById('meter-input');
const feetInput = document.getElementById('feet-input');
let centimeterInputValue = centimeterInput.value;
let meterInputValue = meterInput.value;
let feetInputValue = feetInput.value;

    const convertcentimeter = () => {
        centimeterInput.addEventListener('input', (e) => {
        let value = e.target.value;    
        meterInputValue = value / 100; 
        feetInputValue = value / 30.48;

        // check to see if integer or decimal
        if(Number.isInteger(meterInputValue)){
        meterInput.value = meterInputValue;
        }else{
        meterInput.value = meterInputValue.toFixed(2);
        }

        if(Number.isInteger(feetInputValue)){
            feetInput.value = feetInputValue;
            }else{
            feetInput.value = feetInputValue.toFixed(2);
            }    
    })
    };


    // Convert meter
    const convertmeter = () => {
        meterInput.addEventListener('input', (e) => {
        let value = e.target.value;    
        centimeterInputValue = value * 100; 
        feetInputValue = value * 3.28084;
    
        // check to see if integer or decimal
        if(Number.isInteger(centimeterInputValue)){
        centimeterInput.value = centimeterInputValue;
        }else{
        centimeterInput.value = centimeterInputValue.toFixed(2);
        }
    
        if(Number.isInteger(feetInputValue)){
            feetInput.value = feetInputValue;
            }else{
            feetInput.value = feetInputValue.toFixed(2);
            }    
    })
    };

    // Convert feet
    const convertfeet = () => {
        feetInput.addEventListener('input', (e) => {
            let value = e.target.value;    
            meterInputValue = value * 0.3048; 
            centimeterInputValue = value * 30.48;
        
            // check to see if integer or decimal
            if(Number.isInteger(meterInputValue)){
            meterInput.value = meterInputValue;
            }else{
            meterInput.value = meterInputValue.toFixed(2);
            }
        
            if(Number.isInteger(centimeterInputValue)){
                centimeterInput.value = centimeterInputValue;
                }else{
                centimeterInput.value = centimeterInputValue.toFixed(2);
                }    
        })
        };

convertcentimeter();
convertmeter();
convertfeet();