const productRankings = [
    {"name":"AMD_Product-A","rank":1}, 
    {"name":"AMD_Product-B","rank":10}, 
    {"name":"AMD_Product-C","rank":2}, 
    {"name":"AMD_Product-X","rank":4}
]

const top2ranks = rankings => {
    return { top2: rankings
                        .sort(function(prod1, prod2){return prod1.rank > prod2.rank})
                        .slice(0, 2)
                        .map(prod => prod.name)};
}

console.log(top2ranks(productRankings));