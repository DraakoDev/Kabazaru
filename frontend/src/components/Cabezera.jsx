import logo from '../assets/logo.png'

export const Cabezera = () => {
    return (
        <div className='bg-gray-800 p-2'>
            <header className='flex items-center gap-4'>
                <figure className='w-24 p-0 m-0'>
                    <img src={logo} alt="Logo"/>
                </figure>
                <h1 className=' text-4xl text-amber-50 font-bold italic'>Kabazaru</h1>
            </header>
        </div>
    )
}