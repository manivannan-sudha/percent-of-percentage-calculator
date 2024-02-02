function convert(){
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    // console.log(first.value)
    
    let pofp = (first.value/100) * (second.value/100);
    pofp = pofp*100;
    // console.log(pofp.toFixed(2));

    let result = document.getElementById('result');
    result.innerHTML = 'Percentage of percentage is ' + pofp.toFixed(2) + '%';
    first.value='';
    second.value='';
}