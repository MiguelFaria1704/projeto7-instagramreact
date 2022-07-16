const myProfile = {
    name: "Catana", 
    ig: "catanacomics", 
    URL: "https://www.instagram.com/catanacomics/", 
    image: "./images/accounts/catanacomics.webp"
    };

const suggestions = [
    {
        URL: "https://www.instagram.com/bad.vibes.memes/",
        image: "./images/accounts/bad-vibes-memes.png",
        ig: "bad.vibes.memes",
        status: "Segue você"
    },
    {
        URL: "https://www.instagram.com/chibirdart/",
        image: "./images/accounts/chibirdart.png",
        ig: "chibirdart",
        status: "Segue você"
    },
    {
        URL: "https://www.instagram.com/razoesparaacreditar/",
        image: "./images/accounts/razoesparaacreditar.jpg",
        ig: "razoesparaacreditar",
        status: "Novo no Instagram"
    },
    {
        URL: "https://www.instagram.com/adorable_animals/",
        image: "./images/accounts/adorable_animals.png",
        ig: "adorable_animals",
        status: "Segue você"
    },
    {
        URL: "https://www.instagram.com/smallcutecats/",
        image: "./images/accounts/smallcutecats.png",
        ig: "smallcutecats",
        status: "Segue você"
    }
];

export default function Sidebar() {
    return (
        <div className="sidebar">
           <MyProfile
                name={myProfile.name}
                ig={myProfile.ig}
                URL={myProfile.URL}
                image={myProfile.image}
           />

            <div>
                <p>Sugestões para você</p>
                <a href="https://www.instagram.com/explore/people/">Ver tudo</a>
            </div>

            {suggestions.map(suggestion =>
                <Suggestion
                    URL={suggestion.URL}
                    image={suggestion.image}
                    ig={suggestion.ig}
                    status={suggestion.status}
                />
                )}

            <div>
                <a href="https://about.instagram.com/">Sobre</a>
                <p> --- </p>
                <a href="https://help.instagram.com/">Ajuda</a>
                <p> • </p>
                <a href="https://about.instagram.com/blog">Imprensa</a>
                <p> • </p>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <p> • </p>
                <a href="https://about.instagram.com/about-us/careers">Carreiras</a>
                <p> • </p>
                <a href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0">Privacidade</a>
                <p> • </p>
                <a href="https://help.instagram.com/581066165581870">Termos</a>
                <p> • </p>
                <a href="https://www.instagram.com/explore/locations/">Localizações</a>
                <p> • </p>
                <a href="https://www.instagram.com/">Contas mais relevantes</a>
                <p> • </p>
                <a href="https://www.instagram.com/">Hashtags</a>
                <p> • </p>  
                <button>Idioma</button>
            </div>

            <div>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    );
}

function MyProfile(props) {
    return (
        <div>
        <a href={props.URL}><img src={props.image} alt="My profyle" /></a>
        <div>
            <a href={props.URL}>{props.ig}</a>
            <p>{props.name}</p>
        </div>
    </div>
    );
}

function Suggestion(props) {
    return (
    <div>
        <div>
            <a href={props.URL}><img src={props.image} alt="Profile picture" /></a>
            <div>
                <a href={props.URL}>{props.ig}</a>
                <p>{props.status}</p>
            </div>
        </div>
        <button className="follow">Seguir</button>
    </div>
    );
}