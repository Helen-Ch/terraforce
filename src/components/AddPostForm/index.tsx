import React, {ButtonHTMLAttributes} from "react";
import cn from "classnames";
import {Post} from "../../common/types";

import styles from "./AddPostForm.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onAddPost: (post: Post) => void,
}

function AddPostForm({onAddPost, ...rest}: ButtonProps) {
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddPost({
            title,
            text,
            "image": "https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1380&t=st=1687631370~exp=1687631970~hmac=60ca3c2121baf20fec3195ad1450b2614235fa95cd730c36a1444aae0472062b",
            "url": "https://img.freepik.com/free-photo/empty-sea-beach-background_74190-313.jpg?w=1380&t=st=1687631370~exp=1687631970~hmac=60ca3c2121baf20fec3195ad1450b2614235fa95cd730c36a1444aae0472062b",
        });
        setTitle("");
        setText("");
    }

    return (
        <div className={styles.Wrapper}>
            <form className={styles.AddPostForm} onSubmit={handleSubmit}>
                <input
                    className={styles.Input}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleChangeTitle}
                />
                <input
                    className={styles.Input}
                    type="text"
                    name="text"
                    placeholder="Text"
                    value={text}
                    onChange={handleChangeText}
                />
                <button
                    className={cn(styles.BrandButton, {
                        [styles.Disabled]: !title || !text,
                    })}
                    disabled={!title || !text}
                    {...rest}
                >Add Post
                </button>
            </form>
        </div>
    )
}

export default AddPostForm;