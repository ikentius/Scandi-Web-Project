<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: json/application');
require('Classes/addPage.class.php');

$controller = new addPageController();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $controller->getFormData();
}

if (isset($_POST['sku'])) {
    $controller->sendItem($_POST);
}
