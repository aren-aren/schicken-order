import PropTypes from "prop-types";

CardImg.propTypes = {
    imgSrc : PropTypes.string
}

function CardImg({imgSrc}){
    return (
        <div>
            <img className="rounded-t-lg h-[100px] md:h-[150px] lg:h-[200px]" src={imgSrc} alt=""/>
        </div>
    )
}

export default CardImg;
