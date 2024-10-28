import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faXmark ,faUser} from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/search-input";
import { NavItem } from "../nav/nav-item";
import { NavLogout } from "../nav/nav-logout";

type Props = {
    closeAction: () => void;
}

export const HomeMenu = ({closeAction} : Props) => {
    return (
        <div className="lg:hidden fixed inset-0 p-4 bg-black ">
            <div className="flex justify-between items-center pl-2">
                <Logo size={24} />
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-10 rounded-full border-2 border-gray-900">
                    <FontAwesomeIcon icon={faXmark}  className="size-5"/>
                </div>
            </div>
            <div className="my-6">
                <SearchInput  />
            </div>
            <div>
                <nav className="mt-11">
                    <NavItem 
                        href="/home"
                        icon={faHouse}
                        label="Página Inicial"
                    />
                    <NavItem 
                        href="/profile"
                        icon={faUser}
                        label="Meu Perfil"
                    />
                    <NavLogout />
                </nav>
            </div>
        </div>
    )
}