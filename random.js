

let genrateRandomNo = function(){
    let randmNo = Math.random() * 6 + 1
    let newNo = Math.floor(randmNo)
    console.log(newNo)

    document.getElementById("place").innerHTML = newNo;

}
let resetRandomNo = function(){
    document.getElementById("place").innerHTML = 'X';
}