import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

export interface TransactionsProps{
    id: number,
    title: string,
    amount: number,
    type: 'deposit' | 'withdraw',
    category: string,
    createdAt: string
}

interface TransactionsProviderProps{
    children: ReactNode;
}

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsContextData{
    transactions: TransactionsProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){

    useEffect(()=>{
        const getApi = async()=>{
            const { data } = await api.get('/transactions');

            setTransactions(data.transactions);
        }

        getApi();
    }, []);

    const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

    async function createTransaction(transactionInput: TransactionInput){
         const response = await api.post('/transactions', {
             ...transactionInput,
             createdAt: new Date(),
         });

         const { transaction } = response.data;

         setTransactions([
             ...transactions,
             transaction
         ])
    } 

    return(
         <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            { children }
         </TransactionsContext.Provider>
     )
}


export function useTransactions(){
    const context = useContext(TransactionsContext);

    return context;
}