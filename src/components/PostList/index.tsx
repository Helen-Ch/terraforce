import React from "react";
import {Post} from "../../common/types";
import PostCard from "../PostCard";

import styles from "./PostList.module.css";

type postListProps = {
    posts: Post[],
    deletePost: (post: Post) => void,
    toggleActive: (post: Post) => void,
}

function PostList({posts, deletePost, toggleActive}: postListProps) {
    const lastPosts = posts.sort((a, b) => {
        return new Date(b.updated_at || "").getTime() - new Date(a.updated_at || "").getTime();
    });

    return (
        <div className={styles.Wrapper}>
        <div className={styles.Content}>
            {lastPosts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    toggleActive={toggleActive}
                    deletePost={deletePost}
                />
            ))}
        </div>
        </div>
    )
}

export default PostList;