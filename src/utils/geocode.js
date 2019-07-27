const request=require('request')
const geocode=(address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWF5YW5rMDA3IiwiYSI6ImNqeHdzeGZuczA0NTMzY211ZDE4MGtyZDkifQ.4ce9E9PXJ7Ux4YjSRLhyMQ'
    
    request({url:url,json:true},(error,response)=>
    {
if(error)
{
    callback('unable to connect to internet',undefined)
}
else if(response.body.features.length==0)
{
    callback('No places found',undefined)
}
else{
    callback(undefined,{
        latitude :response.body.features[0].center[1],
        longitude :response.body.features[0].center[0],
        location :response.body.features[0].place_name


    })
}
    })
}
module.exports=geocode

