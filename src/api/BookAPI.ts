import React from "react";
import BookModel from "../models/BookModel";
import myRequest from "./Request";

export async function getAllBooks(): Promise<BookModel[]> {
    const result: BookModel[] = [];
    const endpoint: string = 'http://localhost:8080/books';

    //goi phuong thuc request
    const response = await myRequest(endpoint);

    //Lay ra json book
    const responseData = response._embedded.books;
    for (const key in responseData) {
        result.push(
            new BookModel(
                responseData[key].id,
                responseData[key].name,
                responseData[key].price,
                responseData[key].listedPrice,
                responseData[key].description,
                responseData[key].quantity,
                responseData[key].author,
                responseData[key].averageRating
            )
        )
    }
    return result;
}