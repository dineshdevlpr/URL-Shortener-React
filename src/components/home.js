import React from 'react'
import { Link } from "react-router-dom";
import imgurl from './urlimg.jpg'; // with import


function Home() {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                        <div className="form-group">
                                    <img src={imgurl} className="center m-10" width="500" height="500" alt="URL Shortener"></img><br/>
                                    <Link to="/create" className="text-muted"><h1>Create URL</h1></Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <Link to="/listurldata" className="text-muted"><h1>View Created URL Data</h1></Link><br/> <br/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
