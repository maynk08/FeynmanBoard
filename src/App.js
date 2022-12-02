
import AddItems from './Components/Add Items/AddItems';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return <BrowserRouter>
   <Routes>

    <Route path="/" element={<Homepage/>}/>

    <Route path="/dashboard" element={<Dashboard/>}/>

    <Route path="/AddItems" element={<AddItems/>}></Route>


   </Routes>
   {/* <Homepage/> */}
   {/* <Dashboard/> */}
   {/* <AddItems/> */}
   </BrowserRouter> 

// <Heading>Hello React !!</Heading>
// <Routes>
//   <Route path='/' element = {<Register/>}/>
//   <Route path='/Register' element = {<Register/>}/>
//   <Route path='/login' element = {<Login/>}/>
//   <Route path= '/Books' element = {<Books/>}/>
//   <Route path="/CreateBooks" element = {<CreateBooks/>}/>
//   <Route path="/GetBooks" element = {<GetBooks/>}/>
//   <Route path="/UpdateBooks" element = {<UpdateBooks/>}/>
//   <Route path="/DeleteBooks" element = {<DeleteBooks/>}/>
//   {/* <Route path='/contacts' element = {<div>Contact page</div>}/> */}
// </Routes>
// </BrowserRouter>
}

export default App;
