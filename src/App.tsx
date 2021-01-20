import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Card from './components/card';
import CollapseButton from './components/collapseButton';
import './style.css';

function App() {

  const [renda, setRenda] = useState("");
  const [renderAddCard, setRenderAddCard] = useState(true);
  const [labelButtonRenderAddCard, setLabelButtonRenderAddCard ] = useState('+')
  const [card, setCards] = useState([{
    title : "Renda Fixa",
    percents : "10"
  }, {
    title : "Renda Variavel",
    percents : "20"
  }]);

  const [inputTitle , setInputTitle] = useState("");
  const [inputPercents , setInputPercents] = useState("");

   function renderElementAddCard () {
    if(renderAddCard){
      setLabelButtonRenderAddCard('-')
      setRenderAddCard(false);
      setInputTitle("");
      setInputPercents("");
      }else{
      setLabelButtonRenderAddCard('+')
      setRenderAddCard(true);
    }
}

function saveCard(inputTitle: string, inputPercents: string){
    setCards([...card, {title: inputTitle , percents: inputPercents} ]);
}

function verifyPercents(inputPercents : string){
  var totalPercents = 0;

  card.forEach((value) => totalPercents += Number(value.percents));
  totalPercents += Number(inputPercents);
  if(totalPercents > 100){
    setInputPercents("");
  }
  console.log(totalPercents);
}

function mascaraRenda(input : string){
    if(renda === "")
      setRenda(`R$ ${input}`);
    else
     setRenda(input);
}

  return (
    <div className='container mt-5' id="container">
      <h1 className='text-center mb-5'>Carteira Virtual Luquinhas</h1>
      <form>
        <div className="form-group">
          <div className='row justify-content-center'>
            <div className='col-md-6'> 
              <input name='inputValor' placeholder="Digite o valor em R$" value={renda} onClick={() => {setRenda("")}}
                onChange={(e) => { mascaraRenda(e.target.value) }} step='.10' min = '0.01' max = "9999999.99" className="form-control" id="inputValor" />
            </div>
          </div>
        </div>
      </form>
      {
        card.map((value ,index ) => {
            return <Card key = {index} title={value.title} income = {renda.replace('R$', '').replace(',', '.')} percents = {value.percents} ></Card>
        })
      }
      <div className='row mt-3 md-5 justify-content-end' >
      <CollapseButton labelButton={labelButtonRenderAddCard} idTarget='renderAddCard'> 
        <div className="card mt-3">
          <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-10 ">
                    <label>Nome da Caixa</label>
                    <input id='inputTitle' className='form-control' value={inputTitle}
                            onChange={(e) => { setInputTitle(e.target.value) }}></input>
                  </div>
                  <div className="col-md-2">
                    <label>Porcentagem</label>
                    <input id='inputPercents' value={inputPercents} className='form-control' type="number"
                            onChange={(e) => { setInputPercents(e.target.value); verifyPercents(e.target.value) }}
                            ></input>
                  </div>
                </div>
                <div className="row mt-5 justify-content-end">
                  <div className='button'>
                      <button type="button" id="btnSalvar" className='btn btn-primary'
                              onClick={() => {saveCard(inputTitle, inputPercents); renderElementAddCard(); verifyPercents(inputPercents);}} >
                              Salvar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </CollapseButton>
        {/* <button className='button btn btn-outline-primary btn-sm' onClick={() => {renderElementAddCard()}}
                type="button">{labelButtonRenderAddCard}</button>     */}
      </div>
      <div id="renderAddCard">
      </div>
    </div>

  );
}

export default App;
