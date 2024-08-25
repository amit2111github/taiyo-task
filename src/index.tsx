import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/store';
import { Provider } from 'react-redux';
import Contact from './components/Contact';

import Edit from './components/Edit';

import Chart from './components/Chart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="w-full">
            <Navbar />
            <div className="md:ml-[7%] mt-[80px] md:mt-[0px]">
              <Routes>
                <Route path="/" element={<Navigate to="/contact" />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/edit/:id" element={<Edit />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/*" element={<Navigate to="/contact" />} />
              </Routes>
            </div>
          </div>
        </Provider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
