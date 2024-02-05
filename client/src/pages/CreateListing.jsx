
const CreateListing = () => {
  return (
    <main className='max-w-4xl mx-auto p-3'>
        <h1 className='font-semibold text-3xl my-7 text-center'>Create Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input className='border p-3 rounded-lg' type="text" placeholder='Name' id='name' maxLength='62' minLength='10' required />
                <textarea placeholder='Description' type='text' id='description' required className='border p-3 rounded-lg'></textarea>
                <input type="text" placeholder='Address' id='address' required  className='border p-3 rounded-lg'/>
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='sale' className='w-5' />
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='rent' className='w-5' />
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='parking' className='w-5' />
                        <span>Parking spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='furnished' className='w-5' />
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" id='offer' className='w-5' />
                        <span>Offer</span>
                    </div>
                </div>
                <div className="flex justify-between sm:flex-col flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                        <input type="number" id="bedrooms" min='1' max='10' required className="w-[20%] p-3 border border-gray-300 rounded-lg" />
                        <p>Beds</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="bathrooms" min='1' max='10' required className="w-[20%] p-3 border border-gray-300 rounded-lg" />
                        <p>Baths</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="regularPrice" min='1' max='10' required className="w-[20%] p-3 border border-gray-300 rounded-lg" />
                        <div className="flex flex-col items-center">
                            <p>Regular Price</p>
                            <span className="text-xs">($ / month )</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="number" id="discountPrice" min='1' max='10' required className="w-[20%] p-3 border border-gray-300 rounded-lg" />
                        <div className="flex flex-col items-center">
                            <p>Discounted Price</p>
                            <span className="text-xs">($ / month )</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1  gap-4">
                <p className="font-semibold">Images:
                    <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6)</span>
                </p>
                <div className="flex gap-4">
                    <input type="file" id="images" accept="image/*" multiple className="border border-gray-300 rounded w-full p-3" />
                    <button className="text-green-700 border border-green-700 p-3 rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
                </div>
                <button className="text-white bg-slate-700 rounded-lg hover:opacity-95 disabled:opacity-80 p-3 uppercase">Create Listing</button>
            </div>
        </form>
    </main>
  )
}

export default CreateListing
