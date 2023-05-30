import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from "./../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import ProductsList from "../../Pages/ProductsList/ProductsList";

const Home = ()=>{                              // useState() is a fun
    // const [counter, setCounter ] = useState(0); //this is a State def counter =var or state, setCounter is a  setter fun
    // const handleCounterIncrease =()=>{
    //     setCounter(counter+1);
    // }

    // useEffect(()=>{
    //     console.log("hello from useEffecft, happens when mounting");
    //     return()=>{
    //         console.log("clean up function, happens when unmounting>> redirect link")
    //     }
    // },[counter]);

    // },[])

    return(
        <div>
            <Header/>
            <ProductsList class="main"/>
            {/* <button onClick={handleCounterIncrease}>Increase Counter</button><br></br>
            <p> {counter}</p> */}
            {/* <Link to="/users-list">Users List</Link> */}
            <Footer/>
        </div>
    )
    
}

export default Home;