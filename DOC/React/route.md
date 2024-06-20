# Route React

Source => 
https://www.youtube.com/watch?v=uhc4Fj2vvu0

## Installation

```
npm install react-router-dom
```

## Utilisation

1. Importer : 
```
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
```

2. Créer une constante pour les routes :
```
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Page de login
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    ),
  },
]);
```
<span style="color:red">NOTE : Link doit avoir une majuscule sinon cela ne fonctionne pas. Ce n'est pas une balise que l'on appel mais un composant du router</span>

3. Appliquer les routes :
```
function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
```
4. Gestion d'erreur pour les page non trouvé : 
```
path: '/',
    element: (
      <div>
        Page de login
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacte</Link>
        </nav>
      </div>
    ),
    errorElement: <div>Cette page n'existe pas !</div>
```

## Possible erreurs

- Si les routes sont dans un autre fichier, n'oublie pas d'ajouter "export default nomDeVariableAExporter"