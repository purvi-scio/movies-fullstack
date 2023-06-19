import './App.css';
import Header from './components/Header.js';
import React, {useState, useEffect} from 'react';

function App() {

    const [state, setState] = useState(1);
    const [data, setData] = useState([]);


// useeffect is mainly used when fetching data from an api or http request
// it gets called on component re rendering
// [] means to give any dependency. we can pass [state]
// if we want to call it only once then pass in a blank array as the second arguement

    useEffect(() => {
        async function getData(){
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json();
            setData(res);
        }

        getData();
        document.title = `${state} Employees`;
    }, [state])

    return (
        <div>
            <Header />
            <button onClick={()=>setState(state+1)}> 
                Click me {state}
            </button>
            {
                data.map((element, index)=> {
                    return (
                        <div className='data' key={index}>
                            <h4>{element.firstName}</h4>
                            <h4>{element.lastName}</h4>
                            <h4>{element.email}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;