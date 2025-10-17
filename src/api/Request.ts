async function myRequest(endpoint: string) {
    //Truy van den duong dan
    const response = await fetch(endpoint);

    //Neu bi tra ve loi
    if (!response.ok) {
        throw new Error(`Cannot access to ${endpoint}`)
    }
    //Neu tra ve OK
    return response.json();
}
export default myRequest;