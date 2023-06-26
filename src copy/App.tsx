import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "../src/router/router/AppRouter";
import { AppTheme } from "./theme";
import StoreProvider from "../src/context/ContextProvider";
import { AuthProvider } from "./context/AuthProvider";
import { ItemProvider } from "./context/ItemsContext";

function App() {
 
  return (
    <StoreProvider>
      <AuthProvider>
        <ItemProvider>
      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>
      </ItemProvider>
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
