# Serializer / Groups

Si tu as cette erreur : <br>

<span style="background:red">A circular reference has been detected when serializing the object of class "App\Entity\User" <br>

Il te faut les @Groups

## Doc

https://symfony.com/doc/current/components/serializer.html#attributes-groups <br>
https://symfony.com/doc/current/serializer.html#installation

## Mises en place

### I Installation du bundle

Installer ce bundle
```
composer require symfony/serializer-pack
```
Je pense que celui-ci est le même mais en moins complet, si jamais ça bug tu peux test :
```
composer require symfony/serializer-pack
```

### Entité

Dans les entités que tu souhaite récupérer, il faudra mettre dans chacune d'entre elle : 
```php
use Symfony\Component\Serializer\Annotation\Groups;
```
Puis sur chaque éléments : 
```php
#[Groups(["user"])]
```

A la place de "user", tu aurais pu mettre utilisateur par exemple.<br>
C'est terminé pour l'entité.

### Controller

Dans la route maintenant, tu vas devoir écrire ce code :

```php
return $this->json($user, Response::HTTP_OK, [], ["groups" => "user"]);
```

Normalement tout devrait fonctionner

## Note

Pour récupérer une relation ManyToMany par exemple, il faut que tu écrive l'annotation "Groups" sur la relation, exemple :  

```php
/**
 * @var Collection<int, Task>
 */
#[ORM\ManyToMany(targetEntity: Task::class, mappedBy: 'TodolistId')]
#[Groups(["user"])]
private Collection $tasks;
```