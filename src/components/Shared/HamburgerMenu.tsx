
import { Menu, X } from "react-feather";

export const HamburgerMenu = ({ size, handleMenu, isOpen }: { size: number, handleMenu: () => void, isOpen: boolean }) => {


    return (
        <>

            <div onClick={handleMenu} className='text-cyan-500 md:hidden self-center'>
                {isOpen ? <X size={size} /> : <Menu size={size} />}

            </div>

        </>

    )
}