import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUsernameInp = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePasswordInp = event => {
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    //   console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
      //   this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  //   onSubmitSuccess = () => {
  //     const {history} = this.props
  //     history.replace('/')
  //   }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-bg-container">
        <img
          className="website-login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form" onSubmit={this.submitForm}>
          <img
            className="website-login-form-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            onChange={this.onChangeUsernameInp}
            className="input-box"
            id="username"
            type="text"
            value={username}
            placeholder="Username"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={this.onChangePasswordInp}
            className="input-box"
            id="password"
            type="password"
            value={password}
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Login
          </button>
          {errorMessage !== '' ? <p>{errorMessage}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
