export interface Channel {
    items: Book[];
}

export interface Book {
    title: string;
    imageUrl: string;
    largeImageUrl: string;
    author: string;
    createdDate: Date;
    id: string;
    userRating: number;
    averageRating: number;
}