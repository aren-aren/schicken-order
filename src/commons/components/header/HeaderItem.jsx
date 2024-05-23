import PropTypes from "prop-types";

HeaderItem.propTypes={
    name : PropTypes.string,
}

function HeaderItem({name}){
    return (
            <div>
                {name}
            </div>
    )
}

export default HeaderItem;
