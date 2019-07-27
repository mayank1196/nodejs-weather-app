const request=require('request')
const forecast=(latitude,longitude,callback)=>
{
const url="https://api.darksky.net/forecast/bdabf94163fc2ecdb34a1a5c5d39302d/"+latitude+','+longitude
request({url:url,json:true},(error,response)=>
{
     if(error)
     {
         callback('unable to connect to net',undefined)
     }
     else if(response.body.error)
     {
        callback('unable to detect the location',undefined)
     }
     else{
         callback(undefined,response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
     }
})

}
module.exports=forecast