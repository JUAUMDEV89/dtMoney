import styled from 'styled-components';
import { transparentize } from 'polished';

interface RadioBoxProps{
   isActive: boolean;
   activeColor: 'green' | 'red';
}

const colors = {
    red: '#e52e4d',
    green: '#33cc95'
}

export const Container = styled.form`

   h2{
       color: ${props=>props.theme.colors.title};
       font-size: 1.5rem;
       font-family: 'Poppins', sans-serif;
       margin-bottom: 2rem;
   }

   input{
       width: 100%;
       padding: 8 1.5rem;
       padding-left: 1rem;
       height: 4rem;

       border-radius: 0.25rem;
       border: 1px solid #d7d7d7;
       background: #e7e9ee;

       font-weight: 400;
       font-size: 1rem;

       &::padding{
           color: var(--text-body);
       }

       & + input{
           margin-top: 1rem;
       }
   }

   .cssResolve{
           margin-top: 1rem;
    }
   
   button[type="submit"]{
          width: 100%;
          padding: 0 1.5rem;
          height: 4rem;
          background: var(--green);
          color: #FFFFFF;
          border-radius: 0.25rem;
          border: 0;
          font-size: 1rem;
          margin-top: 1rem;

          transition: filter 0.2s;

          &:hover{
              filter: brightness(0.9);
          }
       }

     .close{
         position: absolute;
         top: 1rem;
         right: 1rem;
         cursor: pointer;
     }  
`;

export const TransactionTypeContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: space-between;
`;

export const RadioBox = styled.button<RadioBoxProps>`
        width: 236px;
        height: 64px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1rem;
        font-weight: 400;

        border: 1px solid #d7d7d7;    
        border-radius: 0.5rem;
        background: ${(props)=> props.isActive 
            ?  transparentize(0.9, colors[props.activeColor])
            : 'transparent'
       };

        &:hover{
            filter: brightness(0.9);
        }

        span{
            margin-left: 1rem;
        }
`;