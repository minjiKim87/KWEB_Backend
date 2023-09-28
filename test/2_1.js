function fac(num) {
    if (num === 0 || num === 1) return 1;
    return num * fac(num - 1);
}

function permutation(n, r){
    return fac(n) / fac(n-r);
}

function combination(n, r) {
    return fac(n) / (fac(r) * fac(n - r));
}

function multiPermutation(n, r) {
    return Math.pow(n, r);
}

function multiCombination(n, r) {
    return combination(n + r - 1, r);
}

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};