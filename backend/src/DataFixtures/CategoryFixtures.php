<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CategoryFixtures extends Fixture
{

    public function load(ObjectManager $manager): void
    {

        for ($i=0; $i < 10; $i++) { 
            $category = new Category();
            $category->setName("category". $i);

            $manager->persist($category);
        }

        $manager->flush();
    }
}
