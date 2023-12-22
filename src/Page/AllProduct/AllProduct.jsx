import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";

const AllProduct = () => {
    const alldata = useLoaderData()
    console.log(alldata)

    // const [product, setProduct] = useState(null);



    return (
        <div className=" max-w-screen-2xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                alldata.map(product => <SingleData 
                key={product.id}
                    product={product}
                />)
            }           
        </div>
    );
};

export default AllProduct;