import {Card} from 'react-bootstrap';

const EmpleadoRow = (props) => {

    console.log(props.valor)
    return (
        // continuacion sistema de grillas
        <Card className="my-2 border border-dark">
            <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    {/* columna para la imagen del personaje */}
                    
                    {/* <img src={props.valor.pic} className="card-img-top" alt={props.valor.fullName}></img> */}
                </div>
                <div className='col-sm-12 col-md-8'>
                    {/* columna para la frase del personaje */}
                    <Card.Title>{props.valor.fullName}</Card.Title>
                    <Card.Text>
                    <p>{props.valor.title} <span className="card-text m-3 badge bg-primary text-light">
                    {props.valor.department}</span></p>
                    </Card.Text>
                </div>
            </div>                
            </Card.Body>
        </Card>
    );
};

export default EmpleadoRow;