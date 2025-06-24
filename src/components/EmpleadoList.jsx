import EmpleadoRow from './EmpleadoRow'
import { Container } from 'react-bootstrap'

const EmpleadoList = ({ empleados }) => {
    return (
        <Container className='mb-5 py-3 w-50'>
            <div className='row row-cols-1'>
                {/* MAP recorre cada elem del arreglo y llama al componente EmpleadoRow,
                para armar la lista de empleados. */}
                {
                    empleados.map((valor, indice) => <EmpleadoRow key={indice} valor={valor}></EmpleadoRow>)
                }
            </div>
        </Container>
    );
};

export default EmpleadoList;