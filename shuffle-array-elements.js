let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(my_list.sort(function () {
    return Math.random() - 0.5;
}));