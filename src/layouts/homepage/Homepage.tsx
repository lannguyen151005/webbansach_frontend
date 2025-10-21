import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/carousel/Carousel";
import BookList from "../product/BookList";

interface HomepageProps{
    keyword: string
}

function Homepage({keyword}:HomepageProps){

    return(
        <div>
            <Banner/>
            <Carousel/>
            <BookList keyword={keyword}/>
        </div>
    );
}
export default Homepage;
