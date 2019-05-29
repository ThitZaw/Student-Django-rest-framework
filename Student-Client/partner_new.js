$(document).ready(function() {
  //var SearchString = window.location.search.substring(1);
  $('#Discard').click(function(){
    window.location.assign("Customer_list.html")
  }); 
    $("#Save").click(function(){                       
                    var display_name = document.getElementById("create_display_name").value;
                    var image = null;
                    var company_id = document.getElementById("create_company").value;
                    var street = document.getElementById("street").value;
                    var street2 = document.getElementById("street2").value;
                    var city = document.getElementById("create_city").value;
                    var state = document.getElementById("create_state").value;
                    var zip = document.getElementById("create_zip").value;
                    var country = document.getElementById("create_country").value;
                    var website = document.getElementById("create_website").value;
                    var functions = document.getElementById("create_functions").value;
                    var phone = document.getElementById("create_phone").value;
                    var mobile = document.getElementById("create_mobile").value;
                    var fax = document.getElementById("create_fax").value;
                    var email = document.getElementById("create_email").value;
                    var title = document.getElementById("create_title").value;
                    var lang = $("#lang option:selected").val();
                    var category_id = document.getElementById("create_tags").value;
                    var commend = document.getElementById("commend").value;
                    var ref = document.getElementById("create_ref").value;
                    if ($('[id=create_customer]').is(":checked")){
                     var customer = true;   
                    }else{
                     var customer = false; 
                    }
                    if ($('[id=create_supplier]').is(":checked")){
                     var supplier = true;   
                    }else{
                     var supplier = false; 
                    }
                    var user_id = document.getElementById("saleperson").value;
                    var property_product_pricelist = $("#property_product_pricelist option:selected").val();
                    var property_purchase_currency_id = $("#property_purchase_currency_id option:selected").val();
                    if ($('#create_noti_never').is(":checked")){
                      var notify_email = 'never';   
                    }else{
                      var notify_email = 'allmessages';  
                    } 
                    var property_stock_customer = $("#property_stock_customer option:selected").val();
                    var property_stock_supplier = $("#property_stock_supplier option:selected").val();
                    var property_payment_term_id = $("#property_payment_term_id option:selected").val();
                    var property_supplier_payment_term_id = $("#property_supplier_payment_term_id option:selected").val();
                    var credit = document.getElementById("create_tot_receive").value;
                    var debit = document.getElementById("create_tot_payable").value;
                    var property_account_position_id = null;
                    var property_account_receivable_id = document.getElementById("create_acc_receivable").value;
                    var property_account_payable_id = document.getElementById("create_acc_payable").value

                    console.log(lang);
                    var data = {
                                    "display_name": display_name,
                                    "image":image,
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
                        type    : 'POST',
                        contentType : 'application/json; charset=utf-8',
                        url     : url.partner,
                        data    : JSON.stringify(data),
                        dataType:'json',
                        success: function(data){
                            alert("success! Partner Created");
                            window.location.assign("Customer_list.html")
                        }
                    });
               });
});

