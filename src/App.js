import './App.css';
import Table from './components/Table';

// const data = [
//   ['id', 'Название автомобиля', 'Тип кузова'],
//   [1, 'BMW M5', 'Седан'],
//   [2, 'BMW X5', 'Хэтчбэк'],
//   [3, 'Audi Q7', 'Хэтчбэк'],
// ];

const data = [
  ['Id', 1, 2],
  ['Марка', 'BMW M5', 'BMW X5'],
  ['Тип кузова', 'Седан', 'Хэтчбэк'],
];

function App() {
  return (
    <div className="App">
      <div>Автомбили</div>
      <Table data={data} />
    </div>
  );
}

export default App;
