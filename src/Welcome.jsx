import React, {useEffect} from 'react';
import { useState } from 'react';


const Welcome = () => {
    const [userData, setUserData] = useState({}); 

    const callWelcome = async () => {
        try{
            const res = await fetch('/About', {
                method: "GET", 
                headers: {
                    Accept: "application/json", 
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect( () => {
      callWelcome()      
    }, []);

    return (
        <>
        <div className="aaa">
            <form method="GET">
            <p>Welcome {userData.name}</p>
            </form>
        </div>
        </>
    )

}

export default Welcome;
