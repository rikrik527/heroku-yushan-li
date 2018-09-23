// array prototype.[method name] allows you to define/overwrite an object's method,needle is the item you are searching for , this is a special variable that refers to 'this' instance of an Array,returns true if needle is in the array, and false otherwise

Array.prototype.contains = function(needle){
for(i in this){
    if(this[i] == needle){
    console.log(this,needle);
        return true
    }
    console.log('i in this',this,needle);
    return false;
}
}