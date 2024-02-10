import { FaRegUserCircle } from "react-icons/fa";

export const UserDetails = () => {
    return (
        <div className="container">
            <div className="row user-details">
                <div className="col-sm-12 col-md-12">
                    <FaRegUserCircle className="profile" />
                </div>

                <div className="col-sm-12 col-md-12">
                    <h4> John Doe </h4>
                    <p> Johndoe</p>
                    <p className="bio"> UI Developer | Let&#39;s redesign the world</p>
                    <span> 2957 Likes</span>
                </div>
            </div>
        </div>

    );
};
