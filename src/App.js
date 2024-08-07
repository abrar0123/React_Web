import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './sections/MainPage/mainpage';
import Test from './sections/test/test';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import NotFoundPage from './pages/notFoundPage';
import portfolioPg from './pages/PortfolioPg';
import ProjectsPg from './pages/ProjectsPg';

function App() {
  return (
    <BrowserRouter>
      {/* <Mainpage /> */}
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/portfolio" Component={portfolioPg} />
        <Route path="/projects" Component={ProjectsPg} />

        <Route path="*" Component={NotFoundPage} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
