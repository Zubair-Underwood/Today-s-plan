import React from 'react';
function Plan(props) {

    const arr = props.p;

    return <>

        {/* <li className="shadow-sm p-2 my-2 col-sm-6">{props.value}</li>
        <button className="btn btn-danger my-2 col-sm offset-1" onClick={()=>{props.sendData(props.id)}}>X</button> */}

        {

            arr.map((value, i) => {

                return (<React.Fragment key={i}>

                    <li className="shadow-sm p-2 my-2 col-sm-6">{value}</li>
                    <button className="btn btn-danger my-2 col-sm offset-1" onClick={() => { props.sendData(i) }}>X</button>

                </React.Fragment>)

            })
        }
    </>

}

export default Plan;