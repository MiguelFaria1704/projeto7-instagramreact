import StoriesBox from "./StoriesBox";
import PostsColumn from "./PostsColumn";
import Sidebar from "./Sidebar";

export default function Content() {
    return (
        <div className="content">
            <div>
                <StoriesBox />
                <PostsColumn />
            </div>
            <Sidebar />
        </div>
    );
}