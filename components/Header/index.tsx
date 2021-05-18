import { useState } from 'react';
import { Container, Content } from './style';

interface HeaderProps{
    onOpenNewTransactionModal: ()=>void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){

    return( 
        <>
                <Container>
                   <Content>
                        <img src="./logo.svg" alt="dt money" />

                        <button type="button" onClick={onOpenNewTransactionModal}>
                            Nova Transação
                        </button>
                   </Content>
                </Container>
        </>
    )
}