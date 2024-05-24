import {useRecoilState} from "recoil";
import {menusInCategoryState} from "../../../commons/recoil/atom.js";

function MenuList(){

    const [menusInCategory] = useRecoilState(menusInCategoryState);

    return (
        <section>
            {menusInCategory.menus?.map(menu => <div key={menu.id}>{menu.menu}</div>)}
        </section>
    )
}

export default MenuList;
