function Login() {
  function handleFormSubmit(event) {
    return event.preventDefault();
    console.log(event.target.username.value);
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <label>
          Password: <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
