import * as Consts from "./Consts";
import {useState} from "react";
import {AirportHome} from "./airportHome";
import {AirportsList} from "./AirportsList";
import {AIRPORT_HOME, airportMock} from "./Consts";
import {LoadingIndicator} from "./loadingIndicator";


export function Airports() {
    const [view, setView] = useState(Consts.AIRPORT_HOME);

    function onClickHandler() {
        setView(Consts.AIRPORT_LIST);


    }

    if(view === Consts.AIRPORT_LIST){

        return <AirportsList/>;
    }

    return <>
        <AirportHome></AirportHome>
        <button onClick={onClickHandler}>Vai!</button>
    </>
}