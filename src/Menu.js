export default function Menu() {
    return (
    <div className="menu">
        <div>
            <a href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a>
            <div className="vertical-line"></div>
            <a href="https://www.instagram.com/"><img src="./images/logo.png" alt="logo"/></a>
        </div>

        <div>
                <input type="text" placeholder="Pesquisar" required />
        </div>

        <div>
            <a href="https://www.instagram.com/direct/inbox/"><ion-icon name="paper-plane-outline"></ion-icon></a>
            <a href="https://www.instagram.com/explore/"><ion-icon name="compass-outline"></ion-icon></a>
            <a href="https://www.instagram.com/"><ion-icon name="heart-outline"></ion-icon></a>
            <a href="https://www.instagram.com/catanacomics"><ion-icon name="person-outline"></ion-icon></a>
        </div>
    </div>
    );
}