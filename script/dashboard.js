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
        row.attr('data-id', employee.id);
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
 
        
        row.append('<td><i class="fas fa-edit edit-icon" data-id="' + employee.id + '"></i>  <i class="fas fa-trash delete-icon"></i></td>');
        table.append(row)

        $('table').on('click', '.edit-icon', function () {
            const employeeId = $(this).data('id');
            updateElement(employeeId);
            
        });
    
    }) 
    deleteEmployee(table);

};

function deleteEmployee(table){
    table.on('click','.delete-icon' ,function(){

        const row = $(this).closest('tr');
        const id = row.data('id');
    
        $.ajax({
            url: `http://localhost:3000/employee/${id}`,
            type: "DELETE",
            success:function(){
                row.remove();
            },
            error:function(){
                console.error('Delete error:', error);
            },
        });
    });
}

function updateElement(id) {
    
    localStorage.setItem('setEditId', id);
    window.location.href = '/pages/employee_form.html'
    
}

