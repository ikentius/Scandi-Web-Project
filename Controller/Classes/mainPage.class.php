<?php
include_once '../Model/database.php';
class mainPageController extends Database
{
    public function __construct()
    {
        $this->connectDB();
    }
    public function sendAllItems()
    {
        //send all items after request for front end application
        $query = 'SELECT * FROM items';
        $stmnt = $this->pdo->prepare($query);
        $stmnt->execute();
        $result = $stmnt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
    }
    public function deleteItems()
    {
        //nums here basically provides all necessary ? marks for query
        $nums = str_repeat("?,", count($_POST['checkboxes']) - 1) . '?';
        $stmnt = $this->pdo->prepare("DELETE FROM items WHERE id IN ($nums)");
        $stmnt->execute($_POST['checkboxes']);
        $success = [
            "success" => "arrividerci"
        ];
        echo json_encode($success);
    }
}
