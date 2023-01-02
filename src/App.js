
import './App.css';

// TASK 2
// import {Congratscard} from './card';

// function App() {
//   return (
//     <div>
//       <Congratscard/>
//     </div>
    
//   );
// }
// export default App;

//TASK 3
// import {League} from "./league";
// function App() {
//   return (
//     <div>
//       <League/>
//     </div>
    
//   );
// }
// export default App;


//TASK 4
// import {Socialbuttons} from "./socialbuttons";
// function App() {
//   return (
//     <div>
//       <Socialbuttons/>
//     </div>
    
//   );
// }
// export default App;


//TASK 5
// import { Notification } from './notification';
// function App(){
//   return(
//     <div>
//       <Notification/>
//     </div>
//   )
// }

// export default App;


// TASK 06

// import { Login } from './loginpage';
// function App(){
//   return(
//     <div>
//       <Login/>
//     </div>
//   )
// }

// export default App;

// TASK 07

// import { Technology } from './technology';
// function App(){
//   return(
//     <div>
//       <Technology/>
//     </div>
//   )
// }

// export default App;


// TASK 08
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import {Congratscard} from "./card";
// import {Menu} from "./Menu";
// import {Home} from "./home";
// import {League} from "./league";
// import { Socialbuttons } from './socialbuttons';
// import { Notification } from './notification';
// import {Login} from "./loginpage";
// import { Technology } from './technology';


// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Routes>
//           <Route path="/" element={<Menu/>}/>
//           <Route path="/home" element={<Home/>}/>
//           <Route path="/card" element={<Congratscard/>}/>
//           <Route path="/league" element={<League/>}/>
//           <Route path="/socialbuttons" element={<Socialbuttons/>}/>
//           <Route path="/notification" element={<Notification/>}/>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/technology" element={<Technology/>}/>

//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;


// Task 09

import {BrowserRouter,Routes,Route} from "react-router-dom";

import { Menu } from './responsive1/menu';
import {Home} from "./responsive1/home";
import { About } from './responsive1/about';
import { Work } from './responsive1/works';
import { Ourfarm } from './responsive1/ourfarm';
import { Products } from './responsive1/products';
import { Testimonials } from './responsive1/testimonial';
import { Organic } from './responsive1/organicfood';

import { Responsive } from './responsive1/responsive';
import {Congratscard} from "./card";
import {Menuone} from "./Menu";
import {Homeone} from "./home";
import {League} from "./league";
import { Socialbuttons } from './socialbuttons';
import { Notification } from './notification';
import {Login} from "./loginpage";
import { Technology } from './technology';
import { Increment } from './moodle/increment';
import { Fruits } from './moodle/fruitscounter';
import { Feedback } from './moodle/feedback';
import { Datetask } from './moodle/datefunction';
import { Jsontask } from './jsontask/jsontask';
import {Details} from './jsontask/jsontask2';
import {Details1} from './jsontask/jsondetails';

function App(){
    return(
      <div>
         
       
        
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Menuone/>}/>
           <Route path="/homeone" element={<Homeone/>}/>
           <Route path="/card" element={<Congratscard/>}/>
           <Route path="/league" element={<League/>}/>
           <Route path="/socialbuttons" element={<Socialbuttons/>}/>
           <Route path="/notification" element={<Notification/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/technology" element={<Technology/>}/>
            
              <Route path="/" element={[<Menuone/>,<Menu/>,<Home/>]}/>
              <Route path="/home" element={[<Menuone/>,<Menu/>,<Home/>]}/>
              <Route path="/work" element={[<Menuone/>,<Menu/>,<Work/>]}/>
              <Route path="/organic" element={[<Menuone/>,<Menu/>,<Organic/>]}/>
              <Route path="/about" element={[<Menuone/>,<Menu/>,<About/>]}/>
              <Route path="/farm" element={[<Menuone/>,<Menu/>,<Ourfarm/>]}/>
              <Route path="/products" element={[<Menuone/>,<Menu/>,<Products/>]}/>
              <Route path="/testimonials" element={[<Menuone/>,<Menu/>,<Testimonials/>]}/>
              <Route path="/responsive" element={[<Menuone/>,<Menu/>,<Responsive/>]}/>
              <Route path="/increment" element={[<Menuone/>,<Increment/>]}/>
              <Route path="/fruits" element={[<Menuone/>,<Fruits/>]}/>
              <Route path="/feedback" element={[<Menuone/>,<Feedback/>]}/>
              <Route path="/datetask" element={[<Menuone/>,<Datetask/>]}/>
              <Route path="/jsontask" element={[<Menuone/>,<Jsontask/>]}/>
              <Route path="/jsontask2" element={[<Menuone/>,<Details/>]}/>
              <Route path="/jsontask2/:id" element={[<Menuone/>,<Details1/>]}/>

            </Routes>
            </BrowserRouter>
        
      </div>
    )
  }
  
  export default App;