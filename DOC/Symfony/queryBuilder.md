# Requête sql avec queryBuilder

Source => UserRepository

## Exemple 1

```js
public function findOneByEmail($email): ?User
       {    
            // "u" est un alias pour user, j'aurais pu mettre bibi
           return $this->createQueryBuilder('u')
                // Condition pour savoir si "u.email" => email de la bdd
                // correspond à ":email" => email fourni
               ->andWhere('u.email = :email')
               // On défini la valeur de 'email' avec '$email'
               ->setParameter('email', $email)
               // Execute la requête
               ->getQuery()
               // Retourne un seul résultat ou null si l'utilisateur n'existe pas
               ->getOneOrNullResult()
           ;
       }
```