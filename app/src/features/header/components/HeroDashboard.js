export const HeroDashboard = () => {
    return (
        <div className="
            border border-white/30 rounded-xl bg-gray-400/20 backdrop-blur-md shadow-lg
            p-6"
        >

            {/* PAGE 1 --- Card 1 & 2 */}
            <div className="grid grid-rows-2 gap-4 h-[calc(70vh-2rem)] my-2">
                {/* box --- 1 */}
                <div className="flex justify-center items-center p-4"></div>
                {/* box --- 2 */}
                <div className="flex justify-center items-center border border-white/30 rounded-lg p-4">2</div>
            </div>

            {/* PAGE 2 --- Card 3 & 4 */}
            <div className=" grid-rows-2 gap-4 h-[calc(70vh-2rem)] my-2 hidden">
                {/* box --- 1 */}
                <div className="border border-white/30 rounded-lg p-4">1</div>
                {/* box --- 2 */}
                <div className="border border-white/30 rounded-lg p-4">2</div>
            </div>

            {/* Pagination Dot */}
            <div className="flex justify-center gap-2 absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
        </div>
    )
}