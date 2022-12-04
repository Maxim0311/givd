import { useState } from 'react';

export const useServerGoods = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (page, size) => {
    setItems([]);
    setLoading(true);
    setError(null);
    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`
    )
      .then(result => result.json())
      .then(data => {
        setItems(data);
        console.log(data);
      })
      .catch(() => setError('Произошла ошибка при загрузке данных'))
      .finally(() => setLoading(false));
  };

  return { items, loading, error, fetchData };
};
