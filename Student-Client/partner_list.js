$(document).ready(function() {
    $.ajax({
        url: url.partner
    }).then(function(data) {
        console.log(data.length)
       for (var i = 0; i < data.length; i++) {
          //console.log(data[i]);
            var tr = $('<tr/>');
            $(tr).append("<td><input type='checkbox' id='customer' value="+data[i].id+" class='customer'></td>");
            $(tr).append("<td><a href='Customer.html?"+data[i].id+"'>" + data[i].display_name+data[i].company_id+"</a></td>");
            $(tr).append("<td><a href='Customer.html?"+data[i].id+"'>" + data[i].website + "</td>");
            $(tr).append("<td><a href='Customer.html?"+data[i].id+"'>" + data[i].street+data[i].street2+ data[i].city+data[i].state+data[i].country + "</td>");
            $(tr).append("<td><a href='Customer.html?"+data[i].id+"'>" + data[i].phone + "</td>");
            $(tr).append("<td><a href='Customer.html?"+data[i].id+"'>" + data[i].email + "</td>");
            $('#table11').append(tr);
         }
         $('#table1').DataTable({
                            responsive: true
                        });
    });

     function deleteing(arry){
        $.ajax({
                    type    : 'DELETE',
                    contentType : 'application/json; charset=utf-8',
                    url     : url.partner+arry+"/",
                    dataType:'json',
                    success: function(data){
                    alert("successfully deleted the partner");
                    window.location.assign("Customer_list.html")
                         }
                    });
    }

     $('#DeleteCheckedCustomer').click(function(){
          var arr = $('#customer:checked').map(function(){
                return this.value;
            }).get();
        console.log(arr);
        for(var i=0;i<arr.length;i++){
            deleteing(arr[i]);
        }
    });

     $('#partnerselectall').click(function(){
        $('.customer').prop('checked', this.checked);
    });

});

