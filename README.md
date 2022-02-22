This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
### Tech Stack
## On the API:
- Nodejs
- GraphQL(Apollo Server / Express)
- JWT Authentication
- Heroku for deployments

we will be able to run the functionnaliy bellow
- User will be able to Signup/Login.
- User be able to upload/add new Videos.
- User will be able to Delete his Videos.

=> you can click in the link bellow to chek the graphQL demonstration 
[https://video-upload-app-api.herokuapp.com/graphql](https://video-upload-app-api.herokuapp.com/graphql)
- For register functionality we can use template bellow

`mutation{register(registerInput:{name:"user",password:"userpass",confirmPassword:"userpass",email:"user@gmail.com"})
{success,message token}
}`

- For login functionality we can use template bellow

`mutation{login(input:{email:"user@gmail.com",password:"userpass"}) 
  {success,message,token}}`
  
- Add video functionality we can use template bellow

`mutation{  addVideo  (input: {title:"catsvideos",description:"add video description",thumbnail:"add video thumbnail",length:12})
{success,message,}
}`

- delete video functionality we can use template bellow

`mutation{deleteVideo(input:{id:1})}`
## frontend 
- React/Nextjs
- Apollo Client
- Vercel / Netlify for deployments
 
=> you can click in the link bellow to chek the website deployed
[https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/](https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/)

functionalities: 
- register: [https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/register](https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/register)

- login: [https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/login](https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/login)

- home page to add videos (first you have to be authentified = after login) [https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/home](https://video-upload-app-client-1gayh0zku-amal-makrane.vercel.app/home)


