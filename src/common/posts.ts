import {Post} from "./types";

const posts: ReadonlyArray<Post> = [
    {
        id: 496,
        title: "React app 1",
        text: "Create react app 1",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZH3Mfo5Ufn9CZX4nYU1Qxs5xyUOcJUqOqQ&usqp=CAU",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZH3Mfo5Ufn9CZX4nYU1Qxs5xyUOcJUqOqQ&usqp=CAU",
        active: 1,
        created_at: "2023-06-22T12:35:04.000000Z",
        updated_at: "2023-06-26T16:19:35.000000Z",
    },
    {
        id: 499,
        title: "New post",
        text: "new description ... hereh",
        image: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
        url: "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
        active: 1,
        created_at: "2023-06-22T14:11:54.000000Z",
        updated_at: "2023-06-24T23:45:28.000000Z",
    },
]

export default posts;
