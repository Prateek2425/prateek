import { useEffect } from 'react';
import HeaderMin from '../components/HeaderMin';
import queryString from 'query-string';
import '../css/components.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import Url from '../data/urls.json';
import swal from 'sweetalert';

export default function NewTraveller() {
    
    const { id, uname, iid, stu } = queryString.parse(window.location.search);

    useEffect(() => {
        // alert(uname);
        if (localStorage.getItem("token") === null) {
            alert("You are not logged in. Please login first !!!");
            history.push('/');
        }
    }, []);

    const history = useHistory();

    const connectHandle = () => {
        var endPoint = "";
   
        if(stu == 0){
            endPoint = "askToAddConnection";
        }else{
            endPoint = "confirmToAddConnection";
        }

        
            fetch(Url.baseUrl + endPoint, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: iid,
                    connectionId: id
                })
            })
            .then(res => res.json())
            .then(res => {
                //alert(res);
                if (res.code === 200) {
                    swal("Connection request", "A notification sent for connection!", "success");
                    history.push("/notify");
                }
            })
            .catch(err => console.log(err));
        
    }

    return(

        <>

            <HeaderMin title="New Traveller" />

            <div className="NewTravCont">
                <div className="newTravTxt">Hi {uname} we found a new traveller who is also going to your destination.</div>
                <div className="newTravStat">Status</div>
            </div>
            <div className="NewTravInfoCont">
                {/*<div className="NewTravInfoLeft">Gender :</div>
                <div className="NewTravInfoRight">Male</div>
                <div className="NewTravInfoLeft">Age Range :</div>
                <div className="NewTravInfoRight">30 - 35</div>
                <div className="NewTravInfoLeft">Joined :</div>
                <div className="NewTravInfoRight">August 19, 2020</div>*/}
                
                <div className="NewTravBtnCont">
                
                    <span><button className="NewTravBtn1" onClick={connectHandle}>Connect</button></span>
                    <span><button className="NewTravBtn2" onClick={() => history.push("/notify")}>Decline</button></span>
                </div>

                <div className="NewTravNote">Note :- Traveller can contact to show.</div>

            </div>
        
        </>

    );
}