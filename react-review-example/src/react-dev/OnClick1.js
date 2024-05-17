function Button({ onClick, children }) {
  return (
    <button onClick={()=>{onClick('자식전달')}}>
      {children}
    </button>
  );
}

function PlayButton({ movieName, onClickPB }) {
  function handlePlayClick(msg) {
    onClickPB();
    alert(`${msg}Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Play "{movieName}"
    </Button>
  );
}

function UploadButton({onClickUP}) {
  return (
    <Button onClick={() => onClickUP()}>
      Upload Image
    </Button>
  );
}

function Toolbar({onClick1, onClick2}) {
  return (
    <div>
      <PlayButton onClickPB={onClick1} movieName="Kiki's Delivery Service" />
      <UploadButton onClickUP={onClick2}/>
    </div>
  );
}

function OnClickfunc() {
  return (
    <div>
       <Toolbar onClick1={()=> alert("click11111")} onClick2={()=> alert("click22222")}></Toolbar>
    </div>
  );
}

export default OnClickfunc;
