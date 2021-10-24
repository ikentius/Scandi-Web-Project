<?php
class Database
{

    private $servername;
    private $username;
    private $password;
    private $dbname;
    public  $pdo;

    public function connectDB()
    {
        $this->servername = "localhost";
        $this->username = "id17824528_irakliberidze";
        $this->password = "r8e+p2r(o@Z7ZQq!";
        $this->dbname = "id17824528_scandiwebtask";
        try {
            $dsn = "mysql:host=" . $this->servername . ";dbname=" . $this->dbname;
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Somethings wrong I can feel it" . $e->getMessage();
        }
    }
}
