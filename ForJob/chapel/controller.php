<?php

    require_once("db.php");

    if (isset($_POST["nameInfo"],$_POST["lastNameInfo"],$_POST["brthInfo"],$_POST["emailInfo"],$_POST["phoneInfo"])) {
        $nameInfo = $_POST["nameInfo"];
        $lastNameInfo = $_POST["lastNameInfo"];
        $brthInfo = $_POST["brthInfo"];
        $emailInfo = $_POST["emailInfo"];
        $phoneInfo = $_POST["phoneInfo"];

        $rows = [];
        $sql = "INSERT INTO job(`name`, `lastName`, `brthDay`, `email`, `phone`) VALUES('$nameInfo', '$lastNameInfo', '$brthInfo', '$emailInfo', '$phoneInfo')";
        if($result = mysqli_query($conn, $sql))
        {
            // echo $conn->insert_id;
            $sql2 = "SELECT * FROM job WHERE id=" . $conn->insert_id;
            if($result2 = mysqli_query($conn, $sql2))    
            {
                while ($row = mysqli_fetch_assoc($result2)) {
                    $rows[] = $row;
                }

                echo json_encode($rows);

            }
        }

        else
        {
            echo $sql."eeeeeee ";
        }

    }

    if(isset($_POST["dbID"], $_POST["delStrok"])){
        $idDel = $_POST["dbID"];
        $sqlDel = "DELETE FROM job WHERE id='$idDel' ";
        if($result = mysqli_query($conn, $sqlDel))
        {
            echo "remove " . $sqlDel;
        }
    }

    if(isset($_POST["idUpdate"], $_POST["saveName"], $_POST["saveLastName"], $_POST["saveDateSave"], $_POST["saveEmail"], $_POST["savePhone"])){
        $idUpdate = $_POST["idUpdate"];
        $saveName = $_POST["saveName"];
        $saveLastName = $_POST["saveLastName"];
        $saveDateSave = $_POST["saveDateSave"];
        $saveEmail = $_POST["saveEmail"];
        $savePhone = $_POST["savePhone"];

        $sql = "UPDATE job SET `name`='$saveName', `lastName`='$saveLastName', `brthDay`='$saveDateSave', `email`='$saveEmail', `phone`='$savePhone' WHERE id='$idUpdate'";
        if($result = mysqli_query($conn, $sql))
        {
            echo "Updated";
        }
    
    }
?>