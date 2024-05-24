
function Form(props) {
  if (!props.show) {
    return <></>;
  }
  return (
    <div className='form'>
      <h1>Login</h1>
      <h2>Please login with credentials</h2>
      <input type='text' className='email' placeholder='Email'></input>
      <input type='password' className='password' placeholder='Password'></input>
      <input type='password' className='confirm-password' placeholder='Confirm password'></input>
      <button>Submit</button>
    </div>
  )
}

export default Form;