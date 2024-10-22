'use client'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { InputZ } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?:string;
    hideOnSearch?: boolean

}

export const SearchInput = ({defaultValue,hideOnSearch} : Props) => {
    const router = useRouter();
    const pathName = usePathname();
    const [seachInput, setSeachInput] = useState(defaultValue ?? '');

    const handleSeach = () => {
        if(seachInput && seachInput.trim()){
            router.push('/search?q='+encodeURIComponent(seachInput));
        }
    }
    if(hideOnSearch && pathName == '/seach') return null;
    return (
        <InputZ
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={seachInput}
            onChange={t => setSeachInput(t)}
            onEnter={handleSeach}
        />
    );
}