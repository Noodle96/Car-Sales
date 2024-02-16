import Image from 'next/image'
import { footerLinks } from '@/constants';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 '>
            {/* max-md:bg-red-600 => de 0 a 768 le aplicara bg-red */}
            <div className='flex max-md:flex-col flex-row flex-wrap justify-between gap-5 sm:px-16 px-16 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image
                        src='/logo.svg'
                        alt='Logo principal'
                        width={118}
                        height={18}
                        className='contain'
                    />  
                    <p className='text-base text-gray-700'>&copy; 2023 Sale-Car, Inc.</p>
                </div>

                {/* footer_links tiene a un flex y justify-end */}
                <div className='footer__links'>
                    {footerLinks.map( (item) =>(
                        <div key={item.title} className='footer__link'>
                            <h3 className=' font-bold'>{item.title}</h3>
                            {item.links.map((subitem)=>(
                                <Link
                                    key={subitem.title}
                                    href={subitem.url}
                                    className='text-gray-500'
                                >
                                    {subitem.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-row justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 '>
                <p>@2024 CarHub. Todos los derechos reservados </p>
                <div className='footer__copyrights-link'>
                    <Link href='/' className='text-gray-500'>
                        Politicas de seguridad
                    </Link> 
                    <Link href='/' className='text-gray-500'>
                        Terminos de uso
                    </Link>
                </div>            
            </div>

        </footer>
    )
}

export default Footer