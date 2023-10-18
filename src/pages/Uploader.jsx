import { useState } from 'react'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

export default function Uploader() {
    const [image, setimage] = useState(null);
    const [fileName, setFileName] = useState("No selected file")
    return (
        <main>
            <form action=''
                onClick={() => document.querySelector(".input-field").click()}
                className='flex justify-center items-center border-blue-300 border-dashed border-2'>
                <input hidden type='file' accept='image/*' className='input-field'
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setimage(URL.createObjectURL(files[0]))
                        }
                    }}
                />
                {image ?
                    <img src={image} width={100} height={100} alt={fileName} />
                    :
                    <>
                        <MdCloudUpload color='blue' size={60} />
                        <p>Upload image</p>
                    </>
                }


            </form>
            <section>
                <AiFillFileImage color='#1475cf' />
                <span>
                    {fileName}
                    <MdDelete
                        onClick={() => {
                            setFileName("No SELECTED FILE")
                            setimage(null)
                        }}

                    />
                </span>
            </section>
        </main>
    );
}