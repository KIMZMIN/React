// list, map
import { useState } from "react";
import Product from "./Product";
function Comp06(){
    let [prod, setProducts] = useState([
        {no:1, name:"aa", price: 100},
        {no:2, name:"bb", price: 500},
        {no:3, name:"cc", price: 700}, //setState로 변환
      ])
    
      
    const trDel = (no)=>{
        //배열의 첫번째 요소 삭제
        let newProduct = [];
        for(let i=0; i<prod.length; i++ ){
            if( no !== prod[i].no )newProduct.push(prod[i]);
        }
        setProducts(newProduct); 
        console.log(prod)
    }
    const lis = prod.map(p=><Product onClick={trDel} 
                                        prod={p} 
                                        key={p.no}/>)
    return(
        <>
        <h3>Comp06</h3>
        <button onClick={()=>{trDel()}}>삭제</button>
        <table>
            <thead>
                <tr>
                    <th>번호</th><th>상품명</th><th>가격</th>
                </tr>
            </thead>
            <tbody>
                {lis}
            </tbody>
        </table>
        </>
    )
}

export default Comp06;