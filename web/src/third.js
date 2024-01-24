// import logo from './logo.svg';
// import './App.css';
// import React,{useState} from 'react'; 
// // function Osszes(props){
// //   const {name,image,text}=props;
// //   return <div className="mau"><h1>{name}</h1> 
// //      <p>{text}</p>
// //      <img src={image}></img>
// //     <br></br>
// //     <input type={"text"} placeholder={"write"}></input><br></br>
// //     <button>klikk</button></div>
// // }



// function App() {
//   const profile0={
//     name:"djimi",
//     text:"tanar",
//     image:"https://i.pinimg.com/236x/23/06/eb/2306ebeea93710db84502cfa70bf76a2.jpg",
//     like:false,
//   } ;
//   const profile1={
//     name:"djulian",
//     text:"konyvelo",
//     image:"https://koloknet.hu/files/16/mokus_adorjan_peter.jpg",
//     like:false,
//   };
//   const profile2={
//     name:"djordje",
//     text:"direktor",
//     image:"https://kep.index.hu/1/0/2999/29994/299941/29994147_2302839_3b224bbe902673b87b09fdb23014f682_wm.jpg",
//     like: false,
//   };
//   const initialdatabase=[profile0,profile1,profile2]
// const initialnumber=0;
// const [number,setnumber]=useState(initialnumber);

// const [database,setdatabase]=useState(initialdatabase);

// const {name,image,text,like}= database[number];

// const found= database.find((profile)=>{return profile.name==="djordje"})
// console.log("found",found);
// const found2= database.filter((number)=>{return number})
// console.log("found2",found2);
  
  
//   return (
//     <div className="App">
   
//      <h1>{name}</h1> 
//      <p>{text}</p>
//      <img src={image}></img>
//     <br></br>
//     <br></br>
//     <input type={"text"} placeholder={"write"}></input><br></br>
//      <button onClick={()=> {
//       setdatabase(database.map((profile)=>{
//       if(profile.name===name) {
//         profile.like=!like;
//       }
//       return profile;
//       }))}}>{like ?'like' :'unlike'}</button> 
//     <br></br>
//     <button onClick={()=>{ if(0 !==number)setnumber(number-1)}}>prev</button>
//     <button onClick={()=>{ if(database.length-1 !==number)setnumber(number+1)}}>next</button>
//     </div>
//   );
// }

// export default App;
