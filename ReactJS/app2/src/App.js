import { Learn, Read, Write } from './Book';
import { Blue, Yellow } from './Color';
import { Apple, Dell } from './Laptop';
import { Asus, Realme } from './Mobile';
import { Lenovo, Redmi } from './mobiles';
import { Even, Odd } from './Numbers';

function App() {
  return (
    <div className="App">
      <Read/>
      <Write/>
      <Learn/>

      <Dell/>
      <Apple/>

      <Lenovo/>
      <Redmi/>

      <Blue/>
      <Yellow/>

      <Even/>
      <Odd/>

      <Realme/>
      <Asus/>
      
    </div>
  );
}

export default App;
