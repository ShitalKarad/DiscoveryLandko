function addElement() {
    console.log("hello");
    const name = document.getElementById("name").value;
    console.log(name);

    var profiles = document.getElementsByName("profile");
    let selectedProfiles = "";
    for (let i = 0; i <= profiles.length; i++) {
        if (profiles[i].checked) {
            selectedProfiles += profiles[i].value;
            break
        }
    }
    console.log(selectedProfiles);

    var gender = document.getElementsByName("gender");
    let selectedGender = "";
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break
        }
    }
    console.log(selectedGender);

    var departments = document.getElementsByName("department");
    let selectedDepartments = ""
    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            selectedDepartments += departments[i].value +" " ;
        }
        
    }
    console.log(selectedDepartments);
    const salary = document.getElementById("salary").value
    console.log(salary);

    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    const date = day+"-"+month+"-"+"year";
    console.log(date);
    
    const note = document.getElementById("note").value;
    console.log(note);

}