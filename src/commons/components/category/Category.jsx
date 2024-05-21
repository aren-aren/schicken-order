import PropTypes from "prop-types";
import {categoryManager} from "../../categoryManager/categoryManager.js";

Category.propTypes={
    id : PropTypes.string,
    name : PropTypes.string
}

function Category({id, name}){
    const className = id === categoryManager.category ?
        'inline-block text-white align-middle bg-red-400 hover:bg-red-500 rounded-md px-3 py-2 m-auto'
        : 'inline-block text-white align-middle hover:bg-red-500 rounded-md px-3 py-2 m-auto'


    return (
            <div
                className={className} onClick={()=>categoryManager.moveCategory(id)}
            >
                {name}
            </div>
)
}

export default Category;
