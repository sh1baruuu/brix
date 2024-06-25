import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
import Home from './views/Home';
import Projects from './views/Projects';

const RouterComponents = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />} />
                        <Route path='aboutme' element={<AboutUs />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default RouterComponents;
