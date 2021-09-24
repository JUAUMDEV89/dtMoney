import { useState, useContext } from 'react';
import { Container, Content } from './style';
import "react-toggle/style.css" 
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface HeaderProps{
    onOpenNewTransactionModal: ()=>void;
    toggleThemeFunction: ()=>void;
}

export function Header({ onOpenNewTransactionModal, toggleThemeFunction }: HeaderProps){

    const [baconIsReady, setBaconIsReady] = useState(false);

    const { colors, title } = useContext(ThemeContext);

    return( 
        <>
                <Container>
                   <Content>
                        <img src="./logo.svg" alt="dt money" />

                        <div>
                          <button type="button" onClick={onOpenNewTransactionModal}>
                              Nova Transação
                          </button>

                          <Switch 
                            onChange={toggleThemeFunction}
                            checked={title === 'light'}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            offColor={shade(0.5, colors.primary)}
                            onColor={colors.secundary}
                          />
                          
                        </div>
                   </Content>
                </Container>
        </>
    )
}