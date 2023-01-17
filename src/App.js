import './App.css';
import {Simpson} from "./components/Simpson";

const App =()=> {
  return (
    <div className="App">
        <h1>The Simpsons</h1>
        <Simpson url={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                 h={'Homer'}
                 p={'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.'}>

        </Simpson>
        <Simpson url={'https://cdn.shopify.com/s/files/1/0054/4371/5170/products/FiGPiN_763MargeSimpsonTHESIMPSONSPIN.png?v=1636667368'}
                 h={'Marge'}
                 p={'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is the homemaker and matriarch of the Simpson family. '}>

        </Simpson>
        <Simpson url={'https://i.pinimg.com/originals/98/b3/71/98b371cd43ead599d22bb40590df8287.jpg'}
                 h={'Bart'}
                 p={'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family.'}>

        </Simpson>
        <Simpson url={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
                 h={'Lisa'}
                 p={'Lisa Marie Simpson (born May 9, 1983) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.'}>

        </Simpson>
        <Simpson url={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
                 h={'Maggie'}
                 p={'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and youngest child of Marge and Homer Simpson.'}>

        </Simpson>

        <h1>Rick and Morty</h1>
    </div>
  );
}

export default App;
