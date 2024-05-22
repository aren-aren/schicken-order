import {categoryManager} from "../categoryManager/categoryManager.js";

function MenuList(){

    return (
        <section>
            {categoryManager.getMenus()?.map(ml => <div key={ml.id}>{ml.menu} : {ml.price}</div>)}
        </section>
    )
}

export default MenuList;
