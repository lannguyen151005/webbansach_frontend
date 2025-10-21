
import BookModel from "../models/BookModel";
import myRequest from "./Request";


interface resultInterface {
    result: BookModel[];
    totalPages: number;
    totalBooks: number;
}

async function getBooks(endpoint: string): Promise<resultInterface> {
    const result: BookModel[] = [];

    //goi phuong thuc request
    const response = await myRequest(endpoint);

    //Lay ra json book
    const responseData = response._embedded.books;

    const totalPages: number = response.page.totalPages;
    const totalBooks: number = response.page.totalElements

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
    return { result: result, totalBooks: totalBooks, totalPages: totalPages };
}

export async function getAllBooks(page: number): Promise<resultInterface> {
    const endpoint = `http://localhost:8080/books?sort=id,desc&size=4&page=${page}`;

    return getBooks(endpoint);
}

export async function get3Books(): Promise<resultInterface> {
    const endpoint = "http://localhost:8080/books?sort=id,desc&page=0&size=3";

    return getBooks(endpoint);
}

export async function findBook(keyword: string) {
    let endpoint = `http://localhost:8080/books?sort=id,desc&size=4&page=0`;

    if (keyword !== "") {
        endpoint = `http://localhost:8080/books/search/findByNameContaining?sort=id,desc&size=8&page=0&name=${keyword}`;
    }
    return getBooks(endpoint);
}