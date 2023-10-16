import "./index.css";
import { FC } from "react";
import { Ipost } from "../../pages/Home/Context";

export const PostHome:FC<Ipost> = ({title, body}) => {
    return (
        <div className="post">
            <div className="post-img">
                <img src="thumb.jpg" alt="" srcSet="" />
            </div>
            <div className="post-description">
                <h3 className="title-post">{title}</h3>
                <p className="resume-post">
                   {body}
                </p>
                <p className="date-post">February 27, 2014</p>
            </div>
        </div>
    );
}