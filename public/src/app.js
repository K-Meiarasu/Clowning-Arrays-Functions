function greatestOfTwoNumbers(n1,n2){
    if(n1>n2){
        return n1
    }
    else if(n2>n1){
        return n2
    }
}

/* */

function findScaryWord(words){ 
    var len=0,l=0;
    l=words.length;
    var i,ind;
    for(i=0;i<l;i++)
    {
        if(words[i].length>len)
        {
            len=words[i].length;
            ind=i;
        }
    }
    return words[ind]
}

/* */

function netPrice(prices){
    var sum=0;
    var len=prices.length;
    for(let i=0;i<len;i++){
        sum=sum+prices[i];
    }
    return sum;
}

/* */

function add(mixedArr){
    var sum=0;
    var len=mixedArr.length
    for(let i=0;i<len;i++)
    {
        if(typeof mixedArr[i] === 'number')
        {
            sum+=mixedArr[i]
        }
        else if(typeof mixedArr[i] === 'boolean')
        {
            if(mixedArr[i])
            {
                sum+=1
            }
        }
        else if(typeof mixedArr[i] === 'string')
        {
            sum+=mixedArr[i].length
        }
    }
    return sum
}

/* */

function add(prices){
    var sum=0,mid=0;
    var len=prices.length
    for(let i=0;i<len;i++){
        sum=sum+prices[i]
    }
    mid=sum/len
    return mid
}

/* */

function avg(levels){
    var sum=0,avg=0;
    var len=levels.length
    for(let i=0;i<len;i++){
        sum=sum+levels[i]
    }
    avg=sum/len
    return avg
}

/* */

function avg_length(items){
    var sum=0,avg=0;
    var len=items.length
    for(let i=0;i<len;i++){
        sum=sum+items[i].length
    }
    avg=sum/len
    return avg
}

/* */

function uniqueArray(items){
    let uniqueChars = [...new Set(items)];
    return uniqueChars
}

/* */

function searchElement(words,ele){
    for(let i=0;i<words.length;i++)
    {
        if(ele==words[i]){
            return true
        }
    }
    return false
}

/* */

function howManyTimesElementRepeated(words,ele){
    var len=words.length
    var count=0
    for(let i=0;i<len;i++){
        if(ele==words[i]){
            count=count+1
        }
    }
    return count
}