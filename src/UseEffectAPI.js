import React,{useEffect, useState} from 'react';

import GithubUsers from './GithubUsers';



 const UseEffectAPI = () => {
    
    const [users, setUsers] = useState([]);

    const getUsers =  async () =>{
        try{
            const response = await fetch('https://api.github.com/users');
        setUsers( await response.json());
        //const data = await response.json();
        //console.log(data);

        } catch(error) {
            console.log(error);
        }

        //const response = await fetch('http://jsonplaceholder.typicode.com/albums/1/photos');
        //setUsers( await response.json());
        //const data = await response.json();
        //console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);
    
    
    
    return (
        <div>
           <GithubUsers users={users}/>
        </div>
    );
}

export default UseEffectAPI;
