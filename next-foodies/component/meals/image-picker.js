'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){
    const [picImage, setPicImage] = useState();
    const imageInputRef = useRef();
    function handlePickClick(){
        imageInputRef.current.click();
    }
    function handleImageChange(event){
        const file = event.target.files[0];
        if(!file){
            setPickedImage(null);
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPicImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker} >
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!picImage && <p>No image picked yes.</p>}
                    {picImage && <Image src={picImage} alt='Image' fill />}
                </div>
                <input className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name} ref={imageInputRef} onChange={handleImageChange} />
                <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    )
}