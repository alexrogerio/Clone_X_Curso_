"use client"
import { User } from "@/type/user";
import Link from "next/link";
import { ButtonZ } from "./button";
import { useState } from "react";

type Props = {
    user: User
}

export const RecommendationItem = ({user} : Props) => {
    const [following, setFollowing] = useState(false);
    const handleFollow = () => {
        setFollowing(true)
    }

    return (
        <div className="flex items-center">
            <div className="size-10 mr-2 rounded-full overflow-hidden">
                <Link href={`/${user.slug}`}>
                    <img src={user.avatar} alt={user.name} className="size-full object-cover" />
                </Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={`/${user.slug}`} className="block truncate">{user.name}</Link>
                <div className="truncate text-sm text-gray-400" >@{user.slug}</div>
            </div>
            <div className="pl-2 w-20">
                {!following &&
                    <ButtonZ label="Seguir" onClick={handleFollow} size={3}/>
                }
            </div>
        </div>
    );
;}

export const RecommendationItemSkeleton = () => {
    return (
        <div className="flex flex-col gap-1 animate-pulse">
            <div className="bg-gray-600 h-4 w-3/4" ></div>
            <div className="bg-gray-600 h-4 w-1/4"></div>
        </div>
    );
}