import Container from '@mui/material/Container';
import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';

interface Company {
  name: string,
  email: string,
  status: string
}

interface Data {
  data: Company[] | [],
  setData: () => void;
}

export const DataContext = createContext<Data | null>(null);

function App() {
  const [data, setData] = useState<Company[]>([]);

  useEffect(() => {
    if(data.length === 0) updateData();
  }, [])

  const updateData = () => {
    setData([]);
    fetch('http://demo2211087.mockable.io/mock', { method: 'post' })
    .then(res => res.json())
    .then(res => res.companies)
    .then(res => setData(res));
  }

  return (
    <DataContext.Provider value={{ data: data, setData: updateData }}>
       <Container maxWidth='lg'>
          <Header/>
          <Table/>
       </Container>
    </DataContext.Provider>
  );
}

export default App;
