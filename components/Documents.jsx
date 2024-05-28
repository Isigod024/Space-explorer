import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import styles from './Documents.module.css';

export default function NasaFileChecker() {
    const [fileData, setFileData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
            axios.get('http://localhost:3001/check-file')
           .then(response => {
               setFileData(response.data);
          })
           .catch(error => {
              setError(error.response ? error.response.data : 'Error');
          });
    }, []);

    return (
        <div className={styles.container}>
            <h1>Vérification du fichier NASA</h1>
            {error ? (
                <div className={styles.error}>Erreur : {error}</div>
            ) : (
                <div className={styles.result}>
                    {fileData && (
                        <div>
                            <h2>{fileData.message}</h2>
                            <pre>{fileData.content || fileData.link}</pre>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
    }

