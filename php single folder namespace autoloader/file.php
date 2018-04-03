<?php

//just add or include at beginning of execution

//Autoload magic
spl_autoload_register(function ($class_name) {

    $class_name = end(explode(DIRECTORY_SEPARATOR, $class_name));
    
    include $class_name . '.php';
});