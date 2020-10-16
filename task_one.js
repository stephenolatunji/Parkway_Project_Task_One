warnTheDeveoper = (n, m, s) => {
// let n =  Number of Developers, let m =  Number of Candies, let s =  Seat to start from
    let x = s-1;
    for (let i = 1; i <= m; i++) {      
        (x < n)? x++ : x = 1;
    };
    showResult(n, m, s, x);
}

showResult = (n, m, s, x) => {
    document.getElementById("table").rows[1].cells[1].innerHTML = n;
    document.getElementById("table").rows[1].cells[2].innerHTML = m;
    document.getElementById("table").rows[1].cells[3].innerHTML = s;
    document.getElementById("table").rows[1].cells[4].innerHTML = x;
}