function addElement() {
    const name = document.getElementById("name").value;
    
    var profiles = document.getElementsByName("profile");
    let selectedProfiles = "";
    for (let i = 0; i <= profiles.length; i++) {
        if (profiles[i].checked) {
            selectedProfiles += profiles[i].value;
            break
        }
    }
    
    var gender = document.getElementsByName("gender");
    let selectedGender = "";
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break
        }
    }
    
    var departments = document.getElementsByName("department");
    let selectedDepartments = ""
    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            selectedDepartments += departments[i].value +" " ;
        } 
    }
    
    const salary = document.getElementById("salary").value
    

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    const date = day+"-"+month+"-"+year;
    const note = document.getElementById("note").value;

    const userInput = {
        "fName":name,
        "profile": selectedProfiles,
        "gender":selectedGender,
        "department":selectedDepartments,
        "salary":salary,
        "date":date,
        "note":note
    }

    console.log(userInput);
    

    $.ajax({
        url:"http://localhost:3000/posts",
        type:"post",
        dataType:"json",
        data:userInput,
        success:function (data) {
            console.log(data);
        },
        error:function(error) {
            console.log(error);
        }
    })
}