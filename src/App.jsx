import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import IsPrivate from "./components/IsPrivate";
import Navbar  from "./components/Navbar";
import Login from "./pages/Login";
import NotFound from "./pages/Error/NotFound";
import Error from "./pages/Error/Error";
import EditTeam from "./pages/Admin/EditTeam";
import CreateTeam from "./pages/Admin/CreateTeam";
import EditTreatment from "./pages/Admin/EditTreatment";
import CreateTreatment from "./pages/Admin/CreateTreatment";

function App() {
  return (
    <section className="layout">
      <Navbar className="header" />

      
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/treatments" element={<Treatments />} />
          <Route path="/team" element={<Team />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin"
            element={
              <IsPrivate>
                <Admin />
              </IsPrivate>
            }
          />
          <Route
            path="/teamEdit/:teamId"
            element={
              <IsPrivate>
                <EditTeam />
              </IsPrivate>
            }
          />
          <Route
            path="/teamCreate"
            element={
              <IsPrivate>
                <CreateTeam />
              </IsPrivate>
            }
          />

<Route
            path="/treatmentEdit/:treatmentId"
            element={
              <IsPrivate>
                <EditTreatment />
              </IsPrivate>
            }
          />
          <Route
            path="/treatmentCreate"
            element={
              <IsPrivate>
                <CreateTreatment />
              </IsPrivate>
            }
          />







          <Route path="/login" element={<Login />} />

          {/* //Error Routes */}
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      

      <Footer className="footer" />
    </section>
  );
}

export default App;
