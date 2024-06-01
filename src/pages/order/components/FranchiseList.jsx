import {useRecoilState} from "recoil";
import {franchiseListState} from "../../../commons/recoil/atom.js";
import {useEffect} from "react";
import {franchiseManager} from "../franchiseManager/franchiseManager.js"

function FranchiseList(){

    const [franchises, setFranchises] = useRecoilState(franchiseListState);

    useEffect(()=>{
        franchiseManager.getFranchises()
            .then(data => setFranchises(data));
    }, [])

    return (
        <>
          <input list="franchiseList" type="text"/>
          <datalist id="franchiseList">
              {franchises.map(franchise => <option key={franchise.id}>{franchise.name}</option>)}
          </datalist>
        </>
    )
}

export default FranchiseList;
