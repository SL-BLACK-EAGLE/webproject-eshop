<?php

class Database{
    public static $connection;
    public static function setUpConnection(){
        if (!isset(Database::$connection)){
            Database::$connection= new mysqli("localhost", "root", "Chathuhansika@2017", "eshop-db", "3306");
        }
    }

    public static function iud($query){
        Database::setUpConnection();
        Database::$connection->query($query);
    }
    public static function search($query){
        Database::setUpConnection();
        return Database::$connection->query($query);
    }
}
