import "./App.scss";
import Navbar from "./Layout/Navbar/navbar";
import Content from "./Layout/Content/content";
import Footer from "./Layout/Footer/footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
