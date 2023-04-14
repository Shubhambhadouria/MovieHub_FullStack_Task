import React from "react";
import useStyles from "./style";

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <>
        <div className={classes.footer}>
          Copyright 1999-2023 by Refsnes Data. All Rights Reserved. MovieHub is
          Powered by React.js.
        </div>
      </>
    </div>
  );
}

export default Footer;
