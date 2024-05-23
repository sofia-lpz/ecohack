import fertexData from './fertex.data.json' assert { type: 'json' };

const getN = async (fertilizerName) => {
    try {
        const fertilizers = fertexData.fertilizers;
        const fertilizer = fertilizers.find(fertilizer => fertilizer.name === fertilizerName);

        return fertilizer ? fertilizer.N : null;
    } catch (err) {
        console.error(err);
    }
}

const getPCG = async (fertilizerName) => {
    try {
        const fertilizers = fertexData.fertilizers;
        const fertilizer = fertilizers.find(fertilizer => fertilizer.name === fertilizerName);

        return fertilizer ? fertilizer.PCG : null;
    } catch (err) {
        console.error(err);
    }
}

const getGases = async (fertilizerName) => {
    try {
        const fertilizers = fertexData.fertilizers;
        const fertilizer = fertilizers.find(fertilizer => fertilizer.name === fertilizerName);

        return fertilizer ? fertilizer.gases : null;
    } catch (err) {
        console.error(err);
    }
}