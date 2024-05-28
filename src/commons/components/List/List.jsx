import PropTypes from "prop-types";
import ListItem from "./ListItem.jsx";

List.propTypes = {
    items : PropTypes.array
}

function List({items}){
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {items?.map(item => <ListItem key={item.id} menu={item.menu} price={item.price}/>)}
        </ul>
    )
}

export default List;
