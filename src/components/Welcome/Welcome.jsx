import { Alert, Container } from 'react-bootstrap';

const Welcome = ()=> {
  return (
    <Container className="my-4">
      <Alert className='alert'>
        <Alert.Heading className='text-center alertTitle'>
          La tua prossima storia inizia qui
        </Alert.Heading>
        <p className='text-center alertText'>
          Dove ogni pagina è un nuovo viaggio. Esplora la nostra selezione e lasciati ispirare.
        </p>
      </Alert>
    </Container>
  );
}

export default Welcome;