import React, { useEffect, useState } from "react"

function ImgTest() {
  const [image, setImage] = useState()

  function convertToBase64(e) {
    console.log(e)
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      console.log(reader.result)
      setImage(reader.result)
    }
  }
  return (
    <>
      <div>nie ma</div>
      <input accept="image/*" type="file" onChange={convertToBase64} />
      <img src={image} alt="preview" width={100} height={100} />
    </>
  )
}

export default ImgTest
