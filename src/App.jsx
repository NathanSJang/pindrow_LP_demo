import Jumbotron from './page/Jumbotron';
import CreatorsAndProviders from './page/CreatorsAndProviders';
import SectionText from './page/SectionText';
import AllInOne from './page/AllInOne';
import EtGaming from './page/EtGaming';
import Footer from './comp/Footer';


function App() {
  return (
    <div className="app">
       <Jumbotron />
       <CreatorsAndProviders />
       <SectionText />
       <AllInOne />
       <EtGaming />
       <Footer />
    </div>
  );
}

export default App;
