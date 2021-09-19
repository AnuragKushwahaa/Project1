import React, { useEffect, useState } from "react";

export default function Fetchv(){
    const [UserData, setUserData] = useState([])
            async function kk () {
        const res = await fetch('https://randomuser.me/api/')
        const data = await res.json();
        console.log(data)
        return data.results;
            }
            useEffect(() => {
                kk().then(apiPeople => {
                    setUserData(apiPeople)
                })
            }, [])
         
        return(
        <>
        <div>
            {UserData.map((person, index) => <div key={index}> {person.name.first}</div>)}       
        </div>
        </>)
}
            