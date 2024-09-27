import React, { useState } from 'react'
import axios from 'axios';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', registrationData);
            const { success, message } = response.data;
            if (success) {
                console.log('Registration Successful');
            } else {
                console.log(message);
            }
        } catch (error) {
            console.log(error);
        }
        setRegistrationData({
            username: '',
            password: ''
        });
    };

    return (
        <div>
            <h2>REGISTRATION FORM</h2>
            <form onSubmit={handleRegistrationSubmit}>
                <input type="text" name="username" placeholder="Enter Username" value={registrationData.username} onChange={handleRegistrationChange} required />
                <input type="password" name="password" placeholder="Enter Password" value={registrationData.password} onChange={handleRegistrationChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
