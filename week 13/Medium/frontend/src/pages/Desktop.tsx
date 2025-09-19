import { JSX, useEffect, useState } from "react";

export const DesktopOnly = ({ children }: { children: JSX.Element }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 1024); // <1024px = mobile/tablet
        };

        checkScreen(); // run at first load
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    if (isMobile) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-xl font-semibold">
                🚫 This site is only accessible on desktops.
            </div>
        );
    }

    return children;
};
