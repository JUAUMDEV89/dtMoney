import { useState } from 'react';
import { Header } from '../components/Header';
import { Dashboard } from '../components/Dashboard';
import { NewTransactionModal } from '../components/NewTransactionModal';

//Modal.setAppElement('#root');

export default function Home() {

  const [isTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
  }

  function handleClosedTransactionModal(){
       setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
       <NewTransactionModal
           isOpen={isTransactionModalOpen}
           onRequestClose={handleClosedTransactionModal}
       />
      <Dashboard />
    </>

  )
}
