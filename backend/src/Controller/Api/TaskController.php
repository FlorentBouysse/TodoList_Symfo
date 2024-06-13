<?php

namespace App\Controller\Api;

use App\Entity\Task;
use App\Entity\Todolist;
use App\Repository\TaskRepository;
use App\Repository\TodolistRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/task', name: 'api_task_')]
class TaskController extends AbstractController
{
    /**
     * Road for get task with his category
     */
    #[Route('/{id}', name: 'show', methods:['GET'])]
    public function show(int $id, TaskRepository $taskRepository): Response
    {
        $task = $taskRepository->find($id);

        if(!isset($task)) {
            return new Response("Cette tâche n'existe pas", 400);
        }

        return $this->json($task, Response::HTTP_OK, [], ["groups" => "task"]);
    }

    /**
     * Road for create new task and link with his list
     */
    #[Route('/{listId}/create', name:'create', methods:["POST"])]
    public function create(EntityManagerInterface $entityManager,
                            Request $request,
                            int $listId)
    {
        $data = json_decode($request->getContent(), true);

        $list = $entityManager->getRepository(Todolist::class)->find($listId);
        if(!$list) {
            return new Response("Cette liste n'existe pas !", 400);
        }

        $task = new Task();
        $task->setName($data["name"]);
        $task->addTodolistId($list);

        $entityManager->persist($task);
        $entityManager->flush();

        return new Response("Tâche crée avec succès", 201);
    }

    /**
     * Road for update Task
     */
    #[Route('/{id}/update', name:"update", methods:["PUT"])]
    public function update(int $id, EntityManagerInterface $entityManager, Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $task = $entityManager->getRepository(Task::class)->find($id);

        if(!$task) {
            return new Response("Cette tâche n'existe pas", 400);
        }

        $task->setName($data["name"]);

        $entityManager->persist($task);
        $entityManager->flush();
        return new Response("Tâche modifier avec succès", 201);
    }

    /**
     * Road for delete task
     */
    #[Route('/{id}/delete', name:"delete", methods:["DELETE"])]
    public function delete(int $id, EntityManagerInterface $entityManager)
    {
        $task = $entityManager->getRepository(Task::class)->find($id);
        if(!$task) {
            return new Response("Cette tâche n'existe pas", 400);
        }

        $entityManager->remove($task);
        $entityManager->flush();
        return new Response("Tâche supprimer avec succès", 201);
    }
}
