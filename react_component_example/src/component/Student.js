const Student = (props)=>{
    const {no, name} = props.std;
    return(
        <div>
            <h3>{no}</h3>
            <h3>{name}</h3>
        </div>
    )
}

export default Student;