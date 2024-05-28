import {useRecoilState} from "recoil";
import {categoryManager} from "../../order/categoryManager/categoryManager.js";
import {useEffect} from "react";
import {formattedMenusState} from "../../../commons/recoil/atom.js";
import List from "../../../commons/components/List/List.jsx";

function ManagementPage() {
    const [menus, setMenus] = useRecoilState(formattedMenusState);

    useEffect(() => {
        categoryManager.getMenusInCategory(0)
            .then(data => setMenus(data));
    }, []);

    return (
        <>
            <button>메뉴 추가</button>
            <List items={menus}/>
        </>
    )
}

export default ManagementPage;
