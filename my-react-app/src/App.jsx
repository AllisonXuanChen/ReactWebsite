import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"


function App() {

  return(
 // we can only return one component, unless we use empty <></>
<>
      <Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Student name="Allison"/>
      <UserGreeting isLoggedIn={true} username="Allison"/>
    </>
  );
}
// dont forget to export default
export default App
