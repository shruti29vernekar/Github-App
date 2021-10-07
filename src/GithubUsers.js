import React from 'react';
//import SearchArea from './SearchArea';

export const GithubUsers = ({users}) => {
    return (
        
        <div>
    
             <h1>List of Github Users</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                {
                    users.map((curElem) => {
                        const {avatar_url, id, login, location} = curElem;
                        return(
                            
                                 <div className="col-10 col-md-4 mt-5" key={id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                             <div className="image"><img src={avatar_url} className="rounded" width="165"></img></div>
                                                 <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{login}</h4>
                                                        <span className="textLeft">{location}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span> <span className="number1">90</span></div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span> <span className="number2">980</span></div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span> <span className="number3">980</span></div>

                                                        </div>
                                                 </div>
                                             </div>
                                         </div>
                                    </div>
                           
                        )
                    })
                }
                    

                </div>
            </div>
        </div>
    )
}

export default GithubUsers;