import React from 'react';
import './App.css';
import UpdateService from './components/service/UpdateService';
import Services from './components/service/Services';
import Home from './components/commons/navigation/Home';
import Header from './components/commons/navigation/Header';
import Footer from './components/commons/navigation/Footer';
import CustomerList from './components/customer/CustomerList';
import ListContract from './components/contract/ListContract';
import CreateCustomer from './components/customer/CreateCustomer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateService from './components/service/CreateService';
import UpdateCustomer from './components/customer/UpdateCustomer';
import CreateContract from './components/contract/CreateContract';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/customers/create-customer" element={<CreateCustomer />} />
          <Route path="/customers/update-customer/:id" element={<UpdateCustomer />} />
          <Route path='/contracts' element={<ListContract />}></Route>
          <Route path='/contracts/create-contract' element={<CreateContract />}></Route>
          <Route path='/services/create-services' element={<CreateService />}></Route>
          <Route path='/services/update-service/:id' element={<UpdateService />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    );
  }
}

export default App;
