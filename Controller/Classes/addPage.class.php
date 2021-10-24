<?php
require('Validation/base_validation.php');
spl_autoload_register('autoLoad');

function autoLoad($className)
{
    $path = '../Model/';
    $fullPath = $path . $className . '.php';
    include_once $fullPath;
}

class addPageController
{


    public function getFormData()
    {
        $json = file_get_contents('../Assets/forms.json');
        echo $json;
    }
    public function sendItem($post_data)
    {
        $errors = [];
        $success = [
            "success" => "arrividerci"
        ];
        $validation = new BaseValidator($post_data);
        $errors = $validation->validateForm();
        if (empty($errors)) {
            //instance where i dynamically call a model class of item
            //because setItem is executed differently for each item, i don't need conditionals
            $prefix = 'Model_';
            $classInstance = $prefix . $post_data['type'];
            $model = new $classInstance($post_data);
            $model->setItem();
            echo json_encode($success);
        } else {
            //send errors to client side 
            echo json_encode($errors);
        }
    }
}
