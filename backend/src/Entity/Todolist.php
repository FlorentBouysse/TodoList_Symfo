<?php

namespace App\Entity;

use App\Repository\TodolistRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TodolistRepository::class)]
class Todolist
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
     * @var Collection<int, Task>
     */
    #[ORM\ManyToMany(targetEntity: Task::class, mappedBy: 'TodolistId')]
    #[Groups(["user", "list"])]
    private Collection $tasks;

    #[ORM\ManyToOne(inversedBy: 'todolistId')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $Userid = null;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
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
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): static
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
            $task->addTodolistId($this);
        }

        return $this;
    }

    public function removeTask(Task $task): static
    {
        if ($this->tasks->removeElement($task)) {
            $task->removeTodolistId($this);
        }

        return $this;
    }

    public function getUserid(): ?User
    {
        return $this->Userid;
    }

    public function setUserid(?User $Userid): static
    {
        $this->Userid = $Userid;

        return $this;
    }
}
