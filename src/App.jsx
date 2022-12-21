import { login } from './utils';
import './index.css';
import { useState} from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. DONE
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. // DONE
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleLogin () {
    setError(null)
    setLoading(true)
    login({email,password}).then(() => {
      alert("Sucesso")
    }).catch((error) => {
      console.log(error)
      setError(error)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        { error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} id={'email'} type={'email'} value={email} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} id={'password'} type={'password'} value={password} />
        </div>

        <div className='button'>
          <button onClick={() => handleLogin()} disabled={email.length == 0 || password.length < 6 || loading}>Login</button>
        </div>
      </div>
    </div>
  );
}
