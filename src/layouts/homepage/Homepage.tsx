import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import BookList from "../product/BookList";
function Homepage(){
    return(
        <div>
            <Banner/>
            <Carousel/>
            <BookList/>
        </div>
    );
}
export default Homepage;
