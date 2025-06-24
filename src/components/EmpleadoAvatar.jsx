import { Container } from 'react-bootstrap'
import EmpleadoList from './EmpleadoList'

const EmpleadoAvatar = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "../assets/bartzombie.jpg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "../assets/bartzombie.jpg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "../assets/bartzombie.jpg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "../assets/bartzombie.jpg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "../assets/bartzombie.jpg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "../assets/bartzombie.jpg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "../assets/bartzombie.jpg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "../assets/bartzombie.jpg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "../assets/bartzombie.jpg" },
    ]
    return (
        <Container>
           
            <EmpleadoList empleados={empleados}></EmpleadoList>
        </Container>
    );
};

export default EmpleadoAvatar;