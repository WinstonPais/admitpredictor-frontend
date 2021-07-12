import classes from './TableUniLogo.module.css';

const TableUniLogo = (props) => {
    return (
        <img alt={props.name} src={props.url} className={classes.imageStyle}/>
    )
}

export default TableUniLogo
