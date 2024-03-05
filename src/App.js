import { useEffect, useState } from 'react';
import './App.css';
import Page from './pages/Page';
import axios from 'axios'

const url = '/api/products'

function App() {
  return ( 
    <Page/>
  );
}

export default App;
