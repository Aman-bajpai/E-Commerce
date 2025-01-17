const express = require("express")
const router = express.Router()

router.post("/product/cart/:productId", async (req, res) => {
    let { productId } = req.params
    let user = req.user

    const foundProduct = user.cart.find((item) => item.product == productId)
    if (foundProduct) {
        foundProduct.count++;
    }
    else {
        user.cart.push({ product: productId })
    }
    await user.save()
    res.send("OK product added successfully")
})

module.exports = router