
import { Menu, X } from "react-feather";

export const HamburgerMenu = ({ size, handleMenu, isOpen, buttonRef }: { size: number, handleMenu: () => void, isOpen: boolean, buttonRef:any }) => {


    return (
        <>

            <button ref={buttonRef} onClick={handleMenu} className='text-cyan-500 md:hidden self-center'>
                {isOpen ? <X size={size} /> : <Menu size={size} />}

            </button>

        </>

    )
}