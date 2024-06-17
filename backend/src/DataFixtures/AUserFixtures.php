<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AUserFixtures extends Fixture
{
    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        for ($i=0; $i < 10; $i++) { 
            $user = new User();
            $user->setEmail("admin".$i."@admin.fr");
            $user->setPassword($this->passwordHasher->hashPassword($user, 'admin'));
            $user->setNickname($faker->userName());

            $manager->persist($user);
        }

        $manager->flush();
    }
}
