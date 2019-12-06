const Candle = require('./Candle');

describe('Candle model', () => {
    it('has a required type', () => {
        const candle = new Candle({});

        const { errors } = candle.validateSync();
        expect(errors.type.message).toEqual('Path `type` is required.');
    });

    it('has a required scent', () => {
        const candle = new Candle({});

        const { errors } = candle.validateSync();
        expect(errors.scent.message).toEqual('Path `scent` is required.');
    });

    it('has a number of oz greater than 0.4', () => {
        const candle = new Candle({
            oz: 0.2
        });

        const { errors } = candle.validateSync();
        expect(errors.oz.message).toEqual(`Path \`oz\` (0.2) is less than minimum allowed value (0.5).`);
    });
});