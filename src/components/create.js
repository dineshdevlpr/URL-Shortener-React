import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";


export default function Create() {

    const [longUrl, setLongUrl] = useState("");
    const authToken = localStorage.getItem("authToken")
    const history = useHistory();

    if (!authToken){
        alert("No Token Found. Try Log in.")
        history.push("/login")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://createshorturl.herokuapp.com/urlshort/createurl", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
            longUrl
        }),
        headers: {
          "Content-type": "application/json",
          "Authorization" : authToken
        },
      })
      .then(response => response.json())
      .then(data => {
        alert("Url Successfully Created")
        history.push("/listurldata")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Url Shortener</h3>
                                <div className="form-group">
                                    <label for="longUrl" className="text-info">Enter Url</label><br/>
                                    <input type="text" id="longUrl" name="longUrl" required onChange={(e) => setLongUrl(e.target.value)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div className="form-group">
                                    <Link to="/data" className="text-muted">Click Here to See Created Urls</Link><br/> <br/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}