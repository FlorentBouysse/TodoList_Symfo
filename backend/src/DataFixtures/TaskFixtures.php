<?php

namespace App\DataFixtures;

use App\Entity\Task;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TaskFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $tasks = [
            "Faire les courses", "Acheter du lait, des œufs, du pain et des légumes.",
            "Nettoyer la maison", "Passer l'aspirateur et faire la poussière dans toutes les pièces.", 
            "Rédiger le rapport", "Écrire et envoyer le rapport trimestriel à la direction.", 
            "Appeler le plombier", "Prendre rendez-vous avec le plombier pour réparer la fuite d'eau.", 
            "Réviser pour l'examen", "Étudier les chapitres 3 à 5 pour l'examen de mathématiques.", 
            "Aller chez le médecin", "Faire un contrôle médical annuel.", 
            "Planifier les vacances", "Réserver les billets et l'hébergement pour les vacances d'été.", 
            "Faire la lessive", "Laver, sécher et plier les vêtements.", 
            "Envoyer les invitations", "Envoyer les invitations pour la fête d'anniversaire de Marie.", 
            "Lire un livre", "Terminer le livre '1984' de George Orwell.", 
            "Réparer la voiture", "Prendre rendez-vous pour l'entretien de la voiture.", 
            "Acheter un cadeau", "Trouver un cadeau pour l'anniversaire de Paul.", 
            "Faire du sport", "Aller courir au parc pendant 30 minutes.", 
            "Préparer un dîner", "Cuisiner un repas pour la famille.", 
            "Étudier pour le test", "Réviser les notes pour le test de physique.", 
            "Visiter le musée", "Aller voir l'exposition d'art moderne.", 
            "Appeler la banque", "Discuter des options de prêt avec le conseiller bancaire.", 
            "Organiser le bureau", "Ranger les dossiers et nettoyer le bureau.", 
            "Faire une promenade", "Promener le chien au parc.", 
            "Acheter des fournitures", "Acheter des stylos, des cahiers et des classeurs.", 
            "Faire un don", "Donner des vêtements inutilisés à une association caritative.", 
            "Jardiner", "Planter des fleurs et arroser le jardin.", 
            "Faire du bricolage", "Réparer la chaise cassée.", 
            "Appeler les amis", "Prendre des nouvelles de Sophie et Marc.", 
            "Aller à la bibliothèque", "Rendre les livres empruntés et en emprunter de nouveaux.", 
            "Préparer un exposé", "Travailler sur l'exposé pour la réunion de lundi.", 
            "Assister à une réunion", "Participer à la réunion de l'association.", 
            "Prendre un cours en ligne", "Suivre le cours de programmation sur Udemy.", 
            "Faire des courses en ligne", "Commander des provisions sur le site de l'épicerie.", 
            "Planifier un événement", "Organiser la fête de fin d'année au bureau."
        ];
        

        for ($i=0; $i < 20; $i++) { 
            $task = new Task();
            $task->setName($tasks[$i]);
            $manager->persist($task);
        }

        $manager->flush();
    }
}