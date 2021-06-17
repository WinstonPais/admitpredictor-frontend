import classes from './IndexFooter.module.css';

const IndexFooter = () => {
    return (
        <footer className={classes.pb_footer} role="contentinfo">
            <div className="container">
                <div className={["row",classes.marginTop].join(' ')}>
                    <div className="col text-center">
                        <p className="pb_font-14">&copy; 2021. All Rights Reserved. <br/>  Team GB5</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default IndexFooter
