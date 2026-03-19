let pr = [250, 645, 300, 900, 50];
let i = 0;
for (let n of pr) {
    let offer = n/10;
    pr[i] = pr[i] - offer;
    console.log(`value after off = ${pr[i]}`);
    i++;
}
let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++){
    let off = items[i] / 10;
    items[i] -=off;
}
console.log(items)