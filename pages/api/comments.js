// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const {GraphQLClient,gql}=require("graphql-request");



const client=new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/cl84bfg4l1ux501t3d2flbf6v/master",{
    headers:{
        Authorization:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjM1NzEzMTgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w4NGJmZzRsMXV4NTAxdDNkMmZsYmY2di9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjc4OThhNTEtMjQ4Ni00YTMyLWI4N2EtMmQ1N2ZkYTI1MDFmIiwianRpIjoiY2w4OGZlc3QyMTV1bjAxdWo0ZXZ6OGJ2cCJ9.BXWF3tLdbK4l0quO2SLpQgGX0Wi48NbxKA7ql5GvnUT2mdXyttTUu-LhtiC8yN6GbvvKrty1fdIBvsPtklfFsDiWOd4Dc0rMrIveAh2k2XsKDWYmLn-XxYc5EE8NORcnWgLKab2Fr5-TFu-F0lfoho9bjBNZkKUr_AdsmSks-sJEN7dwWZ9tfMq90vV9w8qZ_n1K2W2-zV-083uED0rECnpP_AiU9bx-QAPiDjFzARbxHPg_ZspcGJmRJWpUVJC4mXBJM1wOPoYVPewSa924nbgnZH-hC1ypSHuHEffGa4BJW5hOENDoTrhstk8Xmqw9FKeuHormqPHxsLhkUC1DGlZT2K6vGW0o2hOImI_xSmV6PWRh46Ti-qJO4zTD_Z8z_Ur5NaeGhSJ5XwUS6Bd31JHePjp4iZYkffuhMxmnDNuzSSc_eRCtAw6rtMw8tPZ8JHWYuRJ1cu9E9zwo7Ygmutu3qcb5GhjY21EOT3yAgm8H3WYYkVTQLvZ8RfXzw_yVbwv3uVzEMyvpkJq8ECt_8bCASVc30IxH-VGPrmGwKhP9gBM-qD6R-RaXSl7bt__iWCWbZLYhy2HuBjgVw4nRd_xmngeFhAbJP6ExoC9OwpCGmUlwVe98uErHgvbJiYDeM92_ruA8PTK9dfjuANT-CwQCtXN_fGzsEDfebinluLc"
    }
})

export default async function createComment(req,res) {
    const query=gql`
    mutation CreateComment($name:String!,$email:String!,$comment:String!,$slug:String!) {
            createComment(data:{name:$name,email:$email,comment:$comment,post:{connect:{slug:$slug}}}) {id}
    }
    `

    try {
        const result=await client.request(query,req.body);
        console.log(result);

    return res.status(200).json(result);
    }catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }

    
}
