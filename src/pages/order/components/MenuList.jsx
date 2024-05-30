import {useRecoilValue} from "recoil";
import Card from "../../../commons/components/Card/Card.jsx";
import {formatedMenusState} from "../../../commons/recoil/atom.js";
import menuDefault from "../../../assets/menuDefault.png";

function MenuList() {

    const menusInCategory = useRecoilValue(formatedMenusState);

    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 pb-12">
            {menusInCategory?.map(menu => (
                    <Card key={menu.id} title={menu.menu} imgSrc={menu.url == null ? menuDefault : menu.url}>
                        <div>{menu.price} 원</div>
                    </Card>
                )
            )}
        </section>
    )
}

export default MenuList;
