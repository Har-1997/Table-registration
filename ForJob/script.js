valid = {
    nameValid: (nameInfo)=>{
        if (nameInfo.length < 3) {
            alert("The name must be at least 3 characters long!");
            return false;
        }
    },
    lastNameValid: (lastNameInfo)=>{
        if(lastNameInfo.length < 2){
            alert("The last name must be at least 3 characters long!");
            return false;
        }
    },
    dateValid: (brthInfo)=>{
        if (brthInfo.length < 2) {
            alert("Fill in the date field");
            return false;
        }
    },
    emailValid: (emailInfo)=>{
        if(emailInfo.split("@").length <= 1){
            alert("Email does not match the correct format! 1");
            return false;
        }
        else if(emailInfo.split(".").length <= 1){
            alert("Email does not match the correct format! 2");
            return false;
        }

        let emailSuffixes = emailInfo.split(".");
        emailSuffixes = emailSuffixes[emailSuffixes.length-1];
        if (emailSuffixes !== "com" && emailSuffixes !== "ru") {
            alert("Email does not match the correct format! 3");
            return false;
        }

        let emailSuffixesTwo = emailInfo.split("@")[1];
        if (emailSuffixesTwo !== "gmail.com" && emailSuffixesTwo !== "mail.ru" && emailSuffixesTwo !== "inbox.ru" && emailSuffixesTwo !== "list.ru" && emailSuffixesTwo !== "bk.ru" && emailSuffixesTwo !== "internet.ru" && emailSuffixesTwo !== "yandex.ru" && emailSuffixesTwo !== "yahoo.com" && emailSuffixesTwo !== "hotmail.com" && emailSuffixesTwo !== "outlook.com") 
        {
            alert("Email does not match the correct format! 4");
            return false;
        }
    },
    phoneValid: (phoneInfo)=>{
        var format = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[-]?([0-9]{4})$/;
        if(phoneInfo===''){
            alert("Please Enter Phone Number")
            return false;
        }
        else if(phoneInfo.match(format)){
        }
        else{
            alert("Type using phone number in correct format!");
            return false;
        }
    }

}







$(document).on("click", ".btnPostInfo", function(e){
    e.stopImmediatePropagation();
    console.log("sexmeci")

    let nameInfo = $(".inpName").val();
    let lastNameInfo = $(".inpLastName").val();
    let brthInfo = $(".inpBrth").val();
    let emailInfo = $(".inpMail").val();
    let phoneInfo = $(".inpPhone").val();

    // validate name and last name

    if(valid.nameValid(nameInfo) == false)
        return false;
    
    if(valid.lastNameValid(lastNameInfo) == false)
        return false;

        console.log(brthInfo.length)

    // date validation    
    if(valid.dateValid(brthInfo) == false)
        return false;

    // email validation
    if (valid.emailValid(emailInfo) == false) 
        return false;

    // format for the phone number
    if (valid.phoneValid(phoneInfo) == false) 
        return false;


    $.ajax({
        "method": "POST",
        "url": "chapel/controller.php",
        "data": {"nameInfo": nameInfo, "lastNameInfo": lastNameInfo, "brthInfo": brthInfo, "emailInfo": emailInfo, "phoneInfo": phoneInfo},
        "success": (res)=>{
            console.log("res", JSON.parse(res));  
            let arrResult = JSON.parse(res);
            let result = arrResult[0];  
            let newTr = `<tr>
                <td id='nameTD'>>${result["name"]}</td>
                <td id='lastNameTD'>${result["lastName"]}</td>
                <td id='brthDayTD'>${result["brthDay"]}</td>
                <td id='emailTD'>${result["email"]}</td>
                <td id='phoneTD'>${result["phone"]}</td>
                <td class='tdEditDel'><i class='fa fa-pencil editRow' aria-hidden='true'></i><i class='fa fa-close delRow'></i></td>
            </tr>`        

            $(".tbodyInfo").append(newTr);
        }
    });
});


$(document).on("click", ".delRow", function(e){
    e.stopImmediatePropagation();
    let self = $(this);
    let dbId = self.closest("tr").attr("id");
    let thisTr = self.closest("tr");
    $(thisTr).remove();
    $.ajax({
        "method": "POST",
        "url": "chapel/controller.php",
        "data": {"dbID": dbId, "delStrok": 1},
        "success": (res)=>{
            console.log("res >>> ", res);
        }
    });
});


$(document).on("click", ".editRow", function(e){
    e.stopImmediatePropagation();
    
    let self = $(this);
    let dbId = self.closest("tr").attr("id");
    let thisTr = self.closest("tr");

    let nameVal = $(thisTr).find("#nameTD");
    let lastNameVal = $(thisTr).find("#lastNameTD");
    let brthDayTDVal = $(thisTr).find("#brthDayTD");
    let emailTDVal = $(thisTr).find("#emailTD");
    let phoneTDVal = $(thisTr).find("#phoneTD");

    console.log($("brthDayTDVal").html())
    $(thisTr).html("");

    let newEditInfo = `
        <td id='nameTD'><input type="text" id='nameEdit' class='inputTd form-control' placeholder='Name' value='${$(nameVal).html()}'></td>
        <td id='lastNameTD'><input type="text" id='lastNameEdit' class='inputTd form-control' placeholder='Last name' value='${$(lastNameVal).html()}'></td>
        <td id='brthDayTD'><input type="date" id='dateEdit' class='inputTd form-control' placeholder='Name' value='${$(brthDayTDVal).html()}'></td>
        <td id='emailTD'><input type="email" id='emailEdit' class='inputTd form-control' placeholder='Email' value='${$(emailTDVal).html()}'></td>
        <td id='phoneTD'><input type="tel" id='phoneEdit' class='inputTd form-control' min="10" placeholder='Phone' value='${$(phoneTDVal).html()}'></td>
        <td class='tdEditDel'><i class='fa fa-check saveRow'></i><i class='fa fa-close'></i></td>
    `
    $(thisTr).html(newEditInfo);

    $(self).css("display","none");
});

$(document).on("click", ".saveRow", function(e){
    e.stopImmediatePropagation();

    let selfSave = $(this);
    let idUpdate = selfSave.closest("tr").attr("id");

    let saveName = $("#nameEdit").val();
    let saveLastName = $("#lastNameEdit").val();
    let saveDateSave = $("#dateEdit").val();
    let saveEmail = $("#emailEdit").val();
    let savePhone = $("#phoneEdit").val();

    // validate name and last name

    if(valid.nameValid(saveName) == false)
    return false;

    if(valid.lastNameValid(saveLastName) == false)
        return false;

    // email validation
    if (valid.emailValid(saveEmail) == false) 
        return false;

    // format for the phone number
    if (valid.phoneValid(savePhone) == false) 
        return false;

    $.ajax({
        "method": "POST",
        "url": "chapel/controller.php",
        "data": {"idUpdate": idUpdate, "saveName": saveName, "saveLastName": saveLastName, "saveDateSave": saveDateSave, "saveEmail": saveEmail, "savePhone": savePhone},
        "success": (res)=>{
            console.log("res >>> ", res);
        }
    });    

    let trChangeInfo = selfSave.closest("tr");
    $(trChangeInfo).html("");

    let newInfoSave = `
        <td id='nameTD'>${saveName}</td>
        <td id='lastNameTD'>${saveLastName}</td>
        <td id='lastNameTD'>${saveDateSave}</td>
        <td id='emailTD'>${saveEmail}</td>
        <td id='phoneTD'>${savePhone}</td>
        <td class='tdEditDel'><i class='fa fa-pencil editRow' aria-hidden='true'></i><i class='fa fa-close delRow'></i></td>
    `;
    $(trChangeInfo).html(newInfoSave);

});









