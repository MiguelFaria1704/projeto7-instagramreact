import reactDOM from 'react-dom';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

function App() {
    return (
        <div>
            <Menu />
            <MenuMobile  />
        </div>
    );
}

//reactDOM.render(App(), document.querySelector(".root"));
