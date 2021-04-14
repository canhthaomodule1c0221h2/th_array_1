let x =0;
let array =[];
function getElemenbyadd(){
    array [x] = document.getElementById("txt").value;
    alert("elemen" + x);
    x++
    document.getElementById("txt").value;
}
function getElemenbydisplay(){
    let e = "<hr/>"
    for (let i = 0; i<array.length; i++){
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;

}