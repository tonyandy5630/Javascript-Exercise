const highlight = ([first, ...rest], ...literal) =>
    literal.reduce(
        (prev, cur) => {
            return [...prev, `<span>${cur}</span>`, rest.shift()];
        }, [first]
    ).join('');

let dish = "Ga ran";
let restaurant = "Popeyes";
let html = highlight `Tui dang an ${dish} tai quan ${restaurant}`;

console.log(html);