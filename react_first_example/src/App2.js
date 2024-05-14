import './App.css'
import FilterableProductTable from './product';
function Header(props){
  return (
    <div>
      <header>
        <h1>
            <a href={props.link}>{props.title}</a>
        </h1>
      </header>
    </div>
  )
}

function Nav(props){
  const lis = [];
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i]
      lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
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

function Gallery(props){
  let lis = props.images.map( g=>
    <div className="col p-1">
        <img key={g["description"]} src={g["imageUrl"]} alt={g["description"]} width="100" height="80"
        ></img>
    </div> )
  // const lis = [];
  // for(let i=0; i < props.images.length; i++){
  //   let g = props.images[i];
  //   lis.push(<div className="col m-2">
  //               <img src={g["imageUrl"]} alt={g["description"]} width="200" height="200"></img>
  //           </div>
  // )
  // }
  return(
      <div className="container">
          <div className="row">
              {lis}
          </div>
      </div>
  )
}

function App() {
  const images = [{
    "description": "cat1",
    "imageUrl": "https://pbs.twimg.com/media/FGGLKZHVQAIQ9ys.jpg"
  },
  {
    "description": "dog1",
    "imageUrl": "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525044426035fvqh.jpg"
  },
  {
    "description": "ham",
    "imageUrl": "https://cdn.maily.so/y1wrfct6es0xemvbrdxm3rybmwq0"
  },
  {
    "description": "bird",
    "imageUrl": "https://mblogthumb-phinf.pstatic.net/MjAyMzEyMTRfMjkw/MDAxNzAyNTMyNDIyNjk2.zuSmnU9A5CIqaTcS-6M2Aw4cTS5wuhLcIyqcJkQ4R3Ug.54j3I4slGCpt8lzQ37usXPcnDnhPt6jz6AFSyOyEmLIg.JPEG.qmfosej/IMG_8742.JPG?type=w800"
  },
  {
    "description": "cat2",
    "imageUrl": "https://img.animalplanet.co.kr/news/2019/11/28/700/f9in35p5660ce423x290.jpg"
  },
  {
    "description": "cat3",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHeCfJociimhuNkxidbLCp4jdjb92MTSdyTGrWkzIUXA&s"
  }
]
  const topics =[
    {id: 1, title: 'HTML 🐸', body: 'html'},
    {id: 2,title: 'CSS', body: 'cs...s'},
    {id: 3,title: 'JAVASCRIPT', body: 'jsjsjs'}
  ]

  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  return (
    <div>
      <FilterableProductTable products={PRODUCTS}/>
       <Gallery images={images}/>
       <Header title="🐠REACT👽" link="/"/>
       <Nav topics={topics}/>
       <Article title="🦀" body="🐬"/>
    </div>
  );
}


export default App;
