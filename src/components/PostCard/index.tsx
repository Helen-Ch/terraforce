import React, {useMemo} from "react";
import {Post} from "../../common/types";
import DeleteButton from "../DeleteButton";
import ActiveToggleButton from "../ActiveToggleButton";

import styles from "./PostCard.module.css";
import moment from "moment";

type PostProps = {
    post: Post,
    deletePost: (post: Post) => void,
    toggleActive: (post: Post) => void,
    onClick?: () => void,
}

function PostCard({post, deletePost, toggleActive, onClick}: PostProps) {
    const postDate = useMemo(() => {
        return moment(post.updated_at).format("DD-MM-YYYY");
    }, [post.updated_at]);

    return (
        <div className={styles.Card} onClick={onClick}>
            <div className={styles.Head}>
                <h2>{post.title}</h2>
                <span className={styles.PostDate}>{postDate}</span>
            </div>
            <p>{post.text}</p>
            <div className={styles.Img}>
            <img src={post.image} alt={post.title}/>
            </div>
            <ActiveToggleButton
                isPostActive={Boolean(post.active)}
                onClick={() => toggleActive(post)}
            />
            <DeleteButton onClick={() => deletePost(post)}/>
        </div>
    )
}

export default PostCard;