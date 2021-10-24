<?php
//class responsible for furnitures
class Model_Furniture extends Model_Base
{
    private $height;
    private $width;
    private $length;

    public function setHeight()
    {
        $this->height = $this->data['params'][0];
    }
    public function getHeight()
    {
        return $this->height;
    }


    public function setWidth()
    {
        $this->width =  $this->data['params'][1];
    }
    public function getWidth()
    {
        return $this->width;
    }

    public function setLength()
    {
        $this->length = $this->data['params'][2];
    }
    public function getLength()
    {
        return $this->length;
    }

    public function setParams()
    {
        $this->setHeight();
        $this->setWidth();
        $this->setLength();
    }
    public function setItem()
    {
        //when setting all data here, it will be easy to send items to database without
        //conditional checks by taking advantage of polymorphism
        $this->setAllBasics();
        $this->setParams();

        $addQuery = 'INSERT INTO items(sku, name, price, type, height, width, length) VALUES (:sku,:name,:price, :type,:height, :width, :length)';
        $query = $this->pdo->prepare($addQuery);
        $query->bindValue(':sku', $this->getSKU());
        $query->bindValue(':name', $this->getName());
        $query->bindValue(':price', $this->getPrice());
        $query->bindValue(':type', $this->getType());
        $query->bindValue(':height', $this->getHeight());
        $query->bindValue(':width', $this->getWidth());
        $query->bindValue(':length', $this->getLength());

        $query->execute();
    }
}
