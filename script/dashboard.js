$(() =>{
    $.ajax({
        url: "http://localhost:3000/employee",
        type: "GET",
        dataType: "json",
       
        success: function (data) {
            console.log(data);
            employeeData(data);
        },
        error: function (error) {
            console.error( error);
        }
    });

})

function employeeData(data) {
    const table = $('table');

    $.each(data, (index,employee)=>{
        const row = $('<tr>')
        row.append($('<td>').css({
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'gap':'20px',
          }).append(
            $('<img>').attr('src', employee.profile)
            .css({'height' :' 40px',
             'width':"40px",
             "background": "transparent url('img/Ellipse 1.png') 0% 0% no-repeat padding-box",
        
        }),
            $('<span>').text(employee.fName)
        ));
        row.append(`<td>${employee.gender}</td>`);
        row.append(`<td>${employee.department}</td>`);
        row.append(`<td>₹ ${employee.salary}</td>`);
        row.append(`<td>${employee.date}</td>`);
        row.append('<td><i class="fas fa-edit edit-icon"></i>  <i class="fas fa-trash delete-icon"></i></td>');
        table.append(row)

    })
    
};