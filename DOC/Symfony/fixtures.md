# Fixtures avec Symfony

Faire cette commande pour installer le bundle <br>
```composer require --dev doctrine/doctrine-fixtures-bundle``` <br><br>
Puis pour installer le Faker <br>
```composer require fakerphp/faker```<br>

## I. User

Sur cette partie, j'ai une entité User qui comporte un id, un email, un password et un pseudo. <br>
Pour commencer, j'instancie le faker comme suis : <br>
```$faker = Factory::create('fr_FR');``` <br><br>

Ensuite je crée une boucle pour créer 10 utilisateurs, dans celle-ci j'instancie mon objet User puis lui set un email fictif, un pseudo avec faker comme suis : <br>
```$user->setNickname($faker->userName());``` <br><br>

Il me faut ensuite créer un mot de passe hashé. Je dois mettre le use suivant : <br>
```php
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface
``` 
<br>
Puis ajouter dans la classe mais avant la méthode load ce code : <br>

```php
private $passwordHasher;
public function __construct(UserPasswordHasherInterface $passwordHasher)
{
    $this->passwordHasher = $passwordHasher;
}
```
<br>

Enfin, pour set le password faire ceci : <br>
```php
$user->setPassword($this->passwordHasher->hashPassword($user, 'admin'));
```
