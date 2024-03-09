# Boilerplate for creating React SPAs on Vercel's serverless platform without dependency on any frameworks

https://boilerplate-react-serverless.vercel.app/

## Run on http://localhost:3000 (requires Vercel CLI)
````
git clone https://github.com/smohadjer/boilerplate-react-serverless.git
npm install
vercel dev
````

## Deploy to live
````
vercel --prod
````

## Notes
Since we are using vercel dev, there's no need to create a .env file as vercel dev automatically downloads the Development Environment Variables into memory. See here for more info: https://vercel.com/docs/projects/environment-variables
