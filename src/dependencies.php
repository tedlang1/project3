<?php

use Symfony\Component\Translation\Translator;
use Symfony\Component\Translation\MessageSelector;
use Symfony\Component\Translation\Loader\YamlFileLoader;
use Symfony\Bridge\Twig\Extension\TranslationExtension;

$translator = new Translator('fr', new MessageSelector());
$translator->addLoader('yaml', new YamlFileLoader());
$translator->addResource('yaml', __DIR__.'/../locale/core.fr.yml', 'fr');

$container = $app->getContainer();

$container['view'] = function ($container) use ($translator) {
    $view = new \Slim\Views\Twig(__DIR__."/../view", [
        //'cache' => '../cache' // à réactiver
    ]);
    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new \Slim\Views\TwigExtension($container['router'], $basePath));
    $view->addExtension(new TranslationExtension($translator));

    return $view;
};

$container['flash'] = function () {
    return new \Slim\Flash\Messages();
};
