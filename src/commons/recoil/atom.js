import {atom, selector} from "recoil";

/* 카테고리 종류 */
export const categoryState = atom({
    key : "category",
    default : []
})

/* 현재 카테고리가 몇번인지 */
export const nowCategoryState = atom({
    key : "nowCategory",
    default : 0
})

/* 선택된 카테고리의 메뉴 */
export const menusInCategoryState = atom({
    key : "menusInCategory",
    default : []
})

/* 프랜차이즈 가맹점의 리스트 */
export const franchiseListState = atom({
    key : "franchiseList",
    default : []
})

/* 로그인된 회원 정보 */
export const userInformationState = atom({
    key : "userInformation",
    default : null
})

/* 선택한 가맹점 정보 */
export const selectedFranchiseState = atom({
    key : "selectedFranchise",
    default : null
})

/* selector */
/* 메뉴의 가격에 구분자를 넣어줌 */
export const formatedMenusState = selector({
    key : "formatedMenus",
    get : ({get})=>{
        const menus = get(menusInCategoryState);

        return menus?.map(menu => {return {...menu,  price : moneyFormat(menu.price)}})
    },
    set : ({set}, newValue) => set(menusInCategoryState, newValue.menus)
})

/* utils */
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
