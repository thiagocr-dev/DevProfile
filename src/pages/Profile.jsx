import { useParams } from 'react-router'

function Profile() {
    const {id} = useParams()

    return (
        <div className="profile__container">
            <h1>Perfil del desarrollador #{id}</h1>
            <p>Aquí se mostrarán los detalles del desarrollador seleccionado.</p> {/* desarrollar mas */}
        </div>
    )
}

export default Profile
