import { gql,GraphQLClient } from "graphql-request"


const client = new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/cl84bfg4l1ux501t3d2flbf6v/master");

export const getPosts = async () => {
    const query = gql`
     query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          id
          name
          bio
          photo {
            url
          }
        }
        createdAt
         slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        
      }
    }
  }
}
    `

    const result = await client.request(query)
    return result.postsConnection.edges;
}


export const getRecentPosts=async()=>{
    const query=gql`
    query getPostDetails() {
        posts(orderBy:createdAt_ASC,last:3) {
            title
            createdAt
            slug
            featuredImage {
                url
            }
        }
    }
    `

    const result=await client.request(query);
    return result.posts;
}


export const getRelatedPosts=async(slug,categories)=>{
    const query=gql`
      query getPostDetails($slug:String!,$categories:[String!]) {
        posts(where:{slug_not:$slug,AND:{categories_some:{slug_in:$categories}}},last:3) {
            title
            slug
            createdAt
            featuredImage {
              url
            }
        }
      }
    `

    const result=await client.request(query,{slug,categories});
    return result.posts;

}


export const getCategories=async()=>{
  const query=gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `

  const result=await client.request(query);
  return result.categories;
}


export const getPost=async(slug)=>{
  const query=gql`
    query getPostDetails($slug:String!) {
      post(where:{slug:$slug}) {
        title
        id
        slug
        excerpt
        content {
          raw
        }
        featuredImage {
          url
        }
        author {
          id
          bio
          name
          photo {
            url
          }

        }
        categories {
          name
          slug

        }

      }
    }
  `
   const result=await client.request(query,{slug});
   return result.post;

} 


export const submitComment=async(obj)=>{
    const result=await fetch("/api/comments",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    return result.json();
}


export const getComments=async(slug)=>{
    const query=gql`
     query getComments($slug:String!) {
      comments(where:{post:{slug:$slug}}) {
        name
        comment
        createdAt
      }
     }
    `

    const result=await client.request(query,{slug});
    return result.comments;
}

export const getFeaturedPosts=async()=>{
    const query=gql`
      query getFeaturedPost() {
        posts(where:{featuredPost:true}) {
          createdAt
          title
          slug
          featuredImage {
            url
          }
          author {
            photo {
              url
            }
            name
          }
        }
      }
    `

    const result=await client.request(query);
    return result.posts;
}