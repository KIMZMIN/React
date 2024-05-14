import './App.css'
import { useState } from "react";
function Header(props){
  return (
    <div>
      <header>
        <h1>
            <a href="/" onClick={(event)=>{
              event.preventDefault();
              props.onChangeMode();
            }}>{props.title}</a>
        </h1>

        <p>　.　 /￣| <br></br>
            　　｜ .｜따봉하나<br></br>
          　 ,―′　 .|.∧ ∧ 드립니다<br></br>
          　 | ＿_）(＾ω＾)<br></br>
          　 | ＿_）|⊂)<br></br>
          　 | ＿_）|-Ｊ<br></br>
          　  ヽ＿)ノ<br></br>
            </p>
      </header>
    </div>
  )
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i]
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }
  return ( 
    <div>
        <nav>
          <ol>
             {lis}
          </ol>
       </nav>
    </div>
  )
}

function Article(props){
  return (
    <div>
       <article>
          <h2>{props.title}</h2>
          {props.body}
       </article>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics =[
    {id: 1, title: 'HTML 🐸', body: 'html'},
    {id: 2,title: 'CSS🍥', body: 'cssssss'},
    {id: 3,title: 'JAVASCRIPT🌞', body: 'jssssss'}
  ]

  let content = null;
  if(mode === 'welcome'){
    content = <Article title="WELCOME" body="🐠🐠🐠"/>
  } else if(mode === 'read'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
       if(topics[i].id === id){
         title = topics[i].title;
         body = topics[i].body;
       }
    }
    content = <Article title={title} body={body}/>
  }
  return (
    <div>
      <Header title="🐠REACT👽" onChangeMode={()=>{
        setMode("welcome");
        alert('(∪.∪ )...zzz');
      }}>
      </Header>
       
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode("read");
        setId(_id);
        alert(_id);
      }}/>

       {content}
    </div>
  );
}


export default App;
