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
        <div class="posts-column">
            {posts.map(post => 
            <div>
                <div>
                    <div>
                        <a href={post.accountURl}>
                            <img src={post.accountImage} alt="Profile Image" />
                            <h1>{post.account}</h1>            
                        </a>
                    </div>

                    <button><ion-icon name="ellipsis-horizontal"></ion-icon></button>
                </div>

                <img src={post.postImage} alt="Post Image" />

                <div>
                    <div>
                        <button><ion-icon name="heart-outline"></ion-icon></button>
                        <button><ion-icon name="chatbubble-outline"></ion-icon></button>
                        <button><ion-icon name="paper-plane-outline"></ion-icon></button>
                    </div>
                    <button><ion-icon name="bookmark-outline"></ion-icon></button>
                </div>

                <div>
                    <img src={post.interactingProfileImage} alt="Profile interaction" />
                    <p>Curtido por <a href={post.interactingProfileURL}>{post.interactingProfileName}</a> e <strong>outras {post.interactingNumbers} pessoas</strong></p>
                </div>

                <div class="comments">
                    <a href="https://www.instagram.com/">Veja todos os {post.commentsNumber} comentários</a>

                    <div>
                        <div><a href={post.commentAcountURL}>{post.commentAcountName}</a><p>{post.commentText}</p></div>
                        <button><ion-icon name="heart-outline"></ion-icon></button>
                    </div>

                    <div>
                        <button><ion-icon name="happy-outline"></ion-icon></button>
                        <input type="text" placeholder="Adicionar comentário" required /><input type="submit" value="Postar" />
                    </div>
                </div>
            </div>
            )}
        </div>
        );
}