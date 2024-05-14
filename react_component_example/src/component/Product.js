

function Product(props){
    //const {no, name, price} = props;
    const p = props.prod;
    return(
       // <tr><td>{no}</td><td>{name}</td><td>{price}</td></tr>
        <tr onClick={()=>props.onClick(p.no)}>
            <td>{p.no}</td>
            <td>{p.name}</td>
            <td>{p.price}</td>
        </tr>
    )
}

export default Product;