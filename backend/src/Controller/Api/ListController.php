<?php

namespace App\Controller\Api;

use App\Repository\TodolistRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/list', name: 'api_list')]
class ListController extends AbstractController
{
    #[Route('/{id}', name: 'show')]
    public function index($id, TodolistRepository $todolistRepository): Response
    {
        $list = $todolistRepository->find($id);
        return $this->json($list, Response::HTTP_OK, [], ["groups" => "list"]);
    }
}
