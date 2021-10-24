<?php
//class responsible for Books
class Model_Book extends Model_Base
{
    private $weight;


    public function setWeight()
    {
        $this->weight = $this->data['params'][0];
    }
    public function getWeight()
    {
        return $this->weight;
    }
    public function setParams()
    {
        $this->setWeight();
    }

    public function setItem()
    {
        //when setting all data here, it will be easy to send items to database without
        //conditional checks by taking advantage of polymorphism
        $this->setAllBasics();
        $this->setParams();

        $addQuery = 'INSERT INTO items(sku, name, price, type, weight) VALUES (:sku,:name,:price, :type, :weight)';
        $query = $this->pdo->prepare($addQuery);
        $query->bindValue(':sku', $this->getSKU());
        $query->bindValue(':name', $this->getName());
        $query->bindValue(':price', $this->getPrice());
        $query->bindValue(':type', $this->getType());
        $query->bindValue(':weight', $this->getWeight());

        $query->execute();
    }
}
