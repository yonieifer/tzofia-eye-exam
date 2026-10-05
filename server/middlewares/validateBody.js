export default (bodyField, schema) => (req, res, next) => {
    schema.parse(req.body[bodyField])
    next()
}
