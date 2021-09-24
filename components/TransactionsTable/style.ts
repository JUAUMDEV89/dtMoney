import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        font-family: 'Poppins', sans-serif;
    
    .deposit{
        color: var(--green);
    }

    .withdraw{
        color: var(--red);
    }

    .loading{
        text-align: center;
    }
        
    th{
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.1.rem;
    }

    td{
        padding: 1rem 2rem;
        border: 0;
        background: ${props=>props.theme.colors.box};
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child{
            color: ${props=>props.theme.colors.title};
        }
    }

    }
`;