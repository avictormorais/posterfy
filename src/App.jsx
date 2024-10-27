import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';

const Container = styled.div`
  height: 150vh;
`

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Container></Container>
    </>
  );
}

export default App;
