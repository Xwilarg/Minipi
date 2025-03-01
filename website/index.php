<?php

require_once "vendor/autoload.php";

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader(["templates"]);
$twig = new Environment($loader);

$minipi = json_decode(file_get_contents("data/minipi.json"), true);
$specials = json_decode(file_get_contents("data/specials.json"), true);
$speArray = [];

foreach(range('A','Z') as $v){
    $speArray[$v] = in_array($v, $specials);
}


$json = isset($_GET["json"]) && $_GET["json"] === "1";

if ($json) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        "minipi" => $minipi,
        "specials" => $speArray
    ]);
} else {
    echo $twig->render("index.html.twig", [
        "minipi" => $minipi,
        "specials" => $speArray
    ]);
}