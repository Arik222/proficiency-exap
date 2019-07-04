// function buttonfn(){  
//     $("#container").empty()  
//     let ingredient =  $("#food-input").val()  
//     $.get(`http://localhost:8080/recipes/${ingredient}` , function(result){
//     const source = $("#recipes-template").html() 
//     const template = Handlebars.compile(source)  
//     const newHTML = template({therecipe: result}) 
//     $("#container").append(newHTML) 
// })
// }

function buttonfn(){ 
 let ingredient =  $("#food-input").val() 
$.get(`http://localhost:8080/recipes/${ingredient}` , function(result){   
console.log(result)
})
}