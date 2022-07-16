import reactDOM from 'react-dom';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import Content from "./Content";
import BottomBar from "./BottomBar"

function App() {
    return (
        <div>
            <div>
                <Menu />
                <MenuMobile />  
            </div>
            <Content />
            <BottomBar />
        </div>
    );
}

reactDOM.render(App(), document.querySelector(".root"));
