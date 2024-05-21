import {useState} from "react";
import {categoryManager} from "../../commons/categoryManager/categoryManager.js";

function MenuList(){
    const [menuList, setMenuList] = useState([]);
    categoryManager.setMenuList = setMenuList;

    return (
        <section>
            {menuList.menus?.map(ml => <div key={ml.id}>{ml.menu} : {ml.price}</div>)}
        </section>
    )
}

export default MenuList;
