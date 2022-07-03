import {useEffect, useState} from "react";
import * as Consts from "./Consts";
import {AIRPORT_HOME, AIRPORT_LIST, airportMock} from "./Consts";
import {LoadingIndicator} from "./loadingIndicator";



export function AirportsList(){
    const [list, setList] = useState([]);
    const [view, setView] = useState(Consts.AIRPORT_LIST);
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd9e09c15aemsh112258b994ab80dp1307f8jsn6270d916f504',
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



    function returnHandler(){
        setView(Consts.AIRPORT_HOME);
    }
    return <>
        {list.map((p, i) =>
            <article key={i} className={"Container"}>
                <p className={"Airport Name"}>{p.AirportName}</p>
                <p>{p.city}</p>
            </article>)}
        {Loading && view !== AIRPORT_HOME && <LoadingIndicator size = {"4em"} color = {"black"}/>}
    </>
}





//ERROR PENDING 429
// export function AirportsList(){
//     useEffect(() => {
//         const fetchAirport = async () => {
//             const response = await fetch(Consts.API_AIRPORTS);
//             const airports = await response.json();
//
//         };
//
//         const a = fetchAirport().then();
//         console.log(a)
//     },);
//
// }

// const fetchAirport = async () => {
//     const response = await fetch(Consts.API_AIRPORTS,options);
//     if(!response.ok){
//         return []
//     }
//     const data = await response.json();
//     return data.results;
// };
