<?php
    require_once("chapel/db.php");

    $rows = []; 

    $sqlAll = "SELECT * FROM job";
    $rows = [];
    if($results = mysqli_query($conn, $sqlAll))
    {
        if(mysqli_num_rows($results)>0){
            while( $res = mysqli_fetch_assoc($results) )
            {
                $rows[$res['id']]= $res;
            }
            
        }
    }
    // print_r($rows);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class='container'>
        <div class='col-md-12 'formAdd>
            <form method="post" action="javascript:void(0)">
                <label for='name' class='labelFor'>Name</label>
                <input type="text" id='name' class='inpName form-control' min="3" placeholder='Name'>
                <label for='lastName' class='labelFor'>Last name</label>
                <input type="text" id='lastName' class='inpLastName form-control' min="3" placeholder='Last name'>
                <label for='brthDay' class='labelFor'>Birthday</label>
                <input type="date" id ='brthDay' class='inpBrth form-control'>
                <label for='email' class='labelFor'>Email</label>
                <input type="email" id='email' class='inpMail form-control' placeholder='Email'>
                <label for='myform_phone' class='labelFor'>Phone</label>
                <input type="tel" class='inpPhone form-control' id="myform_phone" name="phone" pattern="[0-9]{3}[0-9]{3}-[0-9]{4}" required placeholder="(999) 999-9999"/>
                <button type='button' class='btnPostInfo btn btn-primary'>Add Info</button>
            </form>
        </div>
    </div>
    <div class='container-fluid containerTable'>
        <div class='col-md-12'>
            <table class='infoTable'>
                <thead class='headerThead'>
                    <tr class='headerTable'>
                        <td class='tdHead'>Name</td>
                        <td class='tdHead'>Last Name</td>
                        <td class='tdHead'>Brth date</td>
                        <td class='tdHead'>Email</td>
                        <td class='tdHead'>Phone</td>
                        <td class='tdHead'>#</td>
                    </tr>
                </thead>
                <tbody class='tbodyInfo'>
                    <?php
                        foreach ($rows as $key => $value) {
                            echo "<tr id = '".$key."'>
                                <td id='nameTD'>".$value["name"]."</td>
                                <td id='lastNameTD'>".$value["lastName"]."</td>
                                <td id='brthDayTD'>".$value["brthDay"]."</td>
                                <td id='emailTD'>".$value["email"]."</td>
                                <td id='phoneTD'>".$value["phone"]."</td>
                                <td class='tdEditDel'><i class='fa fa-pencil editRow' aria-hidden='true'></i><i class='fa fa-close delRow'></i></td>
                            </tr>";
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>

    
    
    

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>






