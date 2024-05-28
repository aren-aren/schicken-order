import PropTypes from "prop-types";

ListItem.propTypes = {
    menu : PropTypes.string,
    price : PropTypes.string
}

function ListItem({menu, price}){
    return (
        <li className="flex justify-between gap-x-6 p-5 hover:bg-gray-100">
            <div className="flex min-w-0 gap-x-4">
                이미지
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{menu}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{price} 원</p>
            </div>
        </li>
    )
}

export default ListItem;
