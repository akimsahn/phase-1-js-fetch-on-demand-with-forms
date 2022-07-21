const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.searchByID.value
    console.log(input)

    fetch(`http://localhost:3000/movies/${input}`)
    .then(resp => resp.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        console.log(data)
        title.textContent = data.title;
        summary.textContent = data.summary;
    })
  })
}

document.addEventListener('DOMContentLoaded', init);