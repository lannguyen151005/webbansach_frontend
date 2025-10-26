import React from "react";
import myRequest from "./Request";
import BookReviewModel from "../models/BookReviewModel";


export async function getAllReviews(id: number): Promise<BookReviewModel[]> {
    const result: BookReviewModel[] = [];
    const endpoint: string = `http://localhost:8080/books/${id}/reviewList`;

    const response = await myRequest(endpoint);
    const responseData = response._embedded.reviews;


    for (const key in responseData) {
        result.push(
            new BookReviewModel(
                responseData[key].id,
                responseData[key].ratingScore,
                responseData[key].comment,
                0,
                0       
            )
        )
    }
    return result;
}