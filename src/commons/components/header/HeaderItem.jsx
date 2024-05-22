import PropTypes from "prop-types";

HeaderItem.propTypes={
    name : PropTypes.string,
    onClick : PropTypes.func,
    isActive : PropTypes.bool
}

function HeaderItem({name, onClick, isActive}){

    const className = isActive ?
        'inline-block text-white align-middle bg-red-700 rounded-md px-3 py-2 m-auto'
        : 'inline-block text-white align-middle hover:bg-red-500 rounded-md px-3 py-2 m-auto'

    return (
            <div
                className={className} onClick={onClick}
            >
                {name}
            </div>
)
}

export default HeaderItem;
