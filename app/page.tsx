import FoodCard from "@/components/FoodCard";

export default function HomePage(){
  return(
    <div className="grid grid-cols-4 gap-4 p-4">
      <FoodCard ></FoodCard>
      <FoodCard ></FoodCard>
      <FoodCard ></FoodCard>
      <FoodCard ></FoodCard>
    </div>
  )
}
