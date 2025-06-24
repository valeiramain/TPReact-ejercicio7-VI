
import EmpleadoAvatar from './components/EmpleadoAvatar'

function App() {


  return (
    <>
      <header className="bg-dark-subtle p-3">
        <h1>Lista de Empleados</h1>
      </header>
      <main className="container">
        <EmpleadoAvatar></EmpleadoAvatar>
      </main>
      <footer className="bg-dark-subtle p-3 text-center">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
