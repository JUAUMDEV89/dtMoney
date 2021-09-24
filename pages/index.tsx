import { useState } from 'react';
import { Header } from '../components/Header';
import { Dashboard } from '../components/Dashboard';
import { NewTransactionModal } from '../components/NewTransactionModal';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { Container } from '../styles/home';
//Modal.setAppElement('#root');

export default function Home() {

  const [isTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
  }

  function handleClosedTransactionModal(){
       setIsNewTransactionModalOpen(false);
  }

  const [theme, setTheme] = useState(light);

  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleThemeFunction={toggleTheme} onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
         <NewTransactionModal
           isOpen={isTransactionModalOpen}
           onRequestClose={handleClosedTransactionModal}
         />
        <Dashboard />
        </Container>
    </ThemeProvider>

  )
}
