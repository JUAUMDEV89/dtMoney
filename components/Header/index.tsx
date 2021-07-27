import { useState } from 'react';
import { Container, Content } from './style';
import "react-toggle/style.css" 
import Toggle from 'react-toggle';

interface HeaderProps{
    onOpenNewTransactionModal: ()=>void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    const [baconIsReady, setBaconIsReady] = useState(false);

    function handleBaconChange(){
        
    }

    return( 
        <>
                <Container>
                   <Content>
                        <img src="./logo.svg" alt="dt money" />

                        <div>
                          <button type="button" onClick={onOpenNewTransactionModal}>
                              Nova Transação
                          </button>

                          <Toggle
                            defaultChecked={baconIsReady}
                            onChange={handleBaconChange} 
                          />
                        </div>
                   </Content>
                </Container>
        </>
    )
}