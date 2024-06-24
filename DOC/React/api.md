# Appeler une API

Source Udemy : https://www.udemy.com/course/react-formation-complete/learn/lecture/38292878#overview <br><br>

Source projet : cours/components/apiCall

## Explication

<span style="color:red"><b>NOTES</b></span> : Il n'y a que le code pour l'appel de l'API, le reste sera dans "source projet".

```js
const [APIState, setAPIState] = useState({
        loading: false,
        error: false,
        data: undefined
    })

let content;

useEffect(() => {
        setAPIState({...APIState, loading: true});

        async function fetchUsers() {
            try {
                const config = {
                headers: { Authorization: `Bearer${token}` }
            };
                const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users', config);

                setAPIState({loading: false, error: false, data: userResponse.data});
            } catch (error) {
                console.error('Error:', error);
                setAPIState({ loading: false, error: true, data: undefined });
            } finally {
                // !! Dans tous les cas !!
                // console.log('et encore ici');
            }
        }

        fetchUsers();
    }, [])
```
On utilise un hook useEffect pour fait ça. 
1. On commence par mettre "loading:true" 
2. On crée une function asynchrone pour laisser le temps à l'API de répondre et à l'appli de se charger dans le même temps. 
3. On utilise un "try catch": 
- 1. Dans le "try", On récupère la configuration du headers de la requête si besoin.
- 2. On envoie la requête pour obtenir les données de l'API avec l'url nécessaire et en second paramètre, la configuration du headers.
- 3. On assigne (update) via le setter du state les données récupéré de l'API, le loading et error passe à "false".
4. Le catch est ici pour le cas ou le try ne fonctionne pas. On modifie également le state via le setter pour que loading passe à "false" et error à "true" 
5. Finally est ici pour faire une action peu importe que le try est fonctionné ou non. On peut mettre un console log pour le debug pour voir si le code passe bien dedans par exemple.