import PropTypes from "prop-types";
import ListItem from "./ListItem.jsx";

List.propTypes = {
    items : PropTypes.array,
    clickEvent : PropTypes.func
}

function List({items, clickEvent}){
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {items?.map(item =>
                <ListItem
                    key={item.id}
                    menu={item.menu}
                    price={item.price}
                    onClick={()=>clickEvent(item)}
                />
            )}
        </ul>
    )
}

export default List;
