import { useCallback, useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import InputMemoria from "./components/inputMemoria";
import { Container, Content, Grid } from "./styles";
import operaCalculadora from "./services/operacoes";

const App = () => {
  const [inputTela, setInput] = useState("0");
  const [memoria, setMemoria] = useState(0);

  function handleInput(valor){
    const {novoValor, novaMemoria} = operaCalculadora(inputTela, valor, memoria);
    setInput(novoValor);
    setMemoria(novaMemoria);
  }

  useKeyDown((key) => {
    handleInput(key);
  }, ["+", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "x", "*", "c", "!", ".", "=", "Enter", "Delete"]);

  return (
    <Container>
      <Content>
        <Grid>
          <InputMemoria valor = {memoria} styleProps={{gridColumn: 'span 4'}}/>
          <Input valor = {inputTela} styleProps={{gridColumn: 'span 4', marginTop: '-0.15rem'}}/>
          <Button label="x" onClick={() => handleInput('x')} onKeyDown={() => handleInput('x')}/>
          <Button label="/" onClick={() => handleInput('/')}/>
          <Button label="c" onClick={() => handleInput('c')}/>
          <Button label="-" onClick={() => handleInput('-')}/>
          <Button label="7" onClick={() => handleInput('7')}/>
          <Button label="8" onClick={() => handleInput('8')}/>
          <Button label="9" onClick={() => handleInput('9')}/>
          <Button label="+" onClick={() => handleInput('+')}/>
          <Button label="4" onClick={() => handleInput('4')}/>
          <Button label="5" onClick={() => handleInput('5')}/>
          <Button label="6" onClick={() => handleInput('6')}/>
          <Button label="=" styleProps={{gridRow: 'span 3'}} onClick={() => handleInput('=')}/>
          <Button label="1" onClick={() => handleInput('1')}/>
          <Button label="2" onClick={() => handleInput('2')}/>
          <Button label="3" onClick={() => handleInput('3')}/>
          <Button label="+/-" onClick={() => handleInput('!')}/>
          <Button label="0" onClick={() => handleInput('0')}/>
          <Button label="." onClick={() => handleInput('.')}/>
        </Grid>
      </Content>
    </Container>
  );
}

export const useKeyDown = (callback, keys) => {
  const onKeyDown = useCallback((event) => {
    const wasAnyKeyPressed = keys.some((key) => event.key === key);
    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback(event.key);
    }
  }, [callback, keys]);
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};


export default App;
