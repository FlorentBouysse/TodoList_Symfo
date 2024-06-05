<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\TodolistRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/user', name:'api_user_')]
class UserController extends AbstractController
{
    #[Route('/{id}/lists', name: 'userLists')]
    public function userLists($id, TodolistRepository $todolistRepository): JsonResponse
    {
        $lists = $todolistRepository->findByUserId($id);

        return $this->json($lists, Response::HTTP_OK, []);
    }
}
