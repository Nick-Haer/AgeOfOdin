

const meadify = async (req, res, next) => {
    req.meadIsGood = true;
    next();
}

export default  meadify;