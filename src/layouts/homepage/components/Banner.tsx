import React from "react";
function Banner() {
    
    return (
        <div>
            <div className="p-2 mb-4 bg-dark">
                <div className="container-fluid py-5 text-light d-flex justify-content-center align-items-center">
                    <div className="ps-4 pe-4 w-75" style={{textAlign:"justify"}}>
                        <h2 className="display-6 fw-bold">
                            The more that you read, the more things you will know. The more that you learn, the more places you'll go.
                        </h2>
                        <p className="fs-4">— Dr. Seuss</p>
                        <button className="btn btn-primary brn-lg text-white float-end">Explore more in Alan.vn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;