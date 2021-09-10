import { useState, useEffect } from "react";

export default function Listurldata () {

    let [data, setdata] = useState([])
    const authToken = localStorage.getItem("authToken")
  
    useEffect( () => {
        async function fetchData() {
        let fetchData = await fetch("https://createshorturl.herokuapp.com/urlshort/listurldata", {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-type": "application/json",
            "Authorization" : authToken
          },
        })
        let allurls = await fetchData.json();
       
        setdata([...allurls]);
    }
    fetchData();
    }, [authToken])
    
    return <>
        <div className="container" id="List__Container">
            <div className="row">
                <div className="col-lg-12 text-center mt-4 ">
                    <div className="card">
                        <div className="card-body">
                        <h1>List of Urls Created</h1>
                        </div>              
                    </div>             
                </div>
            </div>
         <br/>
            <div class="row">
                {
                    data.map((obj) => {
                        let shortUrl = `https://createshorturl.herokuapp.com/urlshort/${obj.shortUrlId}`;
                        return <div className="col-md-3 mt-2">
                            <div class="card  mb-3 d-flex align-items-stretch h-100" id="List__cards">
                                <div class="card-body text-dark">
                                    <p className="card-text"><b>ShortUrl :</b> <a href={shortUrl} target='blank' rel="noreferrer">https://createshorturl.herokuapp.com/urlshort/{obj.shortUrlId}</a></p>
                                    <p class="card-text"><b>Actual Url :</b> <a href={obj.longUrl} target='_blank' rel="noreferrer">{obj.longUrl}</a></p>
                                    <div class="card-text bg-transparent "><b>Created on : </b>{obj.date}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}