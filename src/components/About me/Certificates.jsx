import React from "react";
import classes from "./Certificates.module.css";
import reactCertificate from "../../assets/cetificates/react-certificate.png";
import mgiCertificate from "../../assets/cetificates/mgi-certificate.png";
import engCertificate from "../../assets/cetificates/english-certificate.png";


const Certificates = () => {
    return (
        <article className={classes["certificates-article"]}>
            <h3>Certificates</h3>
            <div className={classes.certificates}>
                <div className={classes.certificate}>
                    <img src={reactCertificate} alt="React - The Complete Guide 2024" />
                    <span>React - The Complete Guide 2024</span>
                </div>
                <div className={classes.certificate}>
                    <img src={engCertificate} alt="12 Project English Course" />
                    <span>12 Project English Course</span>
                </div>
                <div className={classes.certificate}>
                    <img src={mgiCertificate} alt="MGI English School" />
                    <span>MGI English School</span>
                </div>
            </div>
        </article>
    );
};


export default Certificates;