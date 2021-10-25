import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main";

import classes from "./App.module.css";
const App = () =>{
    
    return(
        <div className={classes.app}>
            <Header />
            <Main />
            <Footer />
        </div>

    );
}

export default App;