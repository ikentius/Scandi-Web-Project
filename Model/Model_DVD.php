<?php
//Class responsible for DVDs
class Model_DVD extends Model_Base
{
    private $size;


    public function setSize()
    {
        $this->size = $this->data['params'][0];
    }
    public function getSize()
    {
        return $this->size;
    }
    public function setParams()
    {
        $this->setSize();
    }
    public function setItem()
    {
        //when setting all data here, it will be easy to send items to database without
        //conditional checks by taking advantage of polymorphism
        $this->setAllBasics();
        $this->setParams();

        $addQuery = 'INSERT INTO items(sku, name, price, type, size) VALUES (:sku,:name,:price, :type,:size)';
        $query = $this->pdo->prepare($addQuery);
        $query->bindValue(':sku', $this->getSKU());
        $query->bindValue(':name', $this->getName());
        $query->bindValue(':price', $this->getPrice());
        $query->bindValue(':type', $this->getType());
        $query->bindValue(':size', $this->getSize());

        $query->execute();
    }
}
