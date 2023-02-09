const Upload: React.FC = () => {
  return (
    <div className="flex mb-6">
      <img className="w-[120px] h-[120px] mr-5" src="https://api.multiavatar.com/9.png" />
      <div className="flex w-full h-[120px] justify-center items-center border-dashed border-2 border-input-gray rounded">
        <label className="font-serif font-light text-input-placeholder" htmlFor="upload">
          Click here to upload an image
        </label>
        <input className="opacity-0 absolute z-[-1]" id="upload" type="file" />
      </div>
    </div>
  )
}

export default Upload
