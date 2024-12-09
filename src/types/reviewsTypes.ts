import type {User} from '@/types/userTypes'

export type ReviewsDetail = {
    _id: string;
    bookId: string;
    userId: User,
    rating: number;
    comment: string;
    wasEdited: boolean;
    createdAt: string;
    updatedAt: string;   
}