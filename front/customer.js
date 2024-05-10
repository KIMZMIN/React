function customerList(){
    fetch("http://localhost:3000/customer")
    .then(result => result.json())
    .then(result => {
        console.log(result)
    for( r of result){
        const newTag = `<tr>
        <td class="text-center">${r.id}</td>
        <td class="text-center">${r.name}</td>
        <td class="text-center">${r.email}</td>
        <td class="text-center">${r.phone}</td>
        <td class="text-center">${r.address}</td>
        <td class="text-center">
            <button class="btnUpd">조회</button>
            <button class="btnDel">삭제</button>
        </td>
    </tr>`
    tlist.insertAdjacentHTML("beforeend", newTag);
    }
    });
}

customerList();

function addCustomer(){
    fetch("http://localhost:3000/customer")
    .then(result => result.json())
    .then(result => {
        console.log(result)
    for( r of result){
        
    tlist.insertAdjacentHTML("beforeend", newTag);
    }
    });
}