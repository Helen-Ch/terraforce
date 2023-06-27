import React, {useEffect} from "react";
import {connect} from "react-redux";
import PostList from "../../components/PostList";
import {RootDispatch, RootState} from "../../store";
import AddPostForm from "../../components/AddPostForm";

type PostsProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>;

function Posts({posts, load, toggleActive, deletePost, addPost}: PostsProps) {
    useEffect(() => {
        load().then(r => {
        });
    }, [load]);

    return (
        <>
            <AddPostForm onAddPost={addPost}/>
            <PostList
                posts={posts}
                toggleActive={toggleActive}
                deletePost={deletePost}
            />
        </>
    );
}

const mapProps = (state: RootState) => ({
    posts: state.posts,
});

const mapDispatch = (dispatch: RootDispatch) => ({
    load: dispatch.posts.load,
    toggleActive: dispatch.posts.toggledActive,
    deletePost: dispatch.posts.delete,
    addPost: dispatch.posts.add,
});

export default connect(mapProps, mapDispatch)(Posts);