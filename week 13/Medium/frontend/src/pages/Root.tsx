import { Footer } from '../components/Footer'
import { MainContent } from '../components/MainContent'
import Navbar  from '../components/Navbar'
export const Root = () => {
    return (
        <div className="h-screen w-screen bg-[#f7f4ed] ">
            <Navbar />
            <MainContent />
            <Footer />
        </div>   
    )
}