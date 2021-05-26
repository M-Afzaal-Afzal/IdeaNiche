import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://ideaniche.cdn.prismic.io/api/v2';

export const accessToken = '';
// prismic client object



export const client = (req = null) => {
    const createClientOptions = (req=null,prismicAccessToken=null) => {
        const reqOptions = req ? {req} : {};
        const accessTokenOptions = prismicAccessToken ? {prismicAccessToken} : {};

        return {
            ...reqOptions,
            ...accessTokenOptions
        }
    }

   return Prismic.client(apiEndpoint,createClientOptions(req,accessToken))

}