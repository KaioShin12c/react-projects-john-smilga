import "./App.css";
import Projects from "./features/Projects";
import BirthdayReminder from './features/birthday-reminder'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Routes as RoutesPath } from "./routes";

const Layout = () => {
  return <div className="layout"><Outlet /></div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Projects />} />
          <Route path={RoutesPath.BIRTHDAY_REMINDER} element={<BirthdayReminder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
