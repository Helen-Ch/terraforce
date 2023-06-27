import React from "react";

import styles from "./Header.module.css";

type HeaderProps = {
    count: number,
}

function Header({count}: HeaderProps) {
    return (
        <div className={styles.Header}>
            <h2>Today <span className={styles.Counter}>{count}</span> posts are available</h2>
        </div>
    )
}

export default Header;