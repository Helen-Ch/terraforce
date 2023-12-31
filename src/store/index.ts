import {init, RematchRootState, RematchDispatch} from "@rematch/core";
import posts from "./posts";

const models = {
    posts,
};

const store = init({
    models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;