import PropTypes from "prop-types";

CardTitle.propTypes = {
    title : PropTypes.string
}

function CardTitle({title}){
    return (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
        </h5>
    )
}

export default CardTitle;
