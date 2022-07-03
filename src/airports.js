import * as Consts from "./Consts";
import {useState} from "react";
import {AirportHome} from "./airportHome";
import {AirportsList} from "./AirportsList";

export function Airports() {
    const [view, setView] = useState(Consts.AIRPORT_HOME);

    function onClickHandler() {
        setView(Consts.AIRPORT_LIST);
    }

    function backHomeHandler() {
        setView(Consts.AIRPORT_HOME)
    }

    if(view === Consts.AIRPORT_LIST){
        return <>
            <AirportsList/>
            <button onClick={backHomeHandler}>Torna alla Home</button>
        </>
    }

    return <>
        <AirportHome/>
        <button onClick={onClickHandler}>Vai!</button>
    </>
}