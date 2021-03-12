/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from '../css/profile.module.css';
import sidebarIcon from '../img/icons/sidebar.png';
import settingsIcon from '../img/icons/settingsIcon.svg';
import moreIcon from '../img/icons/more.svg';

import ds from '../css/profileTable.module.css';
import adminPro from '../img/demo/24.png';
import url from '../data/urls.json';
import loading from '../img/icons/loadingHostingList.gif';
import menuIcon from '../img/icons/menuBlack.svg';
import addButton from '../img/icons/add-user-button.svg';

import editIcon from '../img/icons/pencilGreyIcon.svg';
import deleteIcon from '../img/icons/deleteRedIcon.svg';
import userIcon from '../img/icons/user.png';
import headerStyle from '../css/headerMain.module.css';

import v1 from '../img/icons/bed.png';
import v2 from '../img/icons/bath.png';
import v3 from '../img/icons/year.png';

export default function profile() {

    let history = useHistory();
    const [sideBar, setSideBar] = useState(false);
    const [hosting, setHosting] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            history.push('/');
        }
        // console.log(JSON.parse(localStorage.getItem("token")).userId);
    }, []);

    // tabs
    const [tab0, setTab0] = useState(true);
    const [tab1, setTab1] = useState(false);
    const [tab2, setTab2] = useState(false)
    const activateListing = () => {
        fetch(url.baseUrl+"host/userid/"+JSON.parse(localStorage.getItem("token")).userId, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.data);
            setHosting(res.data);
        })
        .catch(error => console.log(error));
    }

    // mobile
    const [mobSideBar, setMobSideBar] = useState(false);
    const [tabMob0, setTabMob0] = useState(true);
    const [tabMob1, setTabMob1] = useState(false);
    
    const signOutSubmit = () => {
        localStorage.removeItem("token");
        history.push("/");
    }

    return (
        <>
        
            <div className={styles.desk}>

                {/* header */}
                <div className={styles.header0}>

                    <div className={styles.header01}>
                        <div onClick={() => {setTab1(false);setTab2(false);setTab0(true)}} className={styles.header011}>Home</div>
                        <div onClick={() => history.push("/chats")} className={styles.header011}>Inbox</div>
                        <div className={styles.header011}>Reservations</div>
                        <div onClick={() => {setTab1(false);setTab0(false);setTab2(true);activateListing();}} className={styles.header011}>Cars</div>
                        <div onClick={() => {setTab0(false);setTab2(false);setTab1(true);activateListing();}} className={styles.header011}>Listings</div>
                        <div className={styles.header011}>Help</div>
                    </div>

                    <div className={styles.header02}>
                        <Link to="/HostYourApartment" className={styles.header021}><p>Create new listing</p></Link>
                        <div className={styles.header021}><img src={sidebarIcon} alt="" onMouseEnter={() => {setSideBar(true);}} onMouseLeave={() => setSideBar(false)}  /></div>
                    </div>

                </div>
                
                {/* body */}
                <div>
                    
                    {tab0 && (
                        <div className={styles.proHome0}>
                            <div className={styles.proHome01}>Dashboard</div>

                            <div className={styles.proHome011}>
                                <div className={styles.proHome0111}>
                                    <div className={styles.proHome0111head}>Requests</div>
                                </div>
                                <div className={styles.proHome0111}>
                                    <div className={styles.proHome0111head}>Reservations</div>
                                </div>
                            </div>
                            <div className={styles.proHome012}>
                                <div className={styles.proHome0111head}>Notifications</div>
                            </div>
                        </div>
                    )}

                    {tab1 && (
                        <div className={styles.listHome0}>
                            
                            {hosting ? (
                                <table className={ds.d20t}>
                                    <tbody>
                                        <tr className={ds.d20th}>
                                            <th className={ds.d20th1}>No</th>
                                            <th className={ds.d20th2}>Listing</th>
                                            <th className={ds.d20th3}>Last Modified</th>
                                            <th className={ds.d20th4}>Bedrooms</th>
                                            <th className={ds.d20th5}>Beds</th>
                                            <th className={ds.d20th6}>Bathrooms</th>
                                            <th className={ds.d20th7}><img src={settingsIcon} alt='' /></th>
                                        </tr>

                                        {hosting.map(host => {return (
                                            <tr className={ds.d20tr} key={host.id}>
                                                <td className={ds.d20td1}>{host.id}</td>
                                                <td className={ds.d20td2}>
                                                    <div className={ds.d20td2Img}><img src={adminPro} alt="" /></div>
                                                    <span>{host.listingTitle}</span>
                                                </td>
                                                <td className={ds.d20td3}>23-01-2021</td>
                                                <td className={ds.d20td4}>{host.bedrooms}</td>
                                                <td className={ds.d20td5}>{host.noOfBed}</td>
                                                <td className={ds.d20td6}>{host.baths}</td>
                                                <td className={ds.d20td7}><img src={moreIcon} alt='' /></td>
                                            </tr>
                                        )})}

                                    </tbody>
                                </table>
                            ) : (
                                <div className={styles.loading0}><img className={styles.loading01} src={loading} alt="" /></div>
                            )}

                        </div>
                    )}

                    {tab2 && (
                        <>
                            <div className={styles.listHome0}>
                                <div className={styles.addCar0}>
                                    <div className={styles.addCar0Btn} onClick={() => history.push("/hostCars")}>Host your car</div>
                                </div>

                                {hosting ? (
                                    <table className={ds.d20t}>
                                        <tbody>
                                            <tr className={ds.d20th}>
                                                <th className={ds.d20th1}>No</th>
                                                <th className={ds.d20th2}>Listing</th>
                                                <th className={ds.d20th3}>Last Modified</th>
                                                <th className={ds.d20th4}>Bedrooms</th>
                                                <th className={ds.d20th5}>Beds</th>
                                                <th className={ds.d20th6}>Bathrooms</th>
                                                <th className={ds.d20th7}><img src={settingsIcon} alt='' /></th>
                                            </tr>

                                            {hosting.map(host => {return (
                                                <tr className={ds.d20tr} key={host.id}>
                                                    <td className={ds.d20td1}>{host.id}</td>
                                                    <td className={ds.d20td2}>
                                                        <div className={ds.d20td2Img}><img src={adminPro} alt="" /></div>
                                                        <span>{host.listingTitle}</span>
                                                    </td>
                                                    <td className={ds.d20td3}>23-01-2021</td>
                                                    <td className={ds.d20td4}>{host.bedrooms}</td>
                                                    <td className={ds.d20td5}>{host.noOfBed}</td>
                                                    <td className={ds.d20td6}>{host.baths}</td>
                                                    <td className={ds.d20td7}><img src={moreIcon} alt='' /></td>
                                                </tr>
                                            )})}

                                        </tbody>
                                    </table>
                                ) : (
                                    <div className={styles.loading0}><img className={styles.loading01} src={loading} alt="" /></div>
                                )}
                            </div>
                        
                        </>
                    )}

                </div>

            </div>

            {/* mobile */}
            <div className={styles.mobile}>
                
                <div className={styles.headerMob0}>
                    <img className={styles.headerMob0img} src={menuIcon} alt="" onClick={() => setMobSideBar(true)} /> 
                    <div className={styles.headerMob01}>Hosting</div>
                    <div className={styles.headerMob02} onClick={() => history.push("/HostYourApartment")} ><img src={addButton} className={styles.headerMob02img} alt="" /></div>
                </div>

                <div>

                    {tabMob0 && (
                        <div className={styles.proHome0}>
                            <div className={styles.proHome01}>Dashboard</div>

                            <div className={styles.proHome011}>
                                <div className={styles.proHome0111}>
                                    <div className={styles.proHome0111head}>Requests</div>
                                </div>
                                <div className={styles.proHome0111}>
                                    <div className={styles.proHome0111head}>Reservations</div>
                                </div>
                            </div>
                            <div className={styles.proHome012}>
                                <div className={styles.proHome0111head}>Notifications</div>
                            </div>
                        </div>
                    )}

                    {tabMob1 && (
                        <div className={styles.listHome0}>
                            
                            {hosting ? (

                                <div className={styles.listHomeMob0}>

                                    <div className={styles.listHomeMob0head}>{hosting.length} Listing</div>

                                    {hosting.map(host => {return (
                                        <div className={styles.listHomeMob01} key={host.id}>
                                            <div className={styles.listHomeMob011}>
                                                <img src={adminPro} alt="" />
                                                <div className={styles.listHomeMob0111}>
                                                    <div className={styles.listHomeMob01111}>Title</div>
                                                    <div className={styles.listHomeMob01112}>23-12-2021</div>
                                                </div>
                                            </div>
                                            <div className={styles.listHomeMob012}>
                                                <div className={styles.listHomeMob0121}>
                                                    <div className={styles.listHomeMob01211}>3</div>
                                                    <img src={v1} alt="" />
                                                </div>
                                                <div className={styles.listHomeMob0121}>
                                                    <div className={styles.listHomeMob01211}>2</div>
                                                    <img src={v2} alt="" />
                                                </div>
                                                <div className={styles.listHomeMob0121}>
                                                    <div className={styles.listHomeMob01211}>1</div>
                                                    <img src={v3} alt="" />
                                                </div>
                                            </div>
                                            <div className={styles.listHomeMob013}>
                                                <img className={styles.listHomeMob0131} src={editIcon} alt="" />
                                                <img className={styles.listHomeMob0132} src={deleteIcon} alt="" />
                                            </div>
                                        </div>
                                    )})}


                                </div>
                            ) : (
                                <div className={styles.loading0}><img className={styles.loading01} src={loading} alt="" /></div>
                            )}

                        </div>
                    )}

                </div>

                {/* side bar */}
                {mobSideBar && (
                    <div className={styles.headerMob02Side}>
                        <div className={styles.headerMob02Side1}>
                            <p onClick={() => {setTabMob1(false);setTabMob0(true);setMobSideBar(false);}}>Home</p>
                            <p onClick={() => history.push("/chats")}>Inbox</p>
                            <p>Reservations</p>
                            <p>Calender</p>
                            <p onClick={() => history.push('/Account')}>Profile</p>
                            <p onClick={() => history.push('/hosting')}>Listing</p>
                            <p onClick={() => history.push('/notify')}>Notification</p>
                            <p onClick={() => history.push('/chats')}>Messages</p>
                            <p onClick={() => history.push('/Saved')}>Saved</p>
                            <p onClick={() => history.push('/Trips')}>Trips</p>
                            <p onClick={() => {setTabMob0(false);setTabMob1(true);setMobSideBar(false);activateListing();}}>Listing</p>
                            <p>Help</p>
                        </div>
                        <div className={styles.headerMob02Side2} onClick={() => setMobSideBar(false)}></div>
                    </div>
                )}

            </div>

            {sideBar && (
                <div className={headerStyle.headSideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
                        <div className={headerStyle.headSideBar011S0}>
                            <div className={headerStyle.headSideBar011S01}><img src={userIcon} alt="" /></div>
                            <div className={headerStyle.headSideBar011S02}>{JSON.parse(localStorage.getItem("token")).userName} 
                                <div className={headerStyle.headSideBar011S021}>{JSON.parse(localStorage.getItem("token")).userEmail}</div>
                            </div>
                        </div>
                        <div className={headerStyle.headSideBar011S1}><button onClick={() => history.push('/Account')}>View Profile</button></div>
                        <p onClick={() => history.push('/')}>Home</p>
                        <p onClick={() => history.push('/notify')}>Notification</p>
                        <p onClick={() => history.push('/chats')}>Messages</p>
                        <p onClick={() => history.push('/Saved')}>Saved</p>
                        <p onClick={() => history.push('/Trips')}>Trips</p>
                        <p onClick={() => history.push('/hostCars')}>Host your cars</p>
                        <p onClick={() => history.push('/HostYourApartment')}>Host your apartment</p>
                        <p onClick={signOutSubmit}>Signout</p>
                </div>
            )}
        
        </>
    );
}