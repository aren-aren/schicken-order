import {useRecoilState} from "recoil";
import {menusInCategoryState} from "../../../commons/recoil/atom.js";
import Card from "../../../commons/components/Card/Card.jsx";

function MenuList() {

    const [menusInCategory] = useRecoilState(menusInCategoryState);

    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 pb-12">
            {menusInCategory.menus?.map(menu => (
                    <Card key={menu.id} title={menu.menu}>
                        <div>{menu.price}</div>
                    </Card>
                )
            )}
        </section>
    )
}

export default MenuList;
