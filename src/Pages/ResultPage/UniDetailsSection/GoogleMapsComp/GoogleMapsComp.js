import classes from './GoogleMapsComp.module.css';

const GoogleMapsComp = () => {
    return (
        <iframe
        className={classes.iframeStyle}
        title="Stanford University"
        width="100%"
        height="100%"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDwNoCvdev9LYCoC89gBc-ONHhjDXdh0Ik&q=Stanford University" allowfullscreen>
        </iframe>
    )
}

export default GoogleMapsComp
