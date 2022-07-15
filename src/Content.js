import StoriesBox from "./StoriesBox";



export default function Content() {
    return (
        <div class="content">
            <div>
                <StoriesBox />
                <PostsColumn />
            </div>
            <Sidebar />
        </div>
    );
}