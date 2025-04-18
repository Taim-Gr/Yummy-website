"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInRef = useRef();
  function handlePickClick() {
    imageInRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
    }
    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked Yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user ."
              fill
            />
          )}
        </div>
        <input
          ref={imageInRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick Your Image
        </button>
      </div>
    </div>
  );
}
