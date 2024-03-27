const express = require("express");
const router = express.Router();
const passport = require("passport");

let arrayOfRings = [
    {
        sku: 'asdaasd',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 123123,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 91212325,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 921235,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 923325,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 925,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 925,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    },
    {
        sku: 'ER16526R8Y4JJJ',
        desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
        price: 925,
        imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
    }
]

router.get("/rings", passport.authenticate("jwt", {session:false}), (req, res)=>{
    res.status(200).send(arrayOfRings);
})

module.exports = router

