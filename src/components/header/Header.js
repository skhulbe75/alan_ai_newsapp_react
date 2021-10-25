import classes from './Header.module.css'

const Header = () =>{
    return(
        <div className={classes.header}>
            <div className={classes.logo}>
                {/* <a className={classes.icon}></a> */}
                <h3 className={classes.title}> Alan</h3>
            </div>
            <a href="https://github.com/skhulbe75/weather_app_react.git" rel="noreferrer" target="_blank" className={classes["show-code"]}>Show me the code</a>
        </div>
    )
};

export default Header;