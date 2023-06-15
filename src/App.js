import './App.css';
import Header from './components/Header.js';
import { useState } from 'react';
import Fields from './components/Fields.js';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // if there are multiple input fields then we need to create multiple states
    // instead of creating multiple states we can create an object
    // const [data, setData] = useState({name: '', email: ''});
    // ***************
    const [form, setForm] = useState({ name: '', email: '' });

    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, form]);
        setForm(form);
    }

    const removeItem = (index) => {
        // let tempData = [...data];  // we are creating a copy of the data and then using the setter function to set the data
        // tempData.splice(index, 1);
        // setData([...tempData]);

        // or
        setData(data.filter((item, i) => i !== index)) // we are filtering the data and then setting the data

        // this wont work
        // setData(data.splice(index, 1)); // we are filtering the data and then setting the data
    }

    return (
        <div className='App'>
            <Header />

            <div className="form">
                <input value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    // whatever value we give in the box that value gets saved in the state
                    type="text" placeholder="Enter your name" />

                <input value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    type="text" placeholder="Enter your email" />

                <button onClick={addData} style={{ color: "green" }}>Submit</button>
            </div>

            {/* now we want to show the submitted data here */}
            <div className="data" style={{ color: "black" }}>
                <div className="data_val">
                    <h4>Name</h4>
                    <h4>Email</h4>
                    <h4>Remove</h4> {/* we want to remove the data from the array */}
                </div>
                {
                    data.map((item, index) => {
                        // we can create field component as well 
                        // but here we want to delete the data 
                        // so we are keeping everything here
                        return (
                            <div key={index} className="data_val">
                                <h4>{item.name}</h4>
                                <h4>{item.email}</h4>
                                <button style={{ color: "red" }} onClick={() => removeItem(index)}>Remove</button> {/* we want to remove the data from the array */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;