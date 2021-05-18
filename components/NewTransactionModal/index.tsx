import { 
    Container,
    TransactionTypeContainer,
    RadioBox  
 } from './style';
import { api } from '../../services/api';
import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionMdalProps{
  isOpen: boolean;
  onRequestClose: ()=>void
}

type TypeTransactionModalProps = 'deposit' | 'withdraw';

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionMdalProps){

    const { createTransaction } = useTransactions();

    const [type, setType] = useState<TypeTransactionModalProps>('deposit');
    const [title, setTitle] = useState('');
    const [valueInput, setValueInput] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent){
         event.preventDefault(); 

         await createTransaction({
           title,
           amount: valueInput,
           category,
           type
         });

         setType('deposit');
         setTitle('');
         setValueInput(0);
         setCategory('');
         onRequestClose();
    }

    return(
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
     
            <input placeholder="Titulo" value={title} onChange={ e => setTitle(e.target.value) }/>

            <input type="number" placeholder="Valor" value={valueInput} onChange={ e => setValueInput(Number(e.target.value)) } />

            <TransactionTypeContainer>
               <RadioBox
                   type="button"
                   onClick={()=>{ setType('deposit'); }}
                   isActive={type === 'deposit'}
                   activeColor="green"
               >
                  <img src="./income.svg" alt="Entrada" />
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox
                   type="button"
                   onClick={()=>{ setType('withdraw'); }}
                   isActive={type === 'withdraw'}
                   activeColor="red"
               >
                  <img src="./outcome.svg" alt="Entrada" />
                  <span>Saida</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input className="cssResolve" placeholder="Categoria" value={category} onChange={e => { setCategory(e.target.value) }} />

            <button type="submit">
              Cadastrar
            </button>

            <img onClick={onRequestClose}  className="close" src="./close.svg" alt="close" />
        </Container>
      </Modal>
    )
}