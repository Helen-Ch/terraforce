import axios from "axios";
import {Post} from "./types";

const instance = axios.create({
    baseURL: "https://yourtestapi.com/api/",
});

type PostResponse = {
    results: ReadonlyArray<Post>;
}

export const loadPosts =  () => {
   return instance.get<PostResponse>("posts/")
       .then((response) => {
              return response.data;
       });

}

// export const toggleActive = (post: Post) => {
//     return instance.post<PostResponse>(`posts/`, post)
//         .then((response) => {
//             return response.data;
//         });
// }

export const deletePost = (id: number) => {
    return instance.delete<PostResponse>(`posts/${id}`, )
        .then((response) => {
            return response.data;
        });
}

export const addPost = (post: Post) => {
    return instance.post<PostResponse>("posts/", post)
        .then((response) => {
            return response.data;
        });
}