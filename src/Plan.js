function Plan(props) {

    return <>

        <li className="shadow-sm p-2 my-2 col-sm-6">{props.value}</li>
        <button className="btn btn-danger my-2 col-sm offset-1" onClick={()=>{props.sendData(props.id)}}>X</button>


    </>

}

export default Plan;