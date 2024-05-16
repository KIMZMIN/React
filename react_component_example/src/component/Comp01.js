function Comp01 (){
    const style = {
        color: "green",
        backgroundColor: "orange"
    }
    const modalYN = true;
    const name = null;
    return(
        <>
          {modalYN ? <div>모달 Yes</div> : null} {/*로그인여부*/}
          { name === "홍길동" ? <div>홍길동 ok</div> : <div>홍길동 no</div>} 
          { name && <div>1번 홍길동입니당</div>} {/*name이 있으면 실행*/}
          { name || <div>2번 홍길동아닙니다...</div>} {/* name이 없으면 실행, 
          그니까 둘중에 왼쪽부터 true인게 나오기때문에 name이 false면 2번이 나옴*/}
          {/* ===쓰는게 좋을수도 타입까지 비교 */}

           
          {/*주석~~~~~*/}
          <h2 style={style}>Comp...</h2>
        </>
    )
}

export default Comp01;