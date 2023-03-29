/*
Deliverable One
Make a fetch to http://localhost:3000/current-exhibits 
and get the first exhibit fetched from the array. 
Add that exhibit's details to the areas that make 
sense on the page. For each comment attached to the
exhibit, add it to the comments-section with a p element.
*/
const currentTitle = document.getElementById('exhibit-title')
const ticketsBought = document.getElementById('tickets-bought')
const button = document.getElementById('buy-tickets-button')
const form = document.querySelector('#comment-form')
const exhibitDescription = document.getElementById('exhibit-description')
const commentsSection= document.getElementById('comments-section')
const exhibitImg = document.getElementById('exhibit-image')
const urlLink = 'http://localhost:3000/current-exhibits'

function renderExhibits(){
fetch(urlLink)
.then(res => res.json()) 
.then(function(data) {
    data.forEach(element => {
       const title = data[0].title
       const image = data[0].image
       const description = data[0].description
       let tickets = data[0].tickets_bought
       
    currentTitle.innerText = title
    exhibitDescription.innerText = description
    exhibitImg.src = image


    button.addEventListener('click',(e)=> {
                tickets ++
                ticketsBought.textContent = tickets + ' tickets bought'
         })
      })
  })
}
renderExhibits()

/*Deliverable Two
When someone submits the form for a new 
comment, that comment gets added to the 
comments-section as a p tag.
*/

function renderComments(){
    fetch(urlLink)
    .then(res => res.json()) 
    .then(function(data) {

    const comment = data[0].comments
    comment.forEach(comment => {

    const createComment = document.createElement('p')
    createComment.textContent = comment
    commentsSection.appendChild(createComment)
        })
        
    })
}
renderComments();
// function renderComments(){
//     fetch(urlLink)
//     .then(res => res.json()) 
//     .then(function(data) {

//     const comment = data[0].comments
//     comment.forEach(comment => {
    
//     var index = 0;
//      index = index % comment.length; 
//      index ++

//     const createComment = document.createElement('p')
//     createComment.textContent = comment
//     commentsSection.appendChild(createComment)
//         })
//     })
// }
// renderComments();

/*
Deliverable Three
When someone clicks the buy-tickets-button it updates 
the tickets-bought element so that it increments the 
number of tickets. Make sure to retain the text, it 
shouldn't just say 1 but instead say 1 Tickets Bought.
*/

function renderForm() {
    form.addEventListener('submit',(e)=> {
    e.preventDefault()

    let commentP = document.createElement('p')
    commentP.textContent = e.target["comment-input"].value
    
    commentsSection.append(commentP)
})
}
renderForm()