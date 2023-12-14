import React,{useState} from 'react';
import logo from '../logo.png';
import '../statics/Navbar.css';
import { IoCloudUploadOutline } from "react-icons/io5";
import Progressbar from './Progressbar';

const Navbar = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/png','image/jpg', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('File type is invalid, Try uploading jpg/jpeg/png');
        }
    }   
    
  return (
    <>
        <div className='navbar'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt="Cloudy" />
                <h1 className='brand-name'>CLOUDY</h1>
            </div>
            {error && <div>{error}</div>}
            {file && <div>{file.name}</div>}
            <div className='icon-container'>
                <form>
                    <label>
                        <input type="file"onChange={changeHandler} />
                        <span><IoCloudUploadOutline className='upload-icon'/></span>
                    </label>
                </form>
            </div>
        </div>
        {file && <Progressbar file={file} setFile={setFile}/>}
    </>
  )
}

export default Navbar
