$(document).ready(function() {
  var SearchString = window.location.search.substring(1);
   var image_data;

    $.ajax({
        url: url.partner+SearchString+"/"
    }).then(function(data) {
       $('#Discard').click(function(){window.location.assign("Customer.html?"+SearchString)}); 
      function previewFile() {
              var preview = document.querySelector('img');
              var file    = document.querySelector('input[type=file]').files[0];
              var reader  = new FileReader();
              reader.addEventListener("load", function () {
                preview.src = reader.result;
                //document.querySelector('p[class=greeting-content]').innerHTML=reader.result;
                localStorage.setItem("imgData", reader.result);
              }, false);

              if (file) {
                reader.readAsDataURL(file);
              }
            }          
            document.getElementById("fileselect").addEventListener("change", previewFile);
    	//for(var i=0;i<data.length;i++){
       $('[id=display_name]').attr('value',data.display_name);
       $('[id=company_id]').attr('value',data.company_id);
       $('[id=functions]').attr('value',data.functions);
       $('[id=street]').attr('value',data.street);
       $('[id=street2]').attr('value',data.street2);
       $('[id=edit_city]').attr('value',data.city);
       $('[id=edit_state]').attr('value',data.state);
       $('[id=edit_zip]').attr('value',data.zip);
       $('[id=edit_country]').attr('value',data.country);
       $('[id=edit_website]').attr('value',data.website);
       $('[id=edit_phone]').attr('value',data.phone);
       $('[id=edit_mobile]').attr('value',data.mobile);
       $('[id=edit_fax]').attr('value',data.fax);
       $('[id=edit_email]').attr('value',data.email);
       
       console.log(data.lang);
       if(data.lang=="USEnglish"){
            $('[id=USEnglish]').prop('selected',true);
          }else{
            $('[id=UKEnglish]').prop('selected',true);
          }
       $('[id=edit_title]').attr('value',data.title);
       $('#commend').append(data.commend);
       $('[id=ref]').attr('value',data.ref);
       $('[id=edit_tags]').attr('value',data.category_id);
       $('#cityandcountry').append(data.city+"&nbsp;"+data.country);
          if(data.customer){
            $('[id=customer]').prop('checked',true);
          }
          if(data.supplier){
            $('[id=supplier]').prop('checked',true);
          }
          
          $('[id=saleperson]').attr('value',data.user_id);
          
          if(data.notify_email=="never"){
            
            $('[id=noti_never]').prop('checked',true);
          }else{
              $('[id=noti_all]').prop('checked',true);
          }
          if(data.property_product_pricelist=="USdollar"){
            $('[id=USdollar]').prop('selected',true);
          }else{
            $('[id=kyat]').prop('selected',true);
          }
          if(data.property_purchase_currency_id=="USdollar"){
            $('[id=cu_USdollar]').prop('selected',true);
          }else{
            $('[id=cu_kyat]').prop('selected',true);
          }
          
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
          
          $('[id=edit_tot_receive]').attr('value',data.credit);

          
          if(data.property_supplier_payment_term_id=="cash"){
            $('[id=sup-cash]').prop('selected',true);
          }else{
            $('[id=sup_installment]').prop('selected',true);
          }
          
          $('[id=edit_tot_payable]').attr('value',data.debit);
          
          $('[id=property_account_position_id]').append(data.property_account_position_id);
          $('[id=edit_acc_receivable]').attr('value',data.property_account_receivable_id);
          $('[id=edit_acc_payable]').attr('value',data.property_account_payable_id);
          console.log(data.image);
          if(data.image==null){
            $('[id=image]').append("<img src='vendor/datatables/images/images.png' width='150' height='150' alt='userprofile.jpg'>");
          }else{
            $('[id=image]').append("<img src="+data.image+" width='150' height='150' alt='userprofile.jpg'>");
          }
    });
    $("#Save").click(function(){   
                    var image_data = localStorage.getItem('imgData');
                    //console.log(image_data);            
                    var display_name = document.getElementById("display_name").value;
                    var image = image_data;
                    //console.log(image); 
                    var company_id = document.getElementById("company_id").value;
                    var street = document.getElementById("street").value;
                    var street2 = document.getElementById("street2").value;
                    var city = document.getElementById("edit_city").value;
                    var state = document.getElementById("edit_state").value;
                    var zip = document.getElementById("edit_zip").value;
                    var country = document.getElementById("edit_country").value;
                    var website = document.getElementById("edit_website").value;
                    var functions = document.getElementById("functions").value;
                    var phone = document.getElementById("edit_phone").value;
                    var mobile = document.getElementById("edit_mobile").value;
                    var fax = document.getElementById("edit_fax").value;
                    var email = document.getElementById("edit_email").value;
                    var title = document.getElementById("edit_title").value;
                    var lang = $("#edit_lang option:selected").val();
                    var category_id = document.getElementById("edit_tags").value;
                    var commend = document.getElementById("commend").value;
                    var ref = document.getElementById("ref").value;
                    if ($('[id=customer]').is(":checked")){
                     var customer = true;   
                    }else{
                     var customer = false; 
                    }
                    if ($('[id=supplier]').is(":checked")){
                     var supplier = true;   
                    }else{
                     var supplier = false; 
                    }
                    var user_id = document.getElementById("saleperson").value;
                    var property_product_pricelist = $("#property_product_pricelist option:selected").val();
                    var property_purchase_currency_id = $("#property_purchase_currency_id option:selected").val();
                    if ($('#noti_never').is(":checked")){
                      var notify_email = 'never';   
                    }else{
                      var notify_email = 'allmessages';  
                    } 
                    var property_stock_customer = $("#property_stock_customer option:selected").val();
                    var property_stock_supplier = $("#property_stock_supplier option:selected").val();
                    var property_payment_term_id = $("#property_payment_term_id option:selected").val();
                    var property_supplier_payment_term_id = $("#property_supplier_payment_term_id option:selected").val();
                    var credit = document.getElementById("edit_tot_receive").value;
                    var debit = document.getElementById("edit_tot_payable").value;
                    var property_account_position_id = null;
                    var property_account_receivable_id = document.getElementById("edit_acc_receivable").value;
                    var property_account_payable_id = document.getElementById("edit_acc_payable").value

                    //console.log(property_stock_supplier);
                    var data = {
                                    "display_name": display_name,
                                    "image":null,
                                    "company_id":company_id,
                                    "street":street,
                                    "street2":street2,
                                    "city":city,
                                    "state":state,
                                    "zip":zip,
                                    "country":country,
                                    "website":website,
                                    "functions":functions,
                                    "phone":phone,
                                    "mobile":mobile,
                                    "fax":fax,
                                    "email":email,
                                    "title":title,
                                    "lang":lang,
                                    "category_id":category_id,
                                    "commend":commend,
                                    "ref":ref,
                                    "customer":customer,
                                    "supplier":supplier,
                                    "user_id":user_id,
                                    "property_product_pricelist":property_product_pricelist,
                                    "property_purchase_currency_id":property_purchase_currency_id,
                                    "notify_email":notify_email,
                                    "property_stock_customer":property_stock_customer,
                                    "property_stock_supplier":property_stock_supplier,
                                    "property_payment_term_id":property_payment_term_id,
                                    "property_supplier_payment_term_id":property_supplier_payment_term_id,
                                    "credit":credit,
                                    "debit":debit,
                                    "property_account_position_id":property_account_position_id,
                                    "property_account_receivable_id":property_account_receivable_id,
                                    "property_account_payable_id":property_account_payable_id,
                                }
                                console.log(JSON.stringify(data));
                       $.ajax({
                        type    : 'PUT',
                        contentType : 'application/json; charset=utf-8',
                        url     : url.partner+SearchString+"/",
                        data    : JSON.stringify(data),
                        dataType:'json',
                        success: function(data){
                            alert("success! Partner Edited");
                            window.location.assign("Customer.html?"+SearchString)
                        }
                    });
               });
});

