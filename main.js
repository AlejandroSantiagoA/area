function buscarArea(num){
    var num = parseInt(document.getElementById("num").value);
    let area = 1
    for(let i=1; i <= num; i++){
        const x = (4*i)-4
        area += + x
    }
    document.getElementById("resultado").value = area;
}

