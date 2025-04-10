import React from 'react'

export default function PopulerIntrests() {
    return (
        <div className='populerInstrests'>
            <div className='populerTitle flex items-center'>
                <h3 className='title poppins-bold flex items-center my-5'>Populer interests<img src="./right-arrow.png" className='w-5 mx-2 arrowimage' /></h3>
            </div>
            <div className='popcards grid gap-3 justify-center'>
                <div className='populercards rounded-xl'>
                    <img src="./Category/superHeros.jpeg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>SuperHeros</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Fantasy.jpg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Fantasy</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/DarkComedy.jpg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Dark Comedy</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Thriller.webp" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Thriller</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/commedy.webp" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Comedy</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Anime.jpeg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Anime</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Biography.jpg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Biography</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Action.webp" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Action</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Adventure.jpg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Adventure</h5>
                    </div>
                </div>

                <div className='populercards rounded-xl'>
                    <img src="./Category/Romance.jpg" className='w-full h-65 object-cover rounded-t-xl' />
                    <div className='w-full h-18 flex justify-center items-center'>
                        <h5 className='poppins-bold text-white'>Romance</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
