import React from "react";

let posts = [
    {
        accountURl: "https://www.instagram.com/meowed/",
        accountImage: "./images/accounts/meowed.png",
        account: "meowed",
        postImage: "./images/cat.png",
        interactingProfileImage: "./images/accounts/respondeai.png",
        interactingProfileURL: "https://www.instagram.com/respondeai/",
        interactingProfileName: "respondeai",
        interactingNumbers: "101.523",
        commentsNumber: "108",
        commentAcountURL: "https://www.instagram.com/meowed/",
        commentAcountName: "Meowed",
        commentText: "Are they posting my pictures again?"
    },
    {
        accountURl: "https://www.instagram.com/barked/",
        accountImage: "./images/accounts/barked.png",
        account: "barked",
        postImage: "./images/doginho.png",
        interactingProfileImage: "./images/accounts/adorable_animals.png",
        interactingProfileURL: "https://www.instagram.com/barked/",
        interactingProfileName: "barked",
        interactingNumbers: "99.159",
        commentsNumber: "96",
        commentAcountURL: "https://www.instagram.com/barked/",
        commentAcountName: "barked",
        commentText: "How cute am I?"
    },
    {
        accountURl: "https://www.instagram.com/adorable_animals/",
        accountImage: "./images/accounts/adorable_animals.png",
        account: "adorable_animals",
        postImage: "./images/bears.jpg",
        interactingProfileImage: "./images/accounts/meowed.png",
        interactingProfileURL: "https://www.instagram.com/meowed/",
        interactingProfileName: "meowed",
        interactingNumbers: "80.351",
        commentsNumber: "79",
        commentAcountURL: "https://www.instagram.com/adorable_animals/",
        commentAcountName: "adorable_animals",
        commentText: "Merida, is that you?"
    }
]


export default function PostsColumn() {   
    return (
        <div className="posts-column">
            {posts.map(post => (
                <Post
                    accountURl={post.accountURl} 
                    accountImage={post.accountImage} 
                    account={post.account} 
                    postImage={post.postImage} 
                    interactingProfileImage={post.interactingProfileImage} 
                    interactingProfileURL={post.interactingProfileURL} 
                    interactingProfileName ={post.interactingProfileName} 
                    interactingNumbers={post.interactingNumbers} 
                    commentsNumber={post.commentsNumber} 
                    commentAcountURL={post.commentAcountURL} 
                    commentAcountName={post.commentAcountName} 
                    commentText={post.commentText} 
                />
            ))}
        </div>
        );
}


function Post(props) {
    const [heart, setHeart] = React.useState("heart-outline");
    const [likeStatus, setLikeStatus] = React.useState("unliked");

    function likeToggle() {
        if(heart === "heart-outline") {
            setHeart("heart-sharp");
            setLikeStatus("liked");
        } else {
            setHeart("heart-outline");
            setLikeStatus("unliked");
        }
    }

    function likeAdd() {
        setHeart("heart-sharp");
        setLikeStatus("liked");
    }
    
    return (
            <div>
                <div>
                    <div>
                        <a href={props.accountURl}>
                            <img src={props.accountImage} alt="Profile Image" />
                            <h1>{props.account}</h1>            
                        </a>
                    </div>

                    <button><ion-icon name="ellipsis-horizontal"></ion-icon></button>
                </div>

                <img src={props.postImage} alt="Post Image" onClick={likeAdd} />

                <div>
                    <div>
                        <button className={likeStatus} onClick={likeToggle}><ion-icon name={heart}></ion-icon></button>
                        <button><ion-icon name="chatbubble-outline"></ion-icon></button>
                        <button><ion-icon name="paper-plane-outline"></ion-icon></button>
                    </div>
                    <button><ion-icon name="bookmark-outline"></ion-icon></button>
                </div>

                <div>
                    <img src={props.interactingProfileImage} alt="Profile interaction" />
                    <p>Curtido por <a href={props.interactingProfileURL}>{props.interactingProfileName}</a> e <strong>outras {props.interactingNumbers} pessoas</strong></p>
                </div>

                <div className="comments">
                    <a href="https://www.instagram.com/">Veja todos os {props.commentsNumber} comentários</a>

                    <div>
                        <div><a href={props.commentAcountURL}>{props.commentAcountName}</a><p>{props.commentText}</p></div>
                        <button><ion-icon name="heart-outline"></ion-icon></button>
                    </div>

                    <div>
                        <button><ion-icon name="happy-outline"></ion-icon></button>
                        <input type="text" placeholder="Adicionar comentário" required /><input type="submit" value="Postar" />
                    </div>
                </div>
            </div>
    );
}