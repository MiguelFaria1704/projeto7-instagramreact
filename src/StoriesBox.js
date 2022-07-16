const stories = [
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/9gag/",
        image: "./images/accounts/9gag.jpg",
        account: "9gag"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/meowed/",
        image: "./images/accounts/meowed.png",
        account: "meowed"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/barked/",
        image: "./images/accounts/barked.png",
        account: "barked"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/nathanwpylestrangeplanet/",
        image: "./images/accounts/nathanwpylestrangeplanet.png",
        account: "nathanwpylestrangeplanet"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/wawawiwacomics/",
        image: "./images/accounts/wawawiwacomics.png",
        account: "wawawiwacomics"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/respondeai/",
        image: "./images/accounts/respondeai.png",
        account: "respondeai"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/filomoderna/",
        image: "./images/accounts/filomoderna.jpg",
        account: "filomoderna"
    },
    {
        background: "./images/stories_background.jpg",
        url: "https://www.instagram.com/stories/memeriago/",
        image: "./images/accounts/memeriago.jpg",
        account: "memeriago"
    },
];

export default function StoriesBox() {
    return (
        <div className="stories-box">
            {stories.map(story => 
                <Story 
                background={story.background}
                url={story.url}
                image={story.image}
                account={story.account}
                />
                )}
            <button><ion-icon name="chevron-forward-circle"></ion-icon></button>
        </div>
    );
}

function Story(props) {
    return (
        <div>
            <img src={props.background} />
            <div>
                <a href={props.url}>
                    <img src={props.image} />
                </a>
            </div>
            <a href={props.url}>{props.account}</a>
        </div>
    );
}                        