
import { useState, useRef } from 'react'
import play from './images/play.png'
import pause from './images/pause.png'
import baawla from './songs/baawla.mp3';
import bhool from './songs/bhoolBhulayia2.mp3';
import chand from './songs/chand.mp3';
import excuse from './songs/excuse.mp3';
import jaago from './songs/jaagoBakre.mp3';
import jalebi from './songs/jalebi.mp3';
import jugnu from './songs/jugnu.mp3';
import kamaal from './songs/kamaal.mp3';
import nacho from './songs/nachonacho.mp3';
import paagal from './songs/paagal.mp3';
import next from './images/next.png';
import prev from './images/previous.png';


function SongItems() {
    const [isPlaying, setisPlaying] = useState(false);
    const [i,setI] = useState(-1);
    var audioRef = useRef(null);
    var audio = new Audio();
    const [songItem, setsongItem] = useState({
        title: "",
        imageUrl: "",
        duration: 0
    });
    const [currTime, setcurrTime] = useState([0,0]);

 
  let songsList =
 

       [
         {
             
            "url": baawla,
        "i": "one",
        "title": "Badshah - Baawla | Uchana Amit Ft. Samreen Kaur | Saga Music  ",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b2736ba18599bba9a6685cb766a3"}, 

        {
             
            "url": bhool,
            "i": "two",
        "title": "Bhool Bhulaiyaa 2 (Title Track) |Pritam, Tanishk, Neeraj, Anees B",
        "imageSrc": "https://i.scdn.co/image/ab67616d00001e02aca38bbbc4bdaa23155b4802"},
        {
             
            "url": chand,
            "i": "three",
        "title": "Chand Wala Mukhda Devpagli, Jigar Thakor ",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b273987be58e1c20c3edc45dc77d"},
        {
             
            "url": excuse,
            "i": "four",
        "title": "Excuses | AP Dhillon | Gurinder Gill | Intense",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b2738c02ba41ac469500b7385b4d"},
        { 
            "url": jaago,
            "i": "five",
        "title": "Pushpa: Jaago Jaago Bakre | Allu Arjun | Vishal D | DSP | Sukumar",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b2739d4275d1b9ac06ec9b006653"},
        { 
            "url": jalebi,
            "i": "six",
        "title": "Tesher x Jason Derulo - Jalebi Baby",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b27358ad3c6d598cb14b31c334dc"},
        { 
            "url": jugnu,
            "i": "seven",
        "title": "Badshah - Jugnu | Nikhita Gandhi | Akanksha Sharma",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b273efe374ffabeb543840dee228"},
        { 
            "url": kamaal,
            "i": "eight",
        "title": "Kamaal Song | Uchana Amit | ft. | Badshah | Alina ",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b2735317d47ec6f572f0eb083f30"},
        { 
            "url": nacho,
            "i": "nine",
        "title": "Naacho Naacho RRR - NTR, Ram Charan | Vishal Mishra & Rahul",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b2734c30b2c8eaa6ed1b01c518a6"},
        { 
            "url": paagal,
            "i": "ten",
        "title": "Badshah - Paagal",
        "imageSrc": "https://i.scdn.co/image/ab67616d0000b273c81e048d793858df7a1dbb6f"} 
    
    ] 
 

  const timeUpdate = (time) => {
    const minutes = Math.floor(time/60);
    const seconds = Math.floor((time/60 - minutes)*60);
    return [minutes,seconds];
  }

const revTime = ([mins,sec])=>{
    return ((mins*60)+sec);
}

  return (
    <>
    <div className='d-flex'>
    <div className='p-2' style={{maxWidth: 'auto'}}>
    <ul class="list-group my-4">
       {songsList.map((element,index)=>{ return(
        <li key={element.i} class="list-group-item mx-4 my-1 " style={{backgroundColor:'#1ed760'}}><div class="d-flex justify-content-between"><div class="dot " style={{backgroundImage:    `url(${element.imageSrc})`}}></div>
        <div style={{fontWeight:'bold'}}>{element.title}</div><div> 
          <button className='playBtn' style={{cursor: 'pointer' ,
        borderRadius:'100%' ,
        backgroundImage:  `url(${play})`, 
           backgroundSize:'15px 15px', 
        height:'25px', 
        width:'25px', 
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat',
        border: 'none',
        backgroundColor : '#1ed760'}}
        id={index}  onClick={()=>{
            if(isPlaying ===true){
                    if(i===index){
                        setcurrTime(timeUpdate(audioRef.current.currentTime));
                        document.getElementById(index).style.backgroundImage = `url(${play})`;
                        audioRef.current.pause();
                        setisPlaying(false);
                        audio.onloadedmetadata = function(){
                            setsongItem({
                                title: element.title,
                                imageUrl: element.imageSrc,
                                duration: audioRef.current.duration
                            });
                            
                        }
                    }
                    else{
                        setI(index);
                        audioRef.current.pause();
                        var ele = document.getElementsByClassName('playBtn');
                        for(var ind = 0;ind<ele.length;++ind){
                            ele[ind].style.backgroundImage = `url(${play})`;
                        }
                        document.getElementById(index).style.backgroundImage = `url(${pause})`;
                        audio = new Audio(element.url);
                        audioRef.current = audio;
                        audioRef.current.play();
                        setisPlaying(true);
                        audio.onloadedmetadata = function(){
                            console.log(audioRef.current.duration);
                            setsongItem({
                                title: element.title,
                                imageUrl: element.imageSrc,
                                duration: audioRef.current.duration
                            });
                            
                        }
                        setInterval(() => {
                            setcurrTime(timeUpdate(audioRef.current.currentTime));
                            if(audioRef.current.currentTime === audioRef.current.duration){
                              
                                if(index+1 < songsList.length){
                                    document.getElementById(index+1).click();
                                }else{
                                    document.getElementById(0).click();
                                }
                            }
                    }, 1000);
                    }
                
        }
           else{
            if(i === index){
                document.getElementById(index).style.backgroundImage = `url(${pause})`;
                setI(index);
                audioRef.current.play();
                setisPlaying(true);
                audio.onloadedmetadata = function(){
                    console.log(audioRef.current.duration);
                    setsongItem({
                        title: element.title,
                        imageUrl: element.imageSrc,
                        duration: audioRef.current.duration
                    });
                }
                setcurrTime(timeUpdate(audioRef.current.currentTime));
                setInterval(() => {
                    setcurrTime(timeUpdate(audioRef.current.currentTime));
                    if(audioRef.current.currentTime === audioRef.current.duration){
                        
                        if(index+1 < songsList.length){
                            document.getElementById(index+1).click();
                        }else{
                            document.getElementById(0).click();
                        }
                    }
            }, 1000);
            }
            else{
                document.getElementById(index).style.backgroundImage = `url(${pause})`;
            setI(index);
            audio = new Audio(element.url);
            audioRef.current = audio;
            audioRef.current.play();
            setisPlaying(true);
            setcurrTime(timeUpdate(audioRef.current.currentTime));
            audio.onloadedmetadata = function(){
                console.log(audioRef.current.duration);
                setsongItem({
                    title: element.title,
                    imageUrl: element.imageSrc,
                    duration: audioRef.current.duration
                });
                
            }
            setInterval(() => {
                setcurrTime(timeUpdate(audioRef.current.currentTime));
                if(audioRef.current.currentTime === audioRef.current.duration){
                   
                    if(index+1 < songsList.length){
                        document.getElementById(index+1).click();
                    }else{
                        document.getElementById(0).click();
                    }
                }
        }, 1000);
        
            }
               }
           }
         }></button>
          </div></div></li>)})}
</ul>
</div>
<div class="p-2" style={{width: '50%',  textAlign: 'center'}}>
  <div style={{background:i===-1?'#292929 50% 50%/ cover':`url(${songItem.imageUrl})  50% 50%/ cover `, width: '50%', height:'50%' , margin: '20% 25% 5% 25%'}}/>
  <label for="customRange" class="form-label" style={{alignContent:'center',color:'#1ed760',fontWeight:'bold'}}>{i===-1?'Press play buttons to play respective songs':songItem.title}</label>
  <div class="d-flex justify-content-between" ><label for="customRange" class="form-label" style={{alignContent:'left',color:'#1ed760',fontWeight:'bold'}}>{currTime[0]<10?`0${currTime[0]}`:currTime[0]}:{currTime[1]<10?`0${currTime[1]}`:currTime[1]}</label>
  <label for="customRange" class="form-label" style={{alignContent:'right',color:'#1ed760',fontWeight:'bold'}}>{timeUpdate(songItem.duration)[0]<10?`0${timeUpdate(songItem.duration)[0]}`:timeUpdate(songItem.duration)[0]}:{timeUpdate(songItem.duration)[1]<10?`0${timeUpdate(songItem.duration)[1]}`:timeUpdate(songItem.duration)[1]}</label></div>
<input type="range"  style={{cursor:'pointer',overflow: 'hidden', width:'100%'}} id="customRange" min="0" max={songItem.duration} defaultValue="0" value={revTime(currTime)} onChange={(e)=>{ audioRef.current.currentTime = e.target.value}}/>
<div class="btn-group" role="group">
  <button type="button" className='mx-2' style={{cursor: 'pointer' ,
        borderRadius:'100%' ,
        backgroundImage:  `url(${prev})`, 
           backgroundSize:'25px 25px', 
        height:'50px', 
        width:'50px', 
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat',
        backgroundColor: '#1ed760',
        border: 'none',

        }}  onClick={()=>{
                
                if(i-1 >=0){
                    document.getElementById(i-1).click();
                }}}  class={`btn btn-primary mx-2 ${i+1>0 && i!==0?'enabled':'disabled'}`}/>
  <button type="button"  style={{cursor: 'pointer' ,
        borderRadius:'100%' ,
        backgroundImage:  isPlaying===true?`url(${pause})`:`url(${play})`, 
        backgroundSize:'25px 25px', 
        height:'50px', 
        width:'50px',  
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat',
        backgroundColor: '#1ed760',
        border: 'none'}} onClick={()=>{
            document.getElementById(i).click();
            }}  class={`btn btn-primary mx-2 ${i+1>0?'enabled':'disabled'}`}/>
  <button type="button"  style={{cursor: 'pointer' ,
        borderRadius:'100%' ,
        backgroundImage:  `url(${next})`, 
        backgroundSize:'25px 25px', 
        height:'50px', 
        width:'50px', 
        backgroundPosition:'center', 
        backgroundRepeat:'no-repeat',
        backgroundColor: '#1ed760',
        border: 'none'
        }} onClick={()=>{
            if(i+1 <songsList.length){
                document.getElementById(i+1).click();
            }}}  class={`btn btn-primary mx-2 ${i+1>0 && i+1<songsList.length?'enabled':'disabled'}`}/>
</div>
</div>
</div>
  </>
  )
}

export default SongItems