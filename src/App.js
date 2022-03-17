import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       {
//         countries.map(country => <ShowCountres name={country.name.common} population={country.population} region={country.region}></ShowCountres>)

//       }
//     </div>
//   );
// }


// function ShowCountres(props) {
//   return (
//     <div className='country'>
//       <h4>name: {props.name}</h4>
//       <p>Region:{props.region} </p>
//       <p>Population: {props.population}</p>
//     </div>
//   );
// }

export default App;
