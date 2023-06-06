import { useState } from 'react'
import { uploadService } from '../services/upload.service'

export function ImgUploader({ onUploaded = null, inputClass, title, labelClass }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 500,
    width: 500,
  })
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgData({ imgUrl: secure_url, width, height })
    setIsUploading(false)
    onUploaded && onUploaded(secure_url)
  }

  return (
    <>
      {imgData.imgUrl && <img src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
      <input className={inputClass} type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
      <label className={labelClass} htmlFor="imgUpload">{isUploading ? 'Uploading...' : title}</label>
    </>
  )
}