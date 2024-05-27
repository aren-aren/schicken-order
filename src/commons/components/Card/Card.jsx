import PropTypes from "prop-types";
import CardImg from "./CardImg.jsx";
import CardTitle from "./CardTitle.jsx";

Card.propTypes = {
    title : PropTypes.string,
    imgSrc : PropTypes.string,
    children : PropTypes.node
}

function Card({title, imgSrc, children}){

    return (
        <div
            className="lg:max-w-sm flex lg:block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <CardImg imgSrc={imgSrc}/>
            <div className="p-5">
                <CardTitle title={title}/>
                {children}
            </div>
        </div>

    )
}

export default Card;
