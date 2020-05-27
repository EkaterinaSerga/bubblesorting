
describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with length of 1', function () {
        expect(bubbleSort([1])).toEqual([1]);
    })

    it('sorts the array from least to highest', function () {
        expect(bubbleSort([1,9,5,7,2,8])).toEqual([1,2,5,7,8,9]);
    })

    it('swap runs the appropriate amount of times', function () {
        bubbleSort([1,9,5,7,2,8])
        expect(window.swap.calls.count()).toEqual(6);
    });



});
