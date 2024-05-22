function Display_name(){
    let x= document.getElementById("fname").value;
    let y= document.getElementById("lname").value;
    let a= document.getElementById("email").value;
    let b= document.getElementById("mobile").value;
    let c= document.getElementById("dob").value;
    z= x+" "+y+"<br>"+a+"<br>"+b+"<br>"+c
    values.push(z);
    document.getElementById("disp").innerHTML=values.join(" ");
}
