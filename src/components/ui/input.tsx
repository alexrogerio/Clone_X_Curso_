"use client"
import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    placeholder: string;
    password? : boolean;
    type?: string
    icon?: IconDefinition;
    filled?: boolean;
    value?: string;
    onChange?: (n : string) => void;
}


export const InputZ = ({placeholder,password,type ,icon, filled, value,onChange }: Props) => {
    const [showPass,setShowPass] = useState(false)

    return (
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'} `}>
            {icon && 
                <FontAwesomeIcon 
                    icon={icon}
                    className="size-6 ml-4 text-gray-500"
                   
                />
            }
            <input  className="flex-1 outline-none bg-transparent h-full px-4"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                type={password && !showPass ? 'password' : type && type}
            />
            {password &&
                <FontAwesomeIcon 
                onClick={() => setShowPass(!showPass)}
                    icon={showPass? faEye : faEyeSlash}
                    className="cursor-pointer size-6 text-gray-500 mr-4"
                />
            }
        </div>
    )
}