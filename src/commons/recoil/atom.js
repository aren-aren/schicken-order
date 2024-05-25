import {atom} from "recoil";

export const categoryState = atom({
    key : "category",
    default : []
})

export const nowCategoryState = atom({
    key : "nowCategory",
    default : 0
})

export const menusInCategoryState = atom({
    key : "menusInCategory",
    default : {}
})
