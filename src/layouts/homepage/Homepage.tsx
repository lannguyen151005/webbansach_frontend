import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/carousel/Carousel";
import BookList from "../product/BookList";
import { useParams } from "react-router-dom";

interface HomepageProps{
    keyword: string
}

function Homepage({keyword}:HomepageProps){

    // Lấy mã thể loại trong thân đường dẫn
    const {genreId} = useParams();
    
    let genreIdNumber = 0;

    try {
        genreIdNumber = parseInt(genreId+"");
    } catch (error) {
        genreIdNumber = 0;
        console.log("Error: "+error);
    }

    if(Number.isNaN(genreIdNumber)){
        genreIdNumber = 0;
    }

    console.log(genreIdNumber);

    return(
        <div>
            <Banner/>
            <Carousel/>
            <BookList keyword={keyword} genreId={genreIdNumber}/>
        </div>
    );
}
export default Homepage;
