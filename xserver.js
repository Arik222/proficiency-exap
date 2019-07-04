const express = require("express")       
const app = express()                      
const request = require("request")       
const path = require("path")

app.use( express.static( path.join( __dirname,'dist' ) ) )
app.use( express.static( path.join( __dirname, 'node_modules' ) ) )

app.get("/sanity" , function(req,res){                //app.get  when you do a route (about me..). but when you do a api requset you do request get.   
    res.send("ok" )
})

app.get("/recipes/:ingredient" , function(req2,res2){                //app.get  when you do a route (about me..). but when you do a api requset you do request get.   
    let ingredient = req2.params.ingredient
     recipeArr = []
    request.get(` https://recipes-goodness.herokuapp.com/recipes/${ingredient}`) , function(err,res3){
        let recipes = JSON.parse(res3.results)
        // for (let rec of recipes){
        //     recipArr.push({recipe: rec.ingredients})
        // }
        res2.send(recipes)
}
})








const port = 8080
app.listen(port,function(){
    console.log("im awesome in my port " + port ) //dont forget thisssssssssssssss
})