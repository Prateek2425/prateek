import '../css/components.css';
import v1 from '../img/demo/london.jpg';
import v2 from '../img/demo/newyork.jpg';
import v3 from '../img/demo/rome.jpg';

import defaultMgs from '../translations/DefaultMessage';
import {FormattedMessage} from 'react-intl';
import { useHistory } from 'react-router-dom';

export default function PopularDestination() {

    const history = useHistory();

    return (

        <>

            {/* desktop version  */}
            <div className="containerM">
                <div className="heading">
                    <FormattedMessage 
                        id="popularDestination"
                        defaultMessage={defaultMgs.Mgs.popularDestination}
                    />
                </div>

                <div className="PopularDestCont">

                    {/* map iterator here */}
                    <div className="PopularDestSin" onClick={() => history.push("/homes", {
                        searchKey: "London",
                        noAdult: 0,
                        noChild: 0,
                        noInfant: 0
                    })}>
                        <img src={v1} alt="" />
                        <p>
                        <FormattedMessage 
                            id="London"
                            defaultMessage={defaultMgs.Mgs.London}
                        />
                        </p>
                    </div>
                    <div  className="PopularDestSin" onClick={() => history.push("/homes", {
                        searchKey: "New York",
                        noAdult: 0,
                        noChild: 0,
                        noInfant: 0
                    })}>
                        <img src={v2} alt="" />
                        <p><FormattedMessage 
                            id="New York"
                            defaultMessage={defaultMgs.Mgs.NewYork}
                        /></p>
                    </div>
                    <div  className="PopularDestSin" onClick={() => history.push("/homes", {
                        searchKey: "Rome",
                        noAdult: 0,
                        noChild: 0,
                        noInfant: 0
                    })}>
                        <img src={v3} alt="" />
                        <p><FormattedMessage 
                            id="Rome"
                            defaultMessage={defaultMgs.Mgs.Rome}
                        /></p>
                    </div>

                </div>

            </div>

        </>

    );
}