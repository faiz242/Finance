import styles from '../../css/loginPageStyle/SignUpPage.module.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handleChange = (e) => {
        let { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const signUp = async (e) => {
        e.preventDefault();
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && password === reEnterPassword) {
            console.log(user);
            const response = await axios.post("http://localhost:9002/signup", user)
            console.log(response.data)
        } else {
            alert("Some input missing")

        }

    }


    return (
        <div className={styles.signUpPage}>

            <div className={styles.signUpFormContainer}>
                <h3>Sign Up to JJ Finance</h3>
                <form onSubmit={(e) => signUp(e)} className={styles.signUpForm}>
                    <label>Name    </label>
                    <input type="text" name='name' value={user.name} className={styles.signUpInput} onChange={handleChange} placeholder="Enter Name..." />
                    <label>Email Id   </label>
                    <input type="email" name='email' value={user.email} className={styles.signUpInput} onChange={handleChange} placeholder="Enter Email..." />
                    <label>Password   </label>
                    <input type="Password" name='password' value={user.password} required className={styles.signUpInput} onChange={handleChange} placeholder="Enter Password..." />
                    <label>Re-Enter Password   </label>
                    <input type="Password" name='reEnterPassword' value={user.reEnterPassword} className={styles.signUpInput} onChange={handleChange} placeholder="Re-Enter Password..." />
                    <button type='submit' className={styles.signUpButton}>Sign Up</button>

                </form>

                <span>
                    <Link to='/'>Forgot Password?</Link>
                    <span style={{ float: 'right' }}>
                        <Link to='/login'> Login</Link>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SignUpPage