import {useRecoilState} from "recoil";
import {categoryManager} from "../../order/categoryManager/categoryManager.js";
import {useEffect} from "react";
import {menusInCategoryState} from "../../../commons/recoil/atom.js";
import List from "../../../commons/components/List/List.jsx";

function ManagementPage() {
    const [menus, setMenus] = useRecoilState(menusInCategoryState);

    useEffect(() => {
        categoryManager.getMenusInCategory(0)
            .then(data => setMenus(data));
    }, []);

    return (
        <section>
            <button>메뉴 추가</button>
            <List items={menus.menus}/>
        </section>
    )
}

export default ManagementPage;
