import { Container } from 'react-bootstrap'
import EmpleadoList from './EmpleadoList'

const EmpleadoAvatar = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.jpg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.jpg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado01.jpg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado02.jpg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado01.jpg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado02.jpg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado01.jpg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado02.jpg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado01.jpg" },
    ]
    return (
        <Container>
            {/* <EmpleadoList empleados={empleados}></EmpleadoList> */}
            <EmpleadoList></EmpleadoList>
        </Container>
    );
};

export default EmpleadoAvatar;