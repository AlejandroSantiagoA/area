function buscarArea(n){
    let area = 1
    for(let i=1; i <= n; i++){
        const x= (4*i)-4
        area += + x
    }
    return area
    console.log(area);
}