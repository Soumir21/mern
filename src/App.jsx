import {BrowserRouter,Routes,Route, Router} from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from './pages/About'
import {Contact} from './pages/contact'
import {Service} from './pages/service'
import {Login} from './pages/login'
import {Register} from './pages/register'
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import {Adminlayout}from "./components/Layouts/Admin-layout"
import { Admincontact } from "./pages/Admin-contact";
import { Adminusers } from "./pages/Admin-users";
const App=()=>{
 return <>
  <BrowserRouter>
  <NavBar />
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<Adminlayout />}>
        <Route path="users" element={<Adminusers/>} />
        <Route path="contacts" element={<Admincontact />} />
      </Route>
  </Routes>
  <Footer />
  </BrowserRouter>
 </>
}

export default App;