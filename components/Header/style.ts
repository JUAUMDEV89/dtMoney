import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    width: 100%;
`;


export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1080px;
    margin: auto;
    padding: 2rem 1rem 12rem;
    

    button{
        font-size: 1rem;
        color: #FFFF;
        background: var(--blue-light);
        padding: 0rem 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

