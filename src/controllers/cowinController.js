let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let findBydistrict = async function (req, res) {
    try {
        let id  = req.query.district_id
        let date = req.query.date
       
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeather= async function (req, res) {
    try {
        let city = req.query.city
        
        
        console.log(`query params are: ${city} `)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e32453fe69a8eea77ea196d661de191 `
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let gettemp= async function (req, res) {
    try {
        let cities=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai,","London","Moscow"]
        let cityArr=[]
        for(let i=0;i<cities.length;i++){
            let Obj={city:cities[i]}
            let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=9e32453fe69a8eea77ea196d661de191`)
        console.log(resp.data.main.temp)
        Obj.temp=resp.data.main.temp
        cityArr.push[Obj]
        }
        let sorted=cityArr.sort(function(a,b)   {return a.temp-b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    }

        /*var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e32453fe69a8eea77ea196d661de191 `
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })*/
    
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    
}
       
}  
        

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getImg= async function (req, res) {
    try {
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=61520&text0=Cool&username=chewie12345&password=meme@123`,
            
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.findBydistrict = findBydistrict
module.exports.getByPin = getByPin
module.exports.getWeather = getWeather
module.exports.gettemp = gettemp
module.exports.getOtp = getOtp
module.exports.getImg = getImg