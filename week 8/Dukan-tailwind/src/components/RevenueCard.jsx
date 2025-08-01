
export const RevenueCard = ({
    title,
    amount,
    orderCount
}) => {
    return <div className="bg-white rounded shadow-sm p-4">
        <div className="text-gray-700 flex justify-center flex-col ">
            <div className="flex">
                <div>
                    {title} 
                </div>
                <div className="ml-1 flex justify-center flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="font-semibold text-2xl">
                $ {amount}
            </div>
            {orderCount ? <div className="flex">
                <div className="text-blue-700 cursor-pointer font-medium underline ">
                    {orderCount} order(s) 
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </div> : null }
        </div>
    </div>
}