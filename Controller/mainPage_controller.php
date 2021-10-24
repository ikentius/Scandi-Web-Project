<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: json/application');
include_once 'Classes/mainPage.class.php';

$controller = new mainPageController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $controller->sendAllItems();
}
if (isset($_POST['checkboxes'])) {
    $controller->deleteItems();
}
