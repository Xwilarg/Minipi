<?php

require_once "vendor/autoload.php";

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader(["templates"]);
$twig = new Environment($loader);

$minipi = json_decode(file_get_contents("data/minipi.json"), true);

echo $twig->render("index.html.twig", [
    "minipi" => $minipi
]);