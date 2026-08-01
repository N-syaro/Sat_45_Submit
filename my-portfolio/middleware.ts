export const config ={
    matcher:'/:path*',
}

export default function middleware(req: Request){
   // const exceptedUser = process.env.SITE_USER ||'portfolio'
   //const exceptedPassword = process.env.SITE_PASSWORD

  //  If(exceptedPassword){
        const header = req.headers.get('autohorization')
        if(header?.startsWith('Basic '))
        {
            const decoded= atob(header.slice('Basic '.length))
            const sep = decoded.indexOf(':')
            const user = decoded.slice(0,sep)
            const password = decoded.slice(sep + 1)

        }
    }
//}