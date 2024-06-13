<?php

namespace App\Controller\Api;

use App\Repository\TaskRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/task', name: 'api_task_')]
class TaskController extends AbstractController
{
    #[Route('/{id}', name: 'show')]
    public function show($id, TaskRepository $taskRepository): Response
    {
        $task = $taskRepository->find($id);

        if(!isset($task)) {
            return new Response("Cette tâche n'existe pas", 400);
        }

        return $this->json($task, Response::HTTP_OK, [], ["groups" => "task"]);
    }
}
