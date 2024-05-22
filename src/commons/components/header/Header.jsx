import HeaderItem from "./HeaderItem.jsx";
import logoImg from "/src/assets/S-Chicked-Logo.png";
import PropTypes from "prop-types";

Header.propTypes = {
    items: PropTypes.array,
    activeId: PropTypes.string,
    onClick: PropTypes.func
}

function Header({items, activeId, onClick}) {
    return (
        <div className="flex space-x-4 gap-1 bg-red-600 p-2">
            <div className="max-h-12 w-12">
                <img src={logoImg} style={{height: "100%"}}/>
            </div>
            {items?.map(item =>
                    <HeaderItem
                        key={item.id}
                        isActive={item.id === activeId}
                        onClick={()=>onClick(item.id)}
                        name={item.name}
                    />)}
        </div>
    )
}

export default Header;
