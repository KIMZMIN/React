// list, map
import Product from "./Product";
function Comp03(props){
  
    const lis = props.prod.map(p=> 
           //<Product no={p.no} name={p.name} price={p.price}/>
           <Product prod={p} key={p.no}/>
        )
    return(
        <>
        <h3>Comp03</h3>
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

export default Comp03;