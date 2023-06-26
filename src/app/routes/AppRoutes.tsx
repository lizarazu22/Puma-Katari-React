
import { Navigate, Route, Routes } from "react-router-dom";

import { useStore } from "../../context/ContextProvider";
import TemporaryDrawer from "../layout/AppLayout";
import ItemsComponent from "../../../src copy/app/components/ItemsComponent";
import HomeComponent from "../../../src copy/app/components/CarritoComponent";
import RequireAuth from "../../../src copy/views/RequireAuth";
import Incallojeta1 from "../pages/IncaLlojNorte";

export const AppRoutes = () => {
  const { auth } = useStore();
  return (
  <Routes>
    <Route path="/" element={
    <TemporaryDrawer
    />}>
    <Route path="" >
       
      <Route path="home" element={<Incallojeta1

      />} /> 
      </Route>
      </Route>
      
      
  </Routes>
  )
};

