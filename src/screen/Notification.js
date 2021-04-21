import { Link, useHistory } from 'react-router-dom';
import varimg from '../img/banners/ad.jpg';
import headerStyle from '../css/headerMain.module.css';
import rightArrowIcon from '../img/icons/headerMinBack.png';
import '../css/components.css';
import { useState, useEffect} from 'react';
import loading from '../img/icons/loading.gif';
import profilepic from '../img/icons/profile.png';
import Url from '../data/urls.json';
import swal from 'sweetalert';

export default function Notification() {
    const history = useHistory();
    // const [name, setName] = useState(JSON.parse(localStorage.getItem('token')).userName);
    const [rooms, setRooms] = useState(null);

    useEffect( () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6MSwidHlwZSI6ImRldmljZSIsImlhdCI6MTYxNjU2MjM2NX0.n8dGBHbi9_I6JObUpSEa2k-fC-mcwVK-JFh920344_o");
        
        var name = JSON.parse(localStorage.getItem("token")).userId;
        console.log("userid : "+name)
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
        
          redirect: 'follow'
        };
        
        fetch("http://13.233.154.141:5000/api/listNotifications/" + name ,  requestOptions)
          .then(response => response.json())
          .then(res=> {
            console.log(res);
            if (res.data === undefined){
                alert("No chat");
                setRooms([]);
            } else {
                setRooms(res.data);
            }
            console.log(res.data)}) 
          .catch(error => console.log('error', error));
    }, []);

    var named = JSON.parse(localStorage.getItem("token")).userName;
    console.log("prateek",named);

    if (!rooms) {
        return (<div style={{display: "flex", alignContent: "center", justifyContent: "center"}}><img style={{marginTop: "20%", width: "100px"}} src={loading} alt="" /></div>)
    } else {
    

    const updateStatus = (ied,urlUpdate) => {


            fetch(Url.baseUrl + "updateStatusOfNotification", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ied: ied
                })
            })
            .then(res => res.json())
            .then(res => {
                //alert(res);
                if (res.code === 200) {
                   
                    history.push(urlUpdate);
                }
            })
            .catch(err => console.log(err));

    }
  
    return (

        <>
            <div className="headerMinCont">
                <div className={headerStyle.headUpNavMain1} onClick={() => history.push(`/`)}><img src={rightArrowIcon} alt="" /></div>
                <div className="headerMinTitle">Notifications</div>
            </div>

            <div style={{paddingBottom: '60px', float: 'left', width: '100%'}}>
                {rooms.map((currElm, index) => { 
                    let linkUrl = '';
                    let concatMsg = '';
                    if(currElm.room != null){
                        linkUrl = `/chat?name=${named}&room=${currElm.room}&username=${currElm.senderName}&profile=${currElm.senderPic||profilepic}`;
                    }else{
                        linkUrl = `/NewTraveller?id=${currElm.senderId}&uname=${named}&iid=${JSON.parse(localStorage.getItem("token")).userId}&stu=${currElm.status}`;
                    }

                    if(currElm.status == 2){
                        concatMsg = ' by '+currElm.senderName+'.';
                    }

                    return (<>
                    {currElm && (
                        <>
                            <div className="noti noti0" key={index} onClick={() => updateStatus(currElm.id,linkUrl)} >
                               
                                    <div className="noti01">
                                        {currElm.senderPic ? <img src={currElm.senderPic} alt="" /> : <img src={profilepic} alt="" />}
                                    </div>
                            
                                    <div className="noti02">
                                        <div className="noti021">
                                            <div className="noti0211"><span className={currElm.readMsg ? 'notiread' : 'noti02111'}>{currElm.message}{concatMsg}</span></div>
                                            <div className="noti0212">{new Date(currElm.date).getDate()} - {new Date(currElm.date).getMonth()+1} - {new Date(currElm.date).getFullYear()}</div>
                                        </div>
                                        
                                    </div>
                           
                            </div>
                        </>
                    )}
                </>)


                })}
            </div>

        </>

    );}
}