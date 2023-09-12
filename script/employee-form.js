// var formId = document.getElementsByClassName('form-element');

const editId = parseInt(localStorage.getItem('setEditId'), 10);

const submitbtn = document.getElementById("submit");
const updatebtn = document.getElementById("update");


if (editId) {
    console.log("editing mode");
    submitbtn.style.display = "none";
    updatebtn.style.display = "block";

    //retrive deta
    $.ajax({
        url: `http://localhost:3000/employee/${editId}`,
        method: "GET",
        dataType: "json",
        success: function (data) {
            // binding data from input
            $("#name").val(data.fName);

            $(`input[name="profile"][value="${data.profile}"]`).prop("checked", true);

            $(`input[name="gender"][value="${data.gender}"]`).prop("checked", true);

            $.each(data.department, function (_, department) {
                $(`input[name="department"][value="${department}"]`).prop("checked", true);
            });

            $("#salary").val(data.salary);

            const dateParts = data.date.split(" ");
            $("#day").val(dateParts[0]);
            $("#month").val(dateParts[1]);
            $("#year").val(dateParts[2]);

            $("#note").val(data.note);
        },
        error: function (error) {
            console.error("Failed to fetch employee data:", error);
        }
    });
}
else {
    console.log("Adding mode");
    submitbtn.style.display = "block";
    updatebtn.style.display = "none";
   
}

function updateElement() {

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
    let selectedDepartments = [];
    let count = 0;
    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            selectedDepartments[count] = departments[i].value;
            count++;
        }
    }

    const salary = document.getElementById("salary").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    const date = day + " " + month + " " + year;
    const note = document.getElementById("note").value;


    const updateInput = {
        "fName": name,
        "profile": selectedProfiles,
        "gender": selectedGender,
        "department": selectedDepartments,
        "salary": salary,
        "date": date,
        "note": note
    }

    console.log(updateInput);
    $.ajax({
        type: "PUT",
        url: `http://localhost:3000/employee/${editId}`,
        contentType: "application/json",
        data: JSON.stringify(updateInput),
        success: function (updateInput) {
            console.log(updateInput);
        },
        error: function (error) {
            console.error(error);
        }
    });

}



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
    let selectedDepartments = [];
    let count = 0;
    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            selectedDepartments[count] = departments[i].value;
            count++;
        }
    }

    const salary = document.getElementById("salary").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    const date = day + " " + month + " " + year;
    const note = document.getElementById("note").value;

    const userInput = {
        "fName": name,
        "profile": selectedProfiles,
        "gender": selectedGender,
        "department": selectedDepartments,
        "salary": salary,
        "date": date,
        "note": note
    }

    console.log(userInput);
    $.ajax({

        type: "POST",
        url: "http://localhost:3000/employee",
        contentType: "application/json",
        data: JSON.stringify(userInput),
        success: function (userInput) {
            console.log(userInput);
            // localStorage.removeItem("setEditId");
        },
        error: function (error) {
            console.error(error);
        }
    });

    
}

