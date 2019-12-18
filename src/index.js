import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import styles from "./styles.css";


export default class SfaAnimation extends Component {
  static propTypes = {
    alertType: PropTypes.string
  };

  renderSuccess() {
    return (
      <div className={styles.fModalAlert}>
        <div
          className={`${styles.fModalIcon} ${styles.fModalSuccess} ${styles.animate}`}
        >
          <span
            className={`${styles.fModalLine} ${styles.fModalTip} ${styles.animateSuccessTip}`}
          />
          <span
            className={`${styles.fModalLine} ${styles.fModalLong} ${styles.animateSuccessLong}`}
          />
          <div className={`${styles.fModalPlaceholder}`} />
          <div className={`${styles.fModalFix}`} />
        </div>
      </div>
    );
  }

  renderError() {
    return (
      <div className={`${styles.fModalAlert}`}>
        <div
          className={`${styles.fModalIcon} ${styles.fModalError} ${styles.animate}`}
        >
          <span className={`${styles.fModalXMark}`}>
            <span
              className={`${styles.fModalLine} ${styles.fModalLeft} ${styles.animateXLeft}`}
            />
            <span
              className={`${styles.fModalLine} ${styles.fModalRight} ${styles.animateXRight}`}
            />
          </span>
          <div className={`${styles.fModalPlaceholder}`} />
          <div className={`${styles.fModalFix}`} />
        </div>
      </div>
    );
  }

  renderWarning() {
    return (
      <div className={`${styles.fModalAlert}`}>
        <div
          className={`${styles.fModalIcon} ${styles.fModalWarning} ${styles.scaleWarning}`}
        >
          <span className={`${styles.fModalBody} ${styles.pulseWarningIns}`} />
          <span className={`${styles.fModalDot} ${styles.pulseWarningIns}`} />
        </div>
      </div>
    );
  }

  render() {
    switch (this.props.alertType){
      case 'success':
        return this.renderSuccess()
      case 'error':
        return this.renderError()
      case 'warning':
        return this.renderWarning()
      default:
        throw 'alertType must be success, error or warning';
    }
  }
}
