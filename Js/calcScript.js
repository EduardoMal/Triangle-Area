//Triangle Area Calculator
//s=(a+b+c)/2
//area=math.sqrt(s*(s-a)*(s-b)*(s-c))

function calc(){
    let a= document.getElementById("a").value;
    let b= document.getElementById("b").value;
    let c= document.getElementById("c").value;

    let s= a/2+b/2+c/2;

    let area= Math.sqrt(s*(s-a)*(s-b)*(s-c));

    document.getElementById("Answer").value = area;
}