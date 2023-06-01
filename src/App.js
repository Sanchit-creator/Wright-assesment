import styled from '@emotion/styled';
import './App.css';
import Form from './components/Form';
import { Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function App() {
  return (
    <div className="App">
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;
