import { useState, useEffect } from "react";
import {ref,uploadBytes, getDownloadURL,  listAll, list, deleteObject} from "firebase/storage";
import { v4 } from "uuid";
import {storage} from '../Firebase'
import "./uploadif.css";


function Upfile() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

 




  return (
    <div className="one">
      <input className="one"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button className="one" onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return( <div> <img className="one" src={url} />

        
        
        </div> );

      })}

      
    </div>
  );
}

export default Upfile;