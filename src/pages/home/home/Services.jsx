import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const[services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div className="mt-20">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Services;