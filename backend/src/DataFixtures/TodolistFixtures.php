<?php

namespace App\DataFixtures;

use App\Entity\Todolist;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class TodolistFixtures extends Fixture
{

    public function load(ObjectManager $manager): void
    {

        $userRepository = $manager->getRepository(User::class);
        for ($i=0; $i < 10; $i++) { 
            $todolist = new Todolist();
            $todolist->setName("liste". $i);
            $todolist->setUserid($userRepository->find($i));

            $manager->persist($todolist);
        }

        $manager->flush();
    }
}
