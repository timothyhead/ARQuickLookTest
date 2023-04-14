import chicken from './chicken.jpg';
import cube from './Untitled.usdz';
import './App.css';

const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function (event) {   
    if (event.data == "_apple_ar_quicklook_button_tapped") {
        // Handle the user tap.   
        console.log("tapped");
    }
}, false);

function App() {
  return (
    <div className="App">
<h1>Hello</h1>

<a id="ar-link" rel="ar" href={cube + '#applePayButtonType=plain'}>  <img src={chicken}></img></a>
<h1>Hello world</h1>
    </div>
  );
 
}

export default App;
