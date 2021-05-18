import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   margin: 2rem;
   margin-top: -7rem;

   .total{
         background: var(--green);
         color: #FFFF;
      }

   div{
      background: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      color: var(--text-title);
      margin-left: 2rem;
      height: 8rem;
      width: 20rem;

      header{
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
        justify-content: space-between;
      }

      strong{
         margin-top: 0.5rem;
         display: block;
         font-size: 2rem;
         font-weight: 500;
         font-family: 'Poppins', sans-serif;
         line-height: 3rem;
      }

   }
`;