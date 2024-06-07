import {useRecoilState, useRecoilValue} from "recoil";
import Card from "../../../commons/components/Card/Card.jsx";
import {
    formatedMenusState,
    selectedFranchiseState,
    userInformationState
} from "../../../commons/recoil/atom.js";
import menuDefault from "../../../assets/menuDefault.png";
import Modal from "../../../commons/components/Modal/Modal.jsx";
import Button from "../../../commons/components/Button/Button.jsx";
import {useState} from "react";
import LoginModalElement from "./LoginModalElement.jsx";

function MenuList() {

    const menusInCategory = useRecoilValue(formatedMenusState);
    const [userInformation, setUserInformation] = useRecoilState(userInformationState);
    const [selectedFranchise, selectFranchise] = useRecoilState(selectedFranchiseState);

    const [menuModalOpenState, setMenuModalOpenState] = useState(false);
    const [menuModalData, setMenuModalData] = useState({});

    const [infoModalOpenState, setInfoModalOpenState] = useState(false);
    const [infoModalState, setInfoModalState] = useState(<></>);

    const onCardClick = menu=>{
        setMenuModalData(menu);
        setMenuModalOpenState(true);
    }

    const LoginEnd = (data, menuId) =>{
        setUserInformation(data);
        onOrderButtonClick(menuId);
    }

    const onOrderButtonClick = menuId => {
        /* 로그인 시키기 */
        if(userInformation == null){
            console.log("login");
            setInfoModalState(<LoginModalElement onFinish={data=>LoginEnd(data, menuId)}/>);
            setInfoModalOpenState(true);
            return;
        }

        /* 배달하기위한 정보 입력 */
        if(userInformation.address == null){
            console.log("address");
            setUserInformation("배달하기위한 정보가 추가된 userInformation");
        }

        /* 가맹점 선택하기 */
        if(selectedFranchise == null){
            console.log("select Franchise");
            selectFranchise("가맹점 리스트를 보고 선택");
        }

        /* 주문하기 */
        console.log(menuId);
    }

    return (
        <>
            <section className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 pb-12">
                {menusInCategory?.map(menu => (
                        <Card key={menu.id} title={menu.menu} imgSrc={menu.url == null ? menuDefault : menu.url} onClick={()=>onCardClick(menu)}>
                            <div>{menu.price} 원</div>
                        </Card>
                    )
                )}
            </section>
            <Modal isOpen={menuModalOpenState} onRequestClose={()=> setMenuModalOpenState(false)}>
                <img src={menuModalData.url == null ? menuDefault : menuModalData.url} style={{height: "300px"}}/>
                <div>{menuModalData.menu}</div>
                <div>{menuModalData.price}</div>
                <Button onClick={()=>onOrderButtonClick(menuModalData.id)}>주문하기</Button>
            </Modal>
            <Modal isOpen={infoModalOpenState} onRequestClose={()=>setInfoModalOpenState(false)}>
                {infoModalState}
            </Modal>
        </>
    )
}

export default MenuList;
