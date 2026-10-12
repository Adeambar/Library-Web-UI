import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './utilities/theme';
import PageRoutes from './routes/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='font-sans'>
      <ThemeProvider theme={theme}>
        <PageRoutes></PageRoutes>
      </ThemeProvider>
      <ToastContainer
        position={"top-right"}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme={"light"}
      />
    </div>
  );
}

export default App;
