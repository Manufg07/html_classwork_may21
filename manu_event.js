function Display_name(){
    let x= document.getElementById("fname").value;
    let y= document.getElementById("lname").value;
    z= x+" "+y
    values.push(z);
    document.getElementById("disp").innerHTML=values.join(",");
}