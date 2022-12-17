import { useState } from 'react'
import './App.css';

function App() {
  const [modelo, setModelo] = useState()
  const [marca, setMarca] = useState()
  const [placa, setPlaca] = useState()
  const [ano, setAno] = useState()
  const [automoveis, setAutomoveis] = useState([])


  function cadastrar() {
      const automovel = {
        modelo,
        marca,
        placa,
        ano
      }
      automoveis.push(automovel)
      setAutomoveis([...automoveis])    
      
    limparForm()
    }

  function limparForm() {
    setModelo('')
    setMarca('')
    setPlaca('')
    setAno('')
  }

  return (
    <>
     <div className="form">
        <h1>Automoveis Seminovos</h1>
        <input
          className="m5"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => {
            setModelo(e.target.value)
          }}
        />
        <input
          className="m5"
          placeholder="Marca"
          type="text"
          value={marca}
          onChange={(e) => {
            setMarca(e.target.value)
          }}
        />
         <input
          className="m5"
          placeholder="Placa"
          value={placa}
          onChange={(e) => {
            setPlaca(e.target.value)
          }}
        />
         <input
          className="m5"
          placeholder="Ano"
          type="number"
          value={ano}
          onChange={(e) => {
            setAno(e.target.value)
          }}
        />
        <button className="m5" onClick={cadastrar}>
          Cadastrar
        </button>
        
        <h1>Pesquisar Automovel</h1>
        <input
          className="m5"
          placeholder="Digite a placa"
          value={placa}
          onChange={(e) => {
            setModelo(e.target.value)
          }}
        />

      </div>

      <table className='tabela'>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Placa</th>
          <th>Ano</th>
        </tr>
          {
            automoveis.map((automovel) => {
            return (
              <tr>
                <td>{automovel.modelo}</td>
                <td>{automovel.marca}</td>
                <td>{automovel.placa}</td>
                <td>{automovel.ano}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  )
}

export default App;
