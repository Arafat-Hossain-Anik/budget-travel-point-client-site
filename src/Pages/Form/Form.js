import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Form.css';

const Form = () => {
    return (
        <div>
            <Header></Header>
            <div className="container contai mt-5 w-50">
                <h1 style={{ textAlign: 'center' }}>Fill up the form</h1>
                <form className='opinion'>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name" />
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name" />
                    <label for="email">Email</label>
                    <input type="text" id="lname" name="email" placeholder="...@gmail.com" />
                    <label for="address">Address</label>
                    <input type="text" id="lname" name="address" placeholder="address" />
                    <label for="phone-number">Phone Number</label>
                    <input type="text" id="lname" name="phone" placeholder="" />
                    <Link to='/thanks'><input type="submit" value="Submit" /></Link>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Form;