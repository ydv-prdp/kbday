import CardComponent from "@/components/card-comp"
import IntroCard from "@/components/intro-card"
import VideoComp from "@/components/video-comp"
import {data} from '@/utils/data'
const Gallery = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columms-3 lg:columns-5  gap-4">
          <VideoComp source={"/v1.mp4"}/>
          <IntroCard/>
        {data.map((item,index)=>(
            <CardComponent key={index} description={item.description} img={item.img} />
        ))}
         <VideoComp source={"/v2.mp4"}/>
    </div>
  )
}

export default Gallery