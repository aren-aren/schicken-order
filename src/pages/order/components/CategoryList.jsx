import {useRecoilState} from "recoil";
import {categoryState, formatedMenusState, nowCategoryState} from "../../../commons/recoil/atom.js";
import {menuManager} from "../menuManager/menuManager.js";

function CategoryList(){
    const [categories] = useRecoilState(categoryState);
    const [nowCategory, setNowCategory] = useRecoilState(nowCategoryState);
    const [,setMenusInCategory] = useRecoilState(formatedMenusState);

    const getClassName = id => {
        const defaultClassName = "border-b-2 flex-1 min-w-fit ";
        return defaultClassName + (id === nowCategory ? "text-red-600 font-bold !border-b-red-600" : "hover:text-red-400 hover:font-bold hover:!border-b-red-400");
    }

    const onClick = id=>{
        menuManager.getMenusInCategory(id)
            .then(data=>setMenusInCategory(data));
        setNowCategory(id);
    }

    return (
        <nav className='flex flex-wrap pb-3 border-b-2 border-black gap-3 mb-8'>
            {categories?.map(category =>
                <div
                    key={category.id}
                    onClick={()=>onClick(category.id)}
                    className={getClassName(category.id)}
                    style={{border : "solid rgba(0,0,0,0)"}}
                >
                    {category.name}
                </div>
            )}
        </nav>
    )
}

export default CategoryList;
