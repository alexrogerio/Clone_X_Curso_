import { TrendingItem, TrendingItemSkeleton } from "./trenging-item";

export const TrendingArea = () => {
    return (
        <div className="bg-gray-700/50 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TrendingItem label="#teste" count={123} />
                <TrendingItem label="#teste" count={123} />
                <TrendingItemSkeleton />
                <TrendingItemSkeleton />
            </div>
        </div>
    );
}