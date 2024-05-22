function disp_certi(){
    let course = document.getElementById("course").value;
    let certi_id = document.getElementById("certi_id").value;
    let name = document.getElementById("name").value;
    let grade= document.getElementById("grade").value;
    let date = document.getElementById("date").value;

    localStorage.setItem("course",course);
    localStorage.setItem("certi_id",certi_id);
    localStorage.setItem("name",name);
    localStorage.setItem("grade",grade);
    localStorage.setItem("date",date);

    localStorage.getItem("course",course);
    localStorage.getItem("certi_id",certi_id);
    localStorage.getItem("name",name);
    localStorage.getItem("grade",grade);
    localStorage.getItem("date",date);

    // let z = `Course: ${course}\nCertificate ID: ${certi_id}\nName: ${name}\nGrade: ${grade}\nDate: ${date}`;

    
    console.log("Course:"+course+"\n"+"Certificate Id:"+certi_id+"\n"+"Name:"+name+"\n"+"Grade:"+grade+"\n"+"Date:"+date)
    document.write("Course:"+course+"<br>"+"Certificate Id:"+certi_id+"<br>"+"Name:"+name+"<br>"+"Grade:"+grade+"<br>"+"Date:"+date)
    // return false;
}
