import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaRecordVinyl } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  width: 100vw;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: #282c34;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <FaRecordVinyl/>  
      <h1>{t('welcome')}</h1>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('pt')}>Português</Button>
      <Button onClick={() => changeLanguage('es')}>Español</Button>
    </Container>
  );
}

export default App;
