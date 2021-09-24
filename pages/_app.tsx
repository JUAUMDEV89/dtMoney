import { useState } from 'react';
import { GlobalStyle } from '../styles/global';
import { createServer, Model } from 'miragejs';
import { TransactionsProvider } from '../hooks/useTransactions';

createServer({

  models: {
     transaction: Model     
  },
  
  seeds(server){
     server.db.loadData({
       transactions:[
          {
            id: 1,
            title: 'Freelancer de WebSite',
            type: 'deposit',
            amount: 300.000,
            category: 'Dev',
            createdAt: new Date()
          },
          {
            id: 2,
            title: 'Freelancer de WebSite',
            type: 'withdraw',
            amount: 3.000,
            category: 'Dev',
            createdAt: new Date()
          },
        ]
     })
  },

  routes(){
       this.namespace = 'api';

       this.get('/transactions', ()=>{
         return this.schema.all('transaction');
       });

       this.post('/transactions', (schema, request)=>{
          const data = JSON.parse(request.requestBody);

          return schema.create('transaction', data);
       });
  } 
})

function MyApp({ Component, pageProps }) {

  return (

      <TransactionsProvider>
          <GlobalStyle />
          <Component {...pageProps} />
      </TransactionsProvider>
     
  )
}

export default MyApp
