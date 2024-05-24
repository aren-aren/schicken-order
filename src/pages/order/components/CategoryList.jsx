import {useRecoilState} from "recoil";
import {categoryState} from "../../../commons/recoil/atom.js";

function CategoryList(){
    const [categories] = useRecoilState(categoryState);

    return (
        <nav className='flex'>
            {categories?.map(category =>
                <div key={category.id}>
                    {category.name}
                </div>)}
        </nav>
    )
}

export default CategoryList;
