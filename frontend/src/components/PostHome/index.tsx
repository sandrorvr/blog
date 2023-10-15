import "./index.css";

export const PostHome = () => {
    return (
        <div className="post">
            <div className="post-img">
                <img src="thumb.jpg" alt="" srcSet="" />
            </div>
            <div className="post-description">
                <h3 className="title-post">Trekking and Documenting the Surreal Patagonia</h3>
                <p className="resume-post">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.

                </p>
                <p className="date-post">February 27, 2014</p>
            </div>
        </div>
    );
}