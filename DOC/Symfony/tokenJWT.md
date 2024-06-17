# Token JWT

## Erreur rencontré
```
error:80000003:system library::No such process
```

Je suis donc allé sur ce lien et le tout dernier apport de "Khribi Wessim" indique qu'il manque Openssl sur la machine, c'est pour cette raison que je n'arrivais pas à générer un token <br>
https://stackoverflow.com/questions/66252709/error-system-libraryfopenno-such-process

```
Unable to find the controller for path "/api/login_check". The route is wrongly configured.
```
Je suis tombé sur cette erreur sur Insomnia quand j'ai voulu faire "login_check" pour avoir un token avec mon utilisateur. <br>
C'était juste dans le "security.yaml", il y a un ordre à respecter dans "firewalls": 

- dev
- login
- api
- main

"main" était avant "login" ce qui faisait tout péter