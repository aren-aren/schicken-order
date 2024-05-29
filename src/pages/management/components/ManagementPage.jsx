import {useRecoilState, useRecoilValue} from "recoil";
import {menuManager} from "../../order/menuManager/menuManager.js";
import {useEffect} from "react";
import {formatedMenusState, formatedModalDataState, modalDataState, modalState} from "../../../commons/recoil/atom.js";
import List from "../../../commons/components/List/List.jsx";
import Modal from "../../../commons/components/Modal/Modal.jsx";
import Button from "../../../commons/components/Button/Button.jsx";

function ManagementPage() {
    const [menus, setMenus] = useRecoilState(formatedMenusState);
    const [,isOpenModal] = useRecoilState(modalState);
    const [modalData, setModalData] = useRecoilState(formatedModalDataState);
    const readiedModalData = useRecoilValue(modalDataState);

    useEffect(() => {
        menuManager.getMenusInCategory(0)
            .then(data => setMenus(data));
    }, []);

    const onClickUpdate = item => {
        setModalData(item);
        isOpenModal(true);
    }

    const onClickAdd = () => {
        setModalData({
            id : "",
            menu : "",
            price : 0
        });
        isOpenModal(true);
    }

    const onChange = (target, value) => {
        setModalData({
            ...modalData,
            [target] : value
        })
    }

    const submitData = () => {
        (async ()=>{
            if(modalData.id === ""){
                return menuManager.addMenu(readiedModalData)
            } else {
                return menuManager.updateMenu(readiedModalData)
            }
        })().then(() => {
            isOpenModal(false);
            menuManager.getMenusInCategory(0)
                .then(data => setMenus(data));
        })
    }

    return (
        <>
            <Button onClick={onClickAdd} className="w-full">메뉴 추가</Button>
            <List items={menus} clickEvent={onClickUpdate}/>
            <Modal onRequestClose={()=>isOpenModal(false)}>
                <div>
                    <label htmlFor={"menuName" + modalData.id}>메뉴 이름 : </label>
                    <input id={"menuName" + modalData.id} type="text" onChange={event => onChange("menu", event.target.value)} value={modalData.menu}/>
                </div>
                <div>
                    <label htmlFor={"menuPrice" + modalData.id}>메뉴 가격 : </label>
                    <input id={"menuPrice" + modalData.id} type="text" onChange={event => onChange("price", event.target.value)} value={modalData.price}/>
                </div>
                <div>
                    <Button onClick={submitData}>적용하기</Button>
                </div>
            </Modal>
        </>
    )
}

export default ManagementPage;
