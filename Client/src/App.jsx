import './App.css'
import { useRef, useState, useEffect } from 'react'
import { uploadFile } from './Services/api.js'
import axios from 'axios'

function App() {

  const [file,setFile] = useState('')
  const [result,setResult] = useState('')
  console.log(result);
  // console.log(`File : ${file}`);

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'

  const fileInputRef = useRef()

  // ----------------------------------------------------------------------------------
  const onUploadClick = () =>{
    fileInputRef.current.click()
  }

  useEffect(()=>{
    async function getImage(){
      if(file){
        const formData = new FormData();
        formData.append('Name',file.name)
        formData.append('File',file)

        // console.log('file',formData);
        const res = await axios.post('http://localhost:8000/uploads',formData)
        .catch((error)=>console.log(error.message))
        // console.log(res);
        // console.log(res.data.path);
        setResult(res.data.path)
      }
    }
    getImage()
  },[file])

  function handleFileChange (e){
    const data = e.target.files[0]
    // console.log(`File : ${data}`);
    setFile(data)
    // console.log(`my File ; ${file.name}`);
   }

  return (
    <>
      <div className='container'>

        <img src={logo} alt='banner' />

        <div className='wrapper'>
          <h1>Simple File Sharing!</h1>
          <p>Upload and Share the download Link</p>

          <button onClick={()=>onUploadClick()}>Upload</button>

          <input type="file" ref={fileInputRef} style={{display:'none'}}
          onChange={ handleFileChange }
          />

          <a href={result} target='_blank'>{result}</a>
        </div>
      </div>
    </>
  )
}

export default App
