import { Container } from './style';
import { Summary } from '../Summary';
import { TransactiosnTable } from '../TransactionsTable';

export function Dashboard(){
    return(
        <>
        <Container>
          <Summary />
          <TransactiosnTable />
        </Container>
        </>
    )
}