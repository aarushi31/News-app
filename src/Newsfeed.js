import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react'
//087e75c25ac648b8be9f32e27edeb0e3
//007c1bdab52043f5afcfa60096fc2a9a
function Newsfeed({handleLogout}) {
  const [news,setNews]=useState([]);
  const [query,setquery]=useState('');
  const [optionVal,setOption]=useState('Select a category');
  const [optionResult,setOptionResult]=useState([]);
  const API_KEY="3f92b84531104690b00acfc18d228f21"

  //headlines
  useEffect(()=>{
    if(optionVal==='Select a category'){
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
    .then(res=>res.json())
    .then((data)=>{
      setNews(data.articles)
      // console.log(data.articles)
      console.log(news)})
    .catch(err=>console.log(err))
  }
  
else if(optionVal!=='Select a category'){
  setquery('');
fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${optionVal}&apiKey=${API_KEY}`)
.then((res)=>res.json())
.then((data)=>{
  setNews(data.articles);
  console.log(optionResult)
})
}

},[news]);

 
  
  const result=()=>{
    if(news){
      return(
        <div>
          <h1 className="App-header">Headlines</h1>
       {
        
        news.map((n)=>{
          return(
            <div className="card">
              <center>
            <img src={n.urlToImage} style={{width:"30vw"}}/>
            </center>
            <div className="text">
            <h3>{n.title}</h3>
            <span>By <b>{n.author}</b>  Published at {n.publishedAt}</span>
            <p>{n.description}</p>
            <a href={n.url} target="_blank">Read full news here</a>
            </div>
            </div>
          )
        })
      } 
        </div>
      )
    } 
  }
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="nav-brand">NEWS</h2>
      {/* <input type="text" placeholder="Search something" value={query} onChange={(e)=>setquery(e.target.value)}/> */}
      <select value={optionVal} onChange={(e)=>setOption(e.target.value)} defaultValue='Select a category' placeholder='Select a category'>
        <option>Select a category</option>
        <option>business</option>
        <option>entertainment</option>
        <option>general</option>
        <option>health</option>
        <option>sports</option>
        <option>science</option>
        <option>technology</option>
      </select>
      <button style={{overflow:"hidden",width:"100px",backgroundColor:"rgb(204, 70, 70)"}} onClick={handleLogout}>Logout</button>
      </nav>
      {result()}
    </div>
  );
}

export default Newsfeed;
