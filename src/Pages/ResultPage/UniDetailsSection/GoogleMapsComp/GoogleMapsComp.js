import classes from './GoogleMapsComp.module.css';

const GoogleMapsComp = (props) => {
    const uniData = props.getUniDetails();
    const source = "//www.google.com/maps/embed/v1/search?key=AIzaSyDwNoCvdev9LYCoC89gBc-ONHhjDXdh0Ik&q=" + uniData["Name"]
    return (
        <iframe
        className={classes.iframeStyle}
        title={uniData["Name"]}
        width="100%"
        height="100%"
        frameBorder="0"
        src = {source} allowFullScreen>
        </iframe>
    )
}

export default GoogleMapsComp
