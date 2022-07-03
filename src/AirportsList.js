import {useEffect, useState} from "react";
import * as Consts from "./Consts";
import {AIRPORT_HOME, AIRPORT_LIST} from "./Consts";
import {LoadingIndicator} from "./loadingIndicator";

export function AirportsList(){
    const [list, setList] = useState([]);
    const [view, setView] = useState(Consts.AIRPORT_LIST);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
            }
        };

        if(view === AIRPORT_LIST){
            const fetchAirport = async () => {
                const response = await fetch(Consts.API_AIRPORTS,options);
                if(response.ok){
                    const  data = await response.json();
                    return data.results;
                }
                throw new Error("Request Failed")
            };

            fetchAirport()
                .then(airports => {
                    setList(airports)
                    setLoading(false)
                });
        }
    },[view]);

    return <>
        {list.map((p, i) =>
            <article key={i} className={"Container"}>
                <p className={"Airport Name"}>{p.AirportName}</p>
                <p>{p.city}</p>
            </article>)}
        {loading && view !== AIRPORT_HOME && <LoadingIndicator size = {"4em"} color = {"black"}/>}
    </>
}