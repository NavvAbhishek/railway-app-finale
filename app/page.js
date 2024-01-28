import { CarouselHeader } from '@/components/Carousel'
import Navbar from '@/components/Navbar'
import DistanceCal from '@/components/DistanceCal'
import Notice from '@/components/Notice'
import InfoSection from '@/components/Info'
import ServicesBar from '@/components/ServicesBar'
import TrainBookSection from '@/components/TrainBookSection'
import TripSection from '@/components/TripSection'
import { Footer } from '@/components/Footer'

const Home = () => {
  return (
    <div className="bg-white opacity-100 pattern-bg">
      {/* <Banner /> */}
      <Navbar />
      {/* <div className="flex sm:flex-row flex-col-reverse sm:gap-3">
        <div className="lg:w-[25%] md:w-[35%] sm:w-[40%] bg-blue-100">
          <DistanceCal />
        </div>
        <div className="lg:w-[75%] md:w-[65%] sm:w-[60%] bg-blue-300">
          <CarouselHeader />
        </div>
      </div> */}
      <CarouselHeader />
      <div className="flex md:flex-row flex-col gap-4">
        <div className="xl:w-[30%] lg:w-[35%] w-[100%]">
          <DistanceCal />
        </div>
        <div className="xl:w-[70%] lg:w-[65%] w-[100%]">
          <Notice />
        </div>
      </div>
      <ServicesBar />
      <TrainBookSection />
      <TripSection />
      <InfoSection/>
      <Footer />
    </div>
  )
}

export default Home