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