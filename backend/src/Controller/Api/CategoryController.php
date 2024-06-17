<?php

namespace App\Controller\Api;

use App\Entity\Category;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/category', name: 'api_category_')]
class CategoryController extends AbstractController
{
    /**
     * Road for get category
     */
    #[Route('/{id}', name: 'show', methods:['GET'])]
    public function show(int $id, EntityManagerInterface $entityManager): Response
    {
        $category = $entityManager->getRepository(Category::class)->find($id);

        return $this->json($category, Response::HTTP_OK, [], ["groups" => "category"]);
    }

    /**
     * Road for create category
     */
    #[Route('/create', name:'create', methods:['POST'])]
    public function create(EntityManagerInterface $entityManager, Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $category = new Category();
        $category->setName($data["name"]);

        if(!$data["name"]) {
            return new Response("Name ne peut être null", 400);
        }

        $entityManager->persist($category);
        $entityManager->flush();
        return new Response("Catégorie créé avec succès !", 201);
    }

    /**
     * Road for update category
     */
    #[Route('/{id}/update', name:"update", methods:['PUT'])]
    public function update(int $id, EntityManagerInterface $entityManager, Request $request)
    {
        $category = $entityManager->getRepository(Category::class)->find($id);
        if(!$category) {
            return new Response("Cette catégorie n'existe pas", 400);
        }

        $data = json_decode($request->getContent(), true);
        if(!$data["name"]) {
            return new Response("Name ne peut être null", 400);
        }

        $category->setName($data["name"]);

        $entityManager->persist($category);
        $entityManager->flush();

        return new Response("Catégorie modifier avec succès", 201);
    }

    /**
     * Road for delete category
     */
    #[Route('/{id}/delete', name:'delete', methods:['DELETE'])]
    public function delete(int $id, EntityManagerInterface $entityManager)
    {
        $category = $entityManager->getRepository(Category::class)->find($id);
        if(!$category) {
            return new Response("Cette catégorie n'existe pas", 400);
        }

        $entityManager->remove($category);
        $entityManager->flush();
        return new Response("Catégorie supprimé avec succès", 204);
    }
}
