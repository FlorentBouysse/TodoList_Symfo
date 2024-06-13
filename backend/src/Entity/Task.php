<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
class Task
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["user", "list"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["user", "list"])]
    private ?string $name = null;

    /**
     * @var Collection<int, Category>
     */
    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'tasks')]
    #[Groups(["list"])]
    private Collection $categoryId;

    /**
     * @var Collection<int, Todolist>
     */
    #[ORM\ManyToMany(targetEntity: Todolist::class, inversedBy: 'tasks')]
    private Collection $TodolistId;

    public function __construct()
    {
        $this->categoryId = new ArrayCollection();
        $this->TodolistId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategoryId(): Collection
    {
        return $this->categoryId;
    }

    public function addCategoryId(Category $categoryId): static
    {
        if (!$this->categoryId->contains($categoryId)) {
            $this->categoryId->add($categoryId);
        }

        return $this;
    }

    public function removeCategoryId(Category $categoryId): static
    {
        $this->categoryId->removeElement($categoryId);

        return $this;
    }

    /**
     * @return Collection<int, Todolist>
     */
    public function getTodolistId(): Collection
    {
        return $this->TodolistId;
    }

    public function addTodolistId(Todolist $todolistId): static
    {
        if (!$this->TodolistId->contains($todolistId)) {
            $this->TodolistId->add($todolistId);
        }

        return $this;
    }

    public function removeTodolistId(Todolist $todolistId): static
    {
        $this->TodolistId->removeElement($todolistId);

        return $this;
    }
}
