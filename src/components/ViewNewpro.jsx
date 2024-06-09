import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewNewpro = () => {
    const [data,changeData]=useState(
        [{
            "title":"",
            "category":"",
            "price":""
        }]
        
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
    
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.image} height="250px"class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title" name='title' value={data.title} onChange={inputHandler}>{value.title}</h5>
                                            <p class="card-text" name='category'value={data.category} onChange={inputHandler}>{value.category}</p>
                                            <a href="#" class="btn btn-primary" name='price' value={data.price} onChange={inputHandler}>{value.price}</a>
                                        </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNewpro