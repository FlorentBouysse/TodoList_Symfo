<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_front_main')]
    public function index(): Response
    {
        return $this->render('front/main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
