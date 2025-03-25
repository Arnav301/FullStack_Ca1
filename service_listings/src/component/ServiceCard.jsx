function ServiceCard({data}){
    return(
        <div className="id">
            <h1>Service_title : {data.Title}</h1>
            <p>Service_Description : {data.description}</p>
        </div>
    )
}

export default ServiceCard