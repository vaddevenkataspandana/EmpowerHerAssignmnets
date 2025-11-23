function sumAll(...args) {
    return args.reduce((sum,num)=> sum + num,0);
}
console.log("sumAll:",sumAll(1,2,3,4));