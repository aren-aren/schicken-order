import PropTypes from "prop-types";

CardImg.propTypes = {
    imgSrc : PropTypes.string
}

function CardImg({imgSrc}){
    return (
        <div>
            <img className="rounded-t-lg" src={imgSrc} alt=""/>
        </div>
    )
}

export default CardImg;
