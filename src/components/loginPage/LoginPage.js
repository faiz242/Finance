import styles from '../../css/loginPageStyle/LoginPage.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    let { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    });

  }
  return (
    <div className={styles.LoginPagePage}>
      <div className={styles.loginFormContainer}>
        <h3>Login to JJ Finance</h3>
        {console.log(user)}
        <form className={styles.loginForm}>
          <label>Email</label>
          <input type="email" autoFocus className={styles.loginInput} name="email" value={user.name} onChange={handleChange} placeholder="Enter You Email..." />
          <label>Password</label>
          <input type="password" required className={styles.loginInput} name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password..." />
          <button className={styles.loginButton}>Login</button>
        </form>
        <span>
          <Link to='/'>Forgot Password?</Link>
          <span style={{ float: 'right' }}>
            <Link to='/signUp'> Sign Up</Link>
          </span>
        </span>
      </div>
    </div>
  )
}

export default LoginPage