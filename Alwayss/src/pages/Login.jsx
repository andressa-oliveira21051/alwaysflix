import {signInWithGoogle} from '../Firebase';
import "./Loginn.css"

function Login () {

  return <div>
    <button className="login-with-google-btn"
      onClick={signInWithGoogle}
    >
      Login com o Google
    </button>
  </div>
}

export default Login