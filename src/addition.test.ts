import addition, {splitTextToNumber} from './addition'

describe('Name of the group', () => {

    describe('Addition', () => {
        it('Input 1plus2plus3plus4 Should be 10', () => {
            const expected = "10"
            const text = "1plus2plus3plus4"

            const actual = addition(text)
            expect(actual).toEqual(expected)
        });

        it('Input 0plus0 Should be 0', () => {
            const expected = "0"
            const text = "0plus0"

            const actual = addition(text)
            expect(actual).toEqual(expected)
        });

        it('Input 1plus2plus3minus4 Should be 2', () => {
            const expected = "2"
            const text = "1plus2plus3minus4"

            const actual = addition(text)
            expect(actual).toEqual(expected)
        });
    })

    describe('Split text to number', () => {
        it('Split string 1plus2plus3plus4 shoud be array number', () => {
            const expected = [1, 2, 3, 4]
            const text = "1plus2plus3plus4"

            const actual = splitTextToNumber(text)

            expect(actual).toEqual(expected)
        });
    })
});