import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import './styles/App.css'
import { initFlowbite } from 'flowbite'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './views/pages/LoginPage'
import Dashboard from './views/pages/Dashboard'
import { useLoginContext } from './context/LoginContext'
import AddBook from './views/pages/AddBook'
import ShowBooks from './views/pages/ShowBooks'
import IssueBook from './views/pages/IssueBook'
import IssuedBooks from './views/pages/IssuedBooks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserRegister from './views/pages/UserRegister'
import { BookProvider } from './context/BookContext'
import ShowUsers from './views/pages/ShowUsers'


function App() {

  useEffect(() => {
    initFlowbite();
  })

  const { isLogin } = useLoginContext();

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
        {
          isLogin &&
          <>
            <Navbar />
            <Sidebar />
          </>
        }

        {
          isLogin ? <BookProvider>

        <Routes>

          <Route path='/' element={isLogin ? <Dashboard /> : <LoginPage />} />
          <Route path='/dashboard' element={isLogin ? <Dashboard /> : <LoginPage />} />
          <Route path='/addbook' element={isLogin ? <AddBook /> : <LoginPage />} />
          <Route path='/showbooks' element={isLogin ? <ShowBooks /> : <LoginPage />} />
          <Route path='/issuebook' element={isLogin ? <IssueBook /> : <LoginPage />} />
          <Route path='/issuedbooks' element={isLogin ? <IssuedBooks /> : <LoginPage />} />
          <Route path='/userregister' element={isLogin ? <UserRegister /> : <LoginPage />} />
          <Route path='/showusers' element={isLogin ? <ShowUsers /> : <LoginPage />} />
          <Route path='*' element={isLogin ? <Dashboard />: <LoginPage />} />

        </Routes>
          </BookProvider> : 
          <Routes>

          <Route path='*' element={isLogin ? <Dashboard />: <LoginPage />} />

        </Routes>
        }


      </BrowserRouter>

    </>
  )
}

export default App
