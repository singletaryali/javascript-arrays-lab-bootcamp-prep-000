// Add your functions and code here
function destructivelyAppendKitten(name) {
kittens.push(name)
return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
}