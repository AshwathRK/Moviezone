import React from 'react'

export default function 
() {
  return (
    <div className='footer flex flex-col w-full items-center justify-around'>
        <button type="button" className="btn w-60 my-5 text-white poppins-bold border hover:opacity-70 active:opacity-60">Sign in for more access</button>
        <div className='flex justify-between items-center socialInfo h-55 gap-x-4 my-5'>
                <div className='w-99 h-30 border rounded-xl flex flex-col items-center justify-around'>
                    <h5 className='text-white poppins-semibold'>Follow MoiveZone on social</h5>
                    <div className='flex items-center justify-center gap-x-3'>
                        <button type="button" className="btn socialbtn btn-outline-light"><img src="./public/Social/instagram-logo.png" className='socialbtnimg w-6' /></button>
                        <button type="button" className="btn socialbtn btn-outline-light"><img src="./public/Social/facebook-app-symbol.png" className='socialbtnimg w-6' /></button>
                        <button type="button" className="btn socialbtn btn-outline-light"><img src="./public/Social/twitter.png" className='socialbtnimg w-6' /></button>
                        <button type="button" className="btn socialbtn btn-outline-light"><img src="./public/Social/youtube.png" className='socialbtnimg w-6' /></button>
                    </div>
                </div>
                <div className='w-99 h-30 border rounded-xl flex'>
                    <div className='w-3/5 h-full rounded-l-xl flex flex-col justify-center items-start'>
                        <h5 className='poppins-semibold px-3 text-white'>Get the MovieZone app</h5>
                        <h6 className='text-white px-3'>For Android and iOS</h6>
                    </div>
                    <div className='w-2/5 h-full rounded-r-xl flex items-center justify-center'>
                        <div className='w-3/5 h-4/5 p-2 bg-white'>
                            <img src="./public/imdb qr.png" className='w-full h-full' />
                        </div>
                    </div>
                </div>
        </div>
        <div>
            <div className=' flex flex-col footerLinks items-center'>
                <ul className='flex gap-3 topLinks'>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Help</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Site Index</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Moviezone Pro</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Box Office Mojo</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>License Moviezone</li>
                </ul>
                <ul className='flex gap-3 buttomLinks'>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Press Room</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Advertising</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>JObs</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Conditions of use</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Privacy policy</li>
                    <li className='text-white poppins-semibold hover:opacity-70 active:opacity-60 pointer'>Your Ads Privacy Choices</li>
                </ul>
                <ul className='flex gap-3'>
                    <p className='text-white poppins-requler text-sm pointer'>1990-2025 by MovieZone.com,(Learnig purpose)</p>
                </ul>
            </div>
        </div>
    </div>
  )
}
