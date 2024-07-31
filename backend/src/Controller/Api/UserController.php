<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\TodolistRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/user', name:'api_user_')]
class UserController extends AbstractController
{
    /**
     * Road for get user with his lists and tasks
     */
    #[Route('/{email}', name: 'byEmail')]
    public function byEmail($email, UserRepository $userRepository): JsonResponse
    {
        $user = $userRepository->findOneByEmail($email);
        if(!$user) {
            return new Response("Cette utilisateur n'existe pas", 400);
        }
        return $this->json($user, Response::HTTP_OK, [], ["groups" => "user"]);
    }
}
