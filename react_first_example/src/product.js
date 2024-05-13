function SearchBar(){
    return (
        <form>
            <input type="text" placeholder="Search..."/>
            <label><input type="checkbox"/>Only show products in stock</label>
        </form>
    )
}

function ProductCategoryRow({category}){
    return (
        <tr>
           <th colSpan="2">{category}</th>
        </tr>
    )
}

function ProductRow({product}){
    let name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>{product.name}</span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
function ProductTable(props){
    let lis = [];
    let lastCate = null;
    props.products.forEach(p=>{
        if(p.category !== lastCate)
            lis.push(<ProductCategoryRow category={p.category}/>)
        lis.push(<ProductRow key={p.name} product={p}/>)
        lastCate = p.category;
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow/>
                {lis}
            </tbody>
        </table>
    )
}



function FilterableProductTable(props){
    return(
        <div>
            <SearchBar/>
            <ProductTable products={props.products}/>
        </div>
    )
}


export default FilterableProductTable;