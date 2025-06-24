import EmpleadoRow from './EmpleadoRow'

const EmpleadoList = ({empleados}) => {
    return (
        <>
           <section className='container mb-5 py-3 w-50'>
            {/* definicion de sistema de grillas */}
            <h1>lista empleados</h1>
            <div className='row row-cols-1'>
                {/* MAP recorre cada elem del arreglo y llama al componente EmpleadoRow,
                para armar la lista de empleados. */}
                {
                // empleados.map((valor,indice)=><EmpleadoRow key={indice} info={valor}></EmpleadoRow>)
                }
            </div>
        </section>
        </>
    );
};

export default EmpleadoList;