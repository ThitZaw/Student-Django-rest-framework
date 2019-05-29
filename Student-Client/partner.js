$(document).ready(function() {
  var SearchString = window.location.search.substring(1);
    $.ajax({
        url: url.partner+SearchString+"/"
    }).then(function(data) {
       //$('#edit').attr('href',"Customer_edit.html?"+SearchString) 
       $('#edit').click(function(){window.location.assign("Customer_edit.html?"+SearchString)}); 
       $('#cancel').click(function(){window.location.assign("Customer_list.html")}); 

       $('#display_name').append(data.display_name+"&nbsp;"+data.company_id);
       $('#street').append(data.street);
       $('#street2').append(data.street2);
       $('#website').append(data.website);
       $('[id=phone]').append(data.phone);
       $('[id=mobile]').append(data.mobile);
       $('#fax').append(data.fax);
       $('#email').append(data.email);
       $('#lang').append(data.lang);
       $('#commend').append(data.commend);
       $('[id=ref]').attr('value',data.ref);
       $('#category_id').append(data.category_id);
       $('#cityandcountry').append(data.city+"&nbsp;"+data.country);
          if(data.customer){
            $('[id=customer]').prop('checked',true);
          }
          if(data.supplier){
            $('[id=supplier]').prop('checked',true);
          }
          
          $('[id=saleperson]').attr('value',data.user_id);
          
          if(data.notify_email=="never"){
            //console.log(data.notify_email);
            $('[id=noti_never]').prop('checked',true);
          }else{
              $('[id=noti_all]').prop('checked',true);
          }
          if(data.property_product_pricelist=="USdollar"){
            $('[id=USdollar]').prop('selected',true);
          }else{
            $('[id=kyat]').prop('selected',true);
          }
          //console.log(data.property_stock_customer)
          if(data.property_stock_customer=="Yangon"){
            $('[id=cus_Yangon]').prop('selected',true);
          }else{
            $('[id=cus_Mandalay]').prop('selected',true);
          }
          if(data.property_stock_supplier=="Yangon"){
            $('[id=sup_Yangon]').prop('selected',true);
          }else{
            $('[id=sup_Mandalay]').prop('selected',true);
          }
          if(data.property_payment_term_id=="cash"){
            $('[id=cus-cash]').prop('selected',true);
          }else{
            $('[id=cus_installment]').prop('selected',true);
          }
          $('[id=tot_receive]').append(data.credit);
          if(data.property_supplier_payment_term_id=="cash"){
            $('[id=sup-cash]').prop('selected',true);
          }else{
            $('[id=sup_installment]').prop('selected',true);
          }
          $('[id=tot_payable]').append(data.debit);
          $('[id=property_account_position_id]').append(data.property_account_position_id);
          $('[id=property_account_receivable_id]').append(data.property_account_receivable_id);
          $('[id=property_account_payable_id]').append(data.property_account_payable_id);
          if(data.image==null){
            //console.log("Not insert image!!!!");
            $('[id=image]').append("<img src='vendor/datatables/images/images.png' width='150' height='150' alt='userprofile.jpg'>");
          }else{
            $('[id=image]').append("<img src="+data.image+" width='150' height='150' alt='userprofile.jpg'>");
          }
       //$('#image').append("<img src="+data.image+" width='150' height='150' alt='userprofile.jpg'>");
   		//}
    });
    $("#Delete").click(function(){                       
                       $.ajax({
                        type    : 'DELETE',
                        contentType : 'application/json; charset=utf-8',
                        url     : url.partner+SearchString+"/",
                        dataType:'json',
                        success: function(data){
                            alert("success! Partner Deleted");
                            window.location.assign("Customer_list.html")
                        }
                    });
               });
});

