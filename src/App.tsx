import './App.css';
import Mensagem from './components/Mensagem';
import Counter from './components/Counter';
import InputText from './components/InputText';
import Form from './components/FormComp';
import ExibirPostagens from './components/ExibirPostagens';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <a href='/'>Home</a>
      </header>
      <h1>React + TS</h1>
      <div style={{display:'flex' , gap: '30px'}}>

      <Mensagem titulo="Sucesso !" msg="Cadastro efetuado com sucesso"/>
      <Mensagem titulo="Erro !" msg="Revise suas informações"/>
      </div>
      <Counter/>
      <br/>
      <br/>
   
      <InputText/>
      <Form/>
      <br/>
      <br/>
      <ExibirPostagens/>
    </div>
  );
}

export default App;
