let blogPosts = [
    {title : 'post 1', author: 'Dan'},
    {title: 'post 2', author: 'Dan'},
    {title: 'post 3', author: 'Sarah'},
    {title: 'post 4', author: 'Doris'}
];

let dansPost = blogPosts.filter(p => p.author === 'Dan');
let dorisPost = blogPosts.filter(p => p.author === 'Doris');
let sarahPost = blogPosts.filter(p => p.author === 'Sarah');

console.log(dansPost);
console.log(dorisPost);
console.log(sarahPost);


function dinnerToday(food){
    switch(food.toLowerCase()){
        case 'rice':
            return 'Lets have it';
        case 'beans':
            return 'we can have that on sunday';
        case 'moi moi':
            return 'Great! choice for friday';
        default:
            return 'not a valid option';
    }
    
}
console.log(dinnerToday('BEANS'))


