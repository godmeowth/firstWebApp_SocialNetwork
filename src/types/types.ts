export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string

}

export type PhotosType = {
    small: string;
    large: string;
}

export type UserType = {
    id: number;
    name: string;
    status: string;
    photos: PhotosType;
    followed: boolean;
}