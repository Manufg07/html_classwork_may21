function Display_text(){
    let x=document.getElementById("text").value;
    let y=document.getElementById("num").value;
    document.getElementById("demo").innerHTML=x;
    document.getElementById("dem").innerHTML=y;
    document.getElementById("tpe").innerHTML=typeof(x);
    document.getElementById("tp").innerHTML=typeof(y);
}