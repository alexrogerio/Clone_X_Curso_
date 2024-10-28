'use client'

import { user } from "@/data/user"
import { faImage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonZ } from "../ui/button"

export const TweetPost = () => {
    const handleImageUpload = () => {

    }

    const handlePOstClick = () => {

    }

    return (
        <div className="flex gap-6 px-6 py-6 border-b-2 border-gray-900">
            <div>
                <img src={user.avatar} alt={user.name} className="size-12 rounded-full"/>
            </div>
            <div className="flex-1">
                <div className="min-h-14 outline-none text-white empty:before:content-[attr(data-placeholder)] empty:before:text-gray-500"
                    contentEditable
                    role="textbox"
                    data-placeholder="O que está acontecendo?"
                >

                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="cursor-pointer" onClick={handleImageUpload}>
                        <FontAwesomeIcon icon={faImage} className="size-6" />
                    </div>
                    <div className="w-28 font-bold">
                        <ButtonZ 
                            label="Postar"
                            size={2}
                            onClick={handlePOstClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}