import { useHistory } from 'react-router';
import '../css/header.css';
import headerBackBtn from '../img/icons/headerMinBack.png';

export default function HeaderMin(props) {

    const history = useHistory();
    return (

        <>
            <div className="headerMinCont">
                <div className="headerMinArrow">
                    <img src={headerBackBtn} alt="" onClick={() =>history.push('/notify')}/>
                </div>
                <div className="headerMinTitle">{props.title}</div>
            </div>
        </>

    );

}