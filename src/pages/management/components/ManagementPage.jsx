import {useRecoilState} from "recoil";
import {menuManager} from "../../order/menuManager/menuManager.js";
import {useEffect, useState} from "react";
import {formatedMenusState} from "../../../commons/recoil/atom.js";
import List from "../../../commons/components/List/List.jsx";
import Modal from "../../../commons/components/Modal/Modal.jsx";
import Button from "../../../commons/components/Button/Button.jsx";
import menuDefault from "../../../assets/menuDefault.png";

function ManagementPage() {
    const [menus, setMenus] = useRecoilState(formatedMenusState);
    const [isOpen,isOpenModal] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        menuManager.getMenusInCategory(0)
            .then(data => setMenus(data));
    }, []);

    function setModalMenu(newValue){
        setModalData({...newValue, price : formatToNumber(newValue.price)});
    }

    function moneyFormat(target){
        const money = target + "";
        let formatted = [];
        for (let i = 0; i < money.length; i++) {
            formatted.push(money.at(money.length - i - 1));
            if(i%3 === 2 && i !== money.length-1){
                formatted.push(",");
            }
        }
        return formatted.reverse().join("");
    }

    function formatToNumber(target){
        return Number(target.toString().replace(/[^0-9]/g, ""));
    }


    const onClickUpdate = item => {
        setModalMenu(item);
        isOpenModal(true);
    }

    const onClickAdd = () => {
        setModalMenu({
            id : "",
            menu : "",
            price : 0
        });
        isOpenModal(true);
    }

    const onChange = (target, value) => {
        setModalMenu({
            ...modalData,
            [target] : value
        })
    }

    const submitData = () => {

        (async ()=>{
            if(modalData.id === ""){
                return menuManager.addMenu(modalData)
            } else {
                return menuManager.updateMenu(modalData)
            }
        })().then(() => {
            isOpenModal(false);
            menuManager.getMenusInCategory(0)
                .then(data => setMenus(data));
        })
    }

    const onChangeImage = event => {
        setModalMenu({
            ...modalData,
            attach : event.target.files[0],
            url : URL.createObjectURL(event.target.files[0])
        })
    }


    return (
        <>
            <Button onClick={onClickAdd} className="w-full">메뉴 추가</Button>
            <List items={menus} clickEvent={onClickUpdate}/>
            <Modal isOpen={isOpen} onRequestClose={()=>isOpenModal(false)}>
                <div>
                    <img src={modalData.url == null ? menuDefault : modalData.url} style={{height: "300px"}}/>
                    <input type="file" accept="image/*" id={"menuImg" + modalData.id} hidden={true} onChange={onChangeImage}/>
                    <Button onClick={()=>document.getElementById("menuImg" + modalData.id)?.click()}>사진 변경</Button>
                </div>
                <div>
                    <label htmlFor={"menuName" + modalData.id}>메뉴 이름 : </label>
                    <input id={"menuName" + modalData.id} type="text" onChange={event => onChange("menu", event.target.value)} value={modalData.menu}/>
                </div>
                <div>
                    <label htmlFor={"menuPrice" + modalData.id}>메뉴 가격 : </label>
                    <input id={"menuPrice" + modalData.id} type="text" onChange={event => onChange("price", event.target.value)} value={moneyFormat(modalData.price)}/>
                </div>
                <div>
                    <Button onClick={submitData}>적용하기</Button>
                </div>
            </Modal>
        </>
    )
}

export default ManagementPage;
