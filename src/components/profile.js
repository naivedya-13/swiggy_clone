import {useEffect, useState} from "react";
const Profile = (props)=>{
    let [count,setCount] = useState(0);
    useEffect(()=>{
        //API CALL
        
    })
    return(
    <div>
        <h2>Profile components</h2>
        <h2>{props.name}</h2>
        <h3>Count:{count}</h3>
        <button onClick={()=>{
            setCount(count++)
        }
        }>button</button>
    </div>);
}
export default Profile;