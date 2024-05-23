import HeaderItem from "./HeaderItem.jsx";
import logoImg from "/src/assets/S-Chicked-Logo.png";
import {NavLink} from "react-router-dom";


function Header() {
    const items = [
        {
            id: 1,
            name: "주문하기",
            url: "/order"
        },
        {
            id: 2,
            name: "주문내역",
            url: "/history"
        },
        {
            id: 3,
            name: "장바구니",
            url: "/basket"
        }
    ]

    const getClassNameByActive = ({isActive}) => {
        const defaultClassName = 'inline-block text-white align-middle rounded-md px-3 py-2 m-auto ';
        return defaultClassName + (isActive ? 'bg-red-700' : 'hover:bg-red-500');
    }


    return (
        <header className="flex space-x-4 gap-1 bg-red-600 p-2">
            <div className="max-h-12 w-12">
                <img src={logoImg} style={{height: "100%"}} alt="schicken Logo"/>
            </div>
            <nav>
                {items?.map(item =>
                    <NavLink key={item.id} to={item.url} className={getClassNameByActive}>
                        <HeaderItem
                            name={item.name}
                        />
                    </NavLink>)}
            </nav>
        </header>
    )
}

export default Header;
