<?php

namespace App\Controller\Api;

use App\Entity\Todolist;
use App\Repository\TodolistRepository;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/list', name: 'api_list_')]
class ListController extends AbstractController
{
    /**
     * Road for get list with his tasks
     */
    #[Route('/{id}', name: 'show', methods:['GET'])]
    public function show($id, TodolistRepository $todolistRepository): Response
    {
        $list = $todolistRepository->find($id);
        return $this->json($list, Response::HTTP_OK, [], ["groups" => "list"]);
    }

    #[Route('/create', name:'create', methods:['POST'])]
    public function create(ManagerRegistry $managerRegistry,
                            Request $request,
                            TodolistRepository $todolistRepository,
                            UserRepository $userRepository)
    {
        // $entityManager will be used to persist data in the database
        $entityManager = $managerRegistry->getManager();
        $data = json_decode($request->getContent(), true);

        $user = $userRepository->find($data["userid"]);
        if(!isset($user)) {
            return new Response("Cette utilisateur n'existe pas", 400);
        }

        $todolist = new Todolist();
        $todolist->setName($data["name"]);
        $todolist->setUserid($user);
        
        $entityManager->persist($todolist);
        $entityManager->flush();
        return new Response("Liste créé avec succès !", 201);
    }
}
