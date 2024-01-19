import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CameraComponent from "../features/camera/CameraComponent";


export const BaseRoutes = () => {

    // const { usuario } = useContext(AuthContext)

    return(
        <>        
        <Routes>
        {/* Rutas públicas */}
          <Route path="/" element={<CameraComponent />} />


        {/* Rutas privadas */}
          {/* <Route path="/home" element={
            <ProtectedRoute user={usuario}>
             Añadir aqui el componente privado
            </ProtectedRoute>
          } /> */}
        </Routes>
        </>
    )

}

export default BaseRoutes;