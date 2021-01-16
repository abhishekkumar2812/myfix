import { Button, Alert } from "reactstrap";
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
// const API_URL = "http://localhost:1337"

const QUERY = gql`
  {
    blogs {
      id
      title
      content
    }
  }
`;

// export async function getServerSideProps(){
//   const response = await axios.get('http://localhost:1337/blogs');
//   console.log(response);

//   return {
//     props: {
//       data: response
//     }
//   }
// }




const Home = ({ restaurants, error }) => {
  console.log(restaurants)
  console.log(API_URL)
  return(
    <div>
      <div>
        <Alert color="primary">
          Hello Project is strapi-next with Bootstrap
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
      <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.title}
          <div>{restaurant.content}</div>
        </li>
      ))}
    </ul>
    </div>
  );
}

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get(`${API_URL}/blogs`);
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;