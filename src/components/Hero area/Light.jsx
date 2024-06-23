import classes from './Light.module.css';

const Light = ({color, children}) => {
    return (
        <div className={classes.container}>
            {children}
            {/* <div className={`${classes.light} ${classes[color]}`}></div> */}
        </div>
    );
}

export default Light;