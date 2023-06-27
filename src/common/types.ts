export type Post = {
    id?: number,
    title: string,
    text: string,
    image: string,
    url: string,
    active?: number,
    sort_order?: number,
    created_at?: string | Date,
    updated_at?: string | Date,
    deleted_at?: string | Date,
};