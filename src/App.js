import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar />
    <div className="wrapper">
      <Card
        img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Umar"
        age={12}
        email="Cheeeso@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name="Ali"
        age={21}
        email="ah3594396@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80"
        name="Abubaker"
        age={15}
        email="abub@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name="Zia"
        age={18}
        email="Zia@gmail.com"
      />
      <Card
        img="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
        name="Zeshan"
        age={8}
        email="Zeshan@gmail.com"
        />
    </div>
    <Footer />
        </>
  );
}

export default App;
