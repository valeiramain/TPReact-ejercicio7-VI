import { Card, Badge } from 'react-bootstrap';

const EmpleadoRow = (props) => {

    console.log(props.valor)
    return (
        // continuacion sistema de grillas
        <Card className="my-2 border border-light bg-light-subtle">
            <Card.Body>
                <section className='row'>
                    <div className='col-sm-12 col-md-4'>
                        {/* columna para la imagen del personaje */}
                        <img src={props.valor.pic} className="card-img-top" alt={props.valor.fullName}></img>
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        {/* columna para la frase del personaje */}
                        <Card.Title className='my-2'>{props.valor.fullName}</Card.Title>
                        <Card.Text className='container d-flex justify-content-between mt-3' >
                            {props.valor.title}
                            <Badge bg="info ms-3">{props.valor.department}</Badge>
                        </Card.Text>
                    </div>
                </section>
            </Card.Body>
        </Card>
    );
};

export default EmpleadoRow;