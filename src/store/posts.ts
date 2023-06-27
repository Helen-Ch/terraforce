import {Post} from "../common/types";
import {RematchDispatch} from "@rematch/core";
import {addPost, deletePost, loadPosts} from "../common/api";

type State = Post[];

const model = {
    state: [] as State,
    reducers: {
        loaded: (state: State, payload: ReadonlyArray<Post>) => payload,
        toggledActive: (state: State, payload: Post) => state.map(post => {
            if (post.id === payload.id) {
                return {
                    ...post,
                    active: !post.active,
                }
            }

            return post;
        }),
        setPostDeleted: (state: State, payload: Post) => state.map(post => {
            if (post.id === payload.id) {
                return {
                    ...post,
                    deleted_at: new Date(),
                }
            }
            return post;
        }),
        createPost: (state: State, payload: Post) => [...state, payload],
    },
    effects: (dispatch: RematchDispatch<any>) => ({
        async load() {
            const posts = await loadPosts();
            dispatch.posts.loaded(posts);
        },
        async delete(payload: Post) {
            if (payload.id) {
                await deletePost(payload.id);
                dispatch.posts.load();
            }
        },
        async add(payload: Post) {
            const posts = await addPost(payload);
            dispatch.posts.createPost(posts, payload);
            dispatch.posts.load();
        }
    }),
}

export default model;