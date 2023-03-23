const http=require("http")
const server=http.createServer((req,res)=>{
    res.write('sravan')
    res.end()
})
server.listen(9000)