import Article from "./components/Article";
import Card from "./components/Card";
import GlobalEvent from "./components/globalEvent/GlobalEvent";

export default function Cours() {
    return (
        <div>
            <Article title={'Salut !'}>
                <p>Je suis le children ! =)</p>
            </Article>
            <Card />
            <br/>
            <br/>
            
            <GlobalEvent />
        </div>
    )
}