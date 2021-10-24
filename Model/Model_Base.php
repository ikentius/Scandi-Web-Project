<?php

abstract class Model_Base extends Database
{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $data;

    public function __construct($post_data)
    {
        $this->data = $post_data;
        $this->connectDB();
    }


    public function setSKU()
    {
        $this->sku = $this->data['sku'];
    }
    public function getSKU()
    {
        return $this->sku;
    }


    public function setName()
    {
        $this->name = $this->data['name'];
    }
    public function getName()
    {
        return $this->name;
    }


    public function setType()
    {
        $this->type = $this->data['type'];
    }
    public function getType()
    {
        return $this->type;
    }


    public function setPrice()
    {
        $this->price = $this->data['price'];
    }
    public function getPrice()
    {
        return $this->price;
    }
    public function setAllBasics()
    {
        $this->setSKU();
        $this->setName();
        $this->setType();
        $this->setPrice();
    }
    abstract public function setParams();
    abstract public function setItem();
}
