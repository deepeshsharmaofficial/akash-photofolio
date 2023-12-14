import React from 'react';
import { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';

const Progressbar = (file,setFile) => {

    const { progress, url } = useStorage(file);

    useEffect(() => {
        if (url) {
          setFile(null);
        }
    }, [url, setFile]);

  return (
    <>
        <div className='bar-container'>
            <div className='bar' style={{width:'20%' }}>

            </div>
        </div>
    </>
  )
}

export default Progressbar
