import logo from './logo.svg';
import './App.css';
import { useServerGoods } from './hooks/useServerGoods';
import { useEffect, useState } from 'react';
import PassangerItem from './components/PassangerItem';

function App() {
  const { fetchData, items, loading, error } = useServerGoods();

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

  useEffect(() => {
    fetchData(page, size);
  }, []);

  const showMore = () => {
    setSize(s => s + 3);
    fetchData(page, size);
  };

  return (
    <div className="App">
      {loading && 'Loading...'}
      {items?.data?.map(item => (
        <PassangerItem _id={item?._id} name={item?.name} trips={item?.trips} />
      ))}
      {items?.totalPages > 1 && (
        <button onClick={showMore}>Показать больше...</button>
      )}
    </div>
  );
}

export default App;
