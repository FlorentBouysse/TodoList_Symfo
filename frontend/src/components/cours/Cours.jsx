import Article from "./components/Article";
import Card from "./components/Card";
import ApiCall from "./components/apiCall/ApiCall";
import GlobalEvent from "./components/globalEvent/GlobalEvent";
import DynamicUseRef from "./components/useRef/DynamicUseRef";
import StaticUseRef from "./components/useRef/StaticUseRef";

export default function Cours() {
    return (
        <div>
            {/* <Article title={'Salut !'}>
                <p>Je suis le children ! =)</p>
            </Article> */}

            {/* <Card /> */}
            {/* <GlobalEvent /> */}

            {/* <ApiCall /> */}
            {/* <StaticUseRef /> */}
            
            <DynamicUseRef />
        </div>
    )
}