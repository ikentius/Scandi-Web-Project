<?php

include_once '../Model/database.php';

//validation classes, i hope errors that are mentioned will help in
//undersating of what i wanted to validate in data
class BaseValidator extends Database
{
    private $data;
    private $errors = [];
    private $isNone;
    public function __construct($post_data)
    {
        $this->data = $post_data;
    }

    private function validateSKU()
    {
        $value = $this->data['sku'];
        $stmt = $this->pdo->prepare("SELECT * FROM items WHERE sku IN (:sku)");
        $stmt->bindValue(':sku', $value);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $this->addError('sku', 'Such SKU already exists');
        } else if (empty($value)) {
            $this->addError('sku', 'SKU cannot be empty');
        }
    }
    private function validateName()
    {
        $value = $this->data['name'];
        $stmt = $this->pdo->prepare("SELECT * FROM items WHERE name IN (:name)");
        $stmt->bindValue(':name', $value);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $this->addError('name', 'Same name exists');
        } else
        if (empty($value)) {
            $this->addError('name', 'Give item a name');
        }
    }

    private function validatePrice()
    {
        $value = $this->data['price'];
        if (empty($value)) {
            $this->addError('price', "If stuff is for free enter 0.00");
        } else {
            if (!preg_match('/[+]?[0-9]*\.?[0-9]{2}+/', $value)) {
                $this->addError('price', "Provide positive with two decimal precision if necessary");
            }
        }
    }
    private function validateType()
    {
        $value = $this->data['type'];
        if ($value == 'None') {
            $this->addError('type', "Please select item type");
            $this->isNone = true;
        }
    }
    private function validateParams()
    {
        if ($this->isNone) {
            return false;
        } else {
            foreach ($this->data['params'] as $key => $value) {
                if (empty($value)) {
                    $this->addError('params' . $key, "You can't leave empty  field ");
                } else {
                    if (!preg_match('/^\d+$/', $value)) {
                        $this->addError('params' . $key, " Provide additional parameter as whole number");
                    }
                }
            }
        }
    }
    private function addError($key, $val)
    {
        $this->errors[$key] = $val;
    }
    public function validateForm()
    {
        $this->connectDB();
        $this->validateSKU();
        $this->validatePrice();
        $this->validateName();
        $this->validateType();
        $this->validateParams();

        return $this->errors;
    }
}
