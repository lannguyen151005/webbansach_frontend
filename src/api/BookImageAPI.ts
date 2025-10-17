import React from "react";
import BookImageModel from "../models/BookImageModel";
import myRequest from "./Request";

export async function getAllImages(id: number): Promise<BookImageModel[]> {
    const result: BookImageModel[] = [];
    const endpoint: string = `http://localhost:8080/books/${id}/imageList`;

    const response = await myRequest(endpoint);
    const responseData = response._embedded.bookImages;


    for (const key in responseData) {
        result.push(
            new BookImageModel(
                responseData[key].id,
                responseData[key].name,
                responseData[key].isIcon,
                responseData[key].link,
                responseData[key].data
                
            )
        )
    }
    return result;
}