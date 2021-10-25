import classes from './Footer.module.css'
import {AiTwotoneHeart} from 'react-icons/ai'
const Footer = () => {
    return(
        <div className={classes.footer}>
                <AiTwotoneHeart color="tomato" size="1.2rem"/> <span>Shubham Khulbe </span>
        </div>
    )
};

export default Footer;