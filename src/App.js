// import logo from './logo.svg';
import "./App.css";
import React, {useState} from "react"
import html2canvas from "html2canvas"


function App() {

  const [linea1, setLinea1] = useState("")
  const [linea2, setLinea2] = useState("")
  const [imagen, setImagen] = useState("")

  const onChangeLinea1 = function(event){

  setLinea1(event.target.value)

  }

  const onChangeLinea2 = function(event){

    setLinea2(event.target.value)

    }
   
    const onChangeImagen = function(event){

      setImagen(event.target.value)
  
      }
  const onClickExportar = function(){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement("a")
      link.download = "meme.png"
      link.href = img
      link.click()
  });
  
  }
    

  return (
    <div className="App">
      <div className="container-inputsAndButton">
        <div className="title">
        <h1>¡Creá tu propio meme!</h1>
        </div>
      {/* Select piker de memes */}
      {/* <div className="select">  */}
      <select onChange = {onChangeImagen} className="select" >
        <option selected disabled>Memes</option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama"> Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      {/* </div> */}
      <br />
      {/* Input text - Primer linea */}
      {/* Input text - Segunda linea */}
     
      <input className="inputs" onChange ={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input className="inputs"  onChange = {onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      {/* Botón exportar */}

      <button className="buttonExportar"  onClick={onClickExportar}>Descargar</button>
      </div>
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br/>
        <span>{linea2}</span>
        <img src={"./assets/" + imagen + ".jpg"} alt = "imagenes"/>
      </div>
    </div>
  );
}

export default App;
