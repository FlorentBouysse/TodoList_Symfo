# TodoList_Symfo

Exercice pour moi-même <br>
La **TodoList**

### MCD

![MCD projet Todolist](/backend/assets/images/Todolist_symfo.png "MCD projet Todolist")

## Mises en route


En étant dans le dossier correspondant, backend = Symfony et frontend = ReactJS
- Symfony serve:start
- npm run dev

## Etape I L'API

- <span style="color:green">&#10003;<del>Créer la base de données en API Rest
- <span style="color:green">&#10003;<del> Créer les entités
- <span style="color:green">&#10003;<del>Fixtures
- <span style="color:green">&#10003;<del>CRUD liste
- <span style="color:green">&#10003;<del>CRUD tâche
- <span style="color:green">&#10003;<del>CRUD catégorie
- <span style="color:green">&#10003;<del>Ajout du Token JWT
- <span style="color:green">&#10003;<del>Créer l'authentification

## Etape II Front

- Page de login
- Page de listes
- Page de tâches

## Erreur rencontré

- Relation Many to many entre todolist et task. J'ai voulu faire en sorte que lorsqu'on supprime un todolist, les tâches soient supprimé aussi, ce qui est normal mais le fait d'avoir mit une relation many to many m'a bloqué. J'ai bien ajouté l'option "orphanRemoval=true" mais il fallait mettre la relation en many to one pour que cela fonctionnes.