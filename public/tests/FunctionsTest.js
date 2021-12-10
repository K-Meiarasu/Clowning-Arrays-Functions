describe('Greatest among two numbers',function()
{
    it('should return the big number',function()
    {
        expect(greatestOfTwoNumbers(2,3)).toBe(3);
        expect(greatestOfTwoNumbers(2,4)).toBe(4);
        expect(greatestOfTwoNumbers(6,1)).toBe(6);
        expect(greatestOfTwoNumbers(0,-1)).toBe(0);
    });
    it('should return the positive number',function()
    {
        expect(greatestOfTwoNumbers(-2,3)).toBe(3);
        expect(greatestOfTwoNumbers(-2,4)).toBe(4);
        expect(greatestOfTwoNumbers(6,-1)).toBe(6);
        expect(greatestOfTwoNumbers(0,-1)).toBe(0);
    });
    it('should return the negative minimum number',function()
    {
        expect(greatestOfTwoNumbers(-2,-8)).toBe(-2);
        expect(greatestOfTwoNumbers(-3,-1)).toBe(-1);
    });
})

describe('Word with maximum character length',function()
{
    it('should return word with max length',function()
    {
        const words=['George', 'Alice', 'Alex'];
        expect(findScaryWord(words)).toBe('George');
        const word=['George', 'Alice', 'Alexander'];
        expect(findScaryWord(word)).toBe('Alexander');
    });
    it('should return word with one character',function(){
        const words=['', '', 'A'];
        expect(findScaryWord(words)).toBe('A');
    });
})

describe('Calculaing net price',function()
{
    it('should return the sum value',function()
    {
        const arr=[1,3,5,8,9]
        expect(netPrice(arr)).toBe(26);
        const num=[88,23,45,11,298]
        expect(netPrice(num)).toBe(465);
    });
    it('should return sum for negative numbers',function(){
        const arr=[-2,-5,-7,5]
        expect(netPrice(arr)).toBe(-9);
    });
    it('should return 0',function()
    {
        const arr=[0,-1,1,4,-4]
        expect(netPrice(arr)).toBe(0);
    });
})

describe('Calculaing sum for mixeArray',function()
{
    it('should return the sum and length sum',function()
    {
        const arr=[1,4,true]
        expect(netPrice(arr)).toBe(6);
        const num=[88,2,6,8]
        expect(netPrice(num)).toBe(104);
    });
})

describe('Calculaing midpoint value',function()
{
    it('should return the midpoint',function()
    {
        const arr=[2,14,5]
        expect(add(arr)).toBe(7);
        const num=[8,16,4,4]
        expect(add(num)).toBe(8);
    });
})

describe('Calculaing average value',function()
{
    it('should return the average value of the array',function()
    {
        const arr=[10,20,0,2,3]
        expect(avg(arr)).toBe(7);
        const num=[6,36,0,2]
        expect(avg(num)).toBe(11);
    });
})

describe('Calculaing average word length',function()
{
    it('should return the average length of the array',function()
    {
        const arr=['car','bike','motor']
        expect(avg_length(arr)).toBe(4);
        const num=['matter','songs','generic']
        expect(avg_length(num)).toBe(6);
    });
    it('should return 0',function()
    {
        const arr=[];
        expect(avg_length(arr)).toBe(0);
    });
})

describe('Identifying unique array',function(){
    it('should return array without duplicates',function()
    {
        const arr=['car','bike','car']
        expect(uniqueArray(arr)).toBe(['car', 'bike'])
    });
    it('should return the same array',function()
    {
        const arr=['bread', 'egg']
        expect(uniqueArray(arr)).toBe(['bread', 'egg'])
    });
})

describe('Searching for an element ',function(){
    it('should return true',function()
    {
        const arr=['car','bike','ship']
        var ele='ship'
        expect(searchElement(arr,ele)).toBe(true)
    });
    it('should return false',function()
    {
        const arr=['bread', 'egg', 'nuggets']
        var ele='nachos'
        expect(searchElement(arr,ele)).toBe(false)
    });
})

describe('Counting occurence of the element ',function(){
    it('should return count',function()
    {
        const arr=['car','bike','ship', 'bike']
        var ele='bike'
        expect(howManyTimesElementRepeated(arr,ele)).toBe(2)
        const arr2=['car','bike','ship', 'bike']
        var ele1='ship'
        expect(howManyTimesElementRepeated(arr2,ele1)).toBe(1)
    });
    it('should return 0',function()
    {
        const arr=['bread', 'egg', 'nuggets']
        var ele='nachos'
        expect(howManyTimesElementRepeated(arr,ele)).toBe(0)
    });
})