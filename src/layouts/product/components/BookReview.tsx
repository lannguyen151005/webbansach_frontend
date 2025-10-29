import React, { useEffect, useState } from "react";
import BookReviewModel from "../../../models/BookReviewModel";
import { getAllReviews } from "../../../api/ReviewAPI";
import renderRating from "../../util/StarRating";

interface BookReviewInterface {
    bookId: number;
}

const BookReview: React.FC<BookReviewInterface> = ({ bookId }) => {

    const [reviewList, setReviewList] = useState<BookReviewModel[]>([]);
    const [loadingData, setLoadingData] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllReviews(bookId).then(
            reviewData => {
                setReviewList(reviewData);
                setLoadingData(false);
            }
        ).catch(
            error => {
                setError(error.message);
            }
        )
    }, [bookId]
    )

    if (loadingData) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error detected! ({error})</h1>
            </div>
        );
    }
    return (
        <div className="row">
            <h2>Reviews</h2>
            <hr />
            {
                reviewList.map((review, index) => (
                    <div>
                        <div className="row">
                            <h3 className="col-3">{renderRating(review.ratingScore ? review.ratingScore : 0)}</h3>
                            <p className="col-9">{review.comment}</p>
                        </div>
                    </div>
                ))
            }

        </div >
    );
}

export default BookReview;