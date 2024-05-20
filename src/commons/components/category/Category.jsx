import PropTypes from "prop-types";

Category.propTypes={
    id : PropTypes.number,
    name : PropTypes.string
}

function Category({name}){
    return(
        <div>{name}</div>
    )
}

export default Category;
