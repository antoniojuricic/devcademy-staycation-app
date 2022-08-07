import React from 'react';
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import styles from "./FeaturedSection.module.css";

type Props = {
  title: string;
  callToAction: string;
  slug: string;
  children: React.ReactNode;
};

const FeaturedSection = (props: Props) => {
  return (
    <div className={styles.section}>
      <div className={styles.bar}>
        <h4>{props.title}</h4>
        <Link to={`/${props.slug}`}><div className={styles.viewAll}>{props.callToAction}</div></Link>
      </div>
      <Grid container spacing={3}>
        {props.children}
      </Grid>
    </div>
  );
};

export default FeaturedSection;
