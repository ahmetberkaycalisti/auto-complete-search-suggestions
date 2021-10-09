let searchable = [
    'Elastic',
    'PHP',
    'Something about CSS',
    'How to code',
    'JavaScript',
    'Coding',
    'Some other item',
]

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results')

searchInput.addEventListener('keyup', () => {
    // console.log(e.target.value);
    let results = [];
    let input = searchInput.value
    // console.log(input)
    // console.log(input.length);
    if (input.length) {
        results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        })
    }
    renderResults(results);
})


function renderResults(results) { 
    if(!results.length) { 
        return searchWrapper.classList.remove('show');
    }

    let content = results.map((item) => {
        return `<li><a href='#'>${item}</a></li>`
    }).join('');

    // console.log(content)
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`
}