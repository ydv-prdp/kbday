import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
  
  interface CardComponentProps{
    description:string,
    img:string
  }

  const CardComponent = ({description, img}:CardComponentProps) => {
    return (
        <Card className="relative group mb-4 break-inside-avoid">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Image 
            alt="image"
            src={img}
            width={400}
            height={400}
          />
        </CardContent>
        <CardFooter>
           <p className="font-bold">{description}</p> 
        </CardFooter>
      </Card>
    )
  }
  
  export default CardComponent