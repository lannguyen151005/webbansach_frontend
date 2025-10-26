import { StarFill, Star, StarHalf } from "react-bootstrap-icons";


const renderRating = (score: number)=>{
        let scoreRating = score;
        const stars = [];
        for(let i=1; i<=5; i++){
            if(scoreRating>=1){
                stars.push(<StarFill className="text-warning"/>)
            }else if(scoreRating<=0){
                stars.push(<Star className="text-secondary"/>)
            }else{
                stars.push(<StarHalf className="text-warning"/>)
            }
            scoreRating = scoreRating-1;
        }
        return stars;
    }

export default renderRating;