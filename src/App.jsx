import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// First page components
import Header from './1st page/Header';
import Body from './1st page/Body';

// Second page components
import SidebarLayout from './2nd page/SidebarLayout';
import Login from './2nd page/Login';
import SignUpForm from './2nd page/SignUpForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Body />
          </>
        } />
        <Route path="/dashboard" element={
          <>
            <div className="auth-buttons">
              <Login />
              <SignUpForm />
            </div>
            <SidebarLayout />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;