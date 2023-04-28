const verifyToken = require('../middlewares/verifyToken')
const Property = require('../models/Property')
const User = require('../models/User')
const propertyController = require('express').Router()

// get all
propertyController.get('/getAll', async (req, res) => {
    try {
        const properties = await Property.find({}).populate("currentOwner", '-password')

        console.log(properties)

        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// get featured
propertyController.get('/find/featured', async (req, res) => {
    try {
        const featuredProperties = await Property.find({ featured: true }).populate("currentOwner", '-password')
        return res.status(200).json(featuredProperties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get all from type
propertyController.get('/find', async (req, res) => {
    const type = req.query
    let properties = []
    try {
        if (type) {
            properties = await Property.find(type).populate("owner", '-password')
        } else {
            properties = await Property.find({})
        }

        return res.status(200).json(properties)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// TODO FETCH TYPE OF PROPERTIES. EX: {BEACH: 34, MOUNTAIN: 23}
propertyController.get('/find/types', async(req, res) => {
    try {
        const gulshanType = await Property.countDocuments({ type: 'gulshan' });
        const bananiType = await Property.countDocuments({ type: 'banani' });
        const dhanmondiType = await Property.countDocuments({ type: 'dhanmondi' });
        // const baridharaType = await Property.countDocuments({ type: 'baridhara' });
        // const mohakhaliType = await Property.countDocuments({ type: 'mohakhali' });
        // const mirpurType = await Property.countDocuments({ type: 'Mirpur' });
        // const mohakhaliType = await Property.countDocuments({ type: 'Mohakhali' });
        // const mohammadpurType = await Property.countDocuments({ type: 'Mohammadpur' });
        // const kakrailType = await Property.countDocuments({ type: 'Kakrail' });
        // const nayaPaltanType = await Property.countDocuments({ type: 'Naya_Paltan' });
        // const elephantRoadType = await Property.countDocuments({ type: 'Elephant_Road' });
        // const farmgateType = await Property.countDocuments({ type: 'Farmgate' });
        // const newMarketType = await Property.countDocuments({ type: 'New_Market' });
        // const shahbagType = await Property.countDocuments({ type: 'Shahbag' });
        // const motijheelType = await Property.countDocuments({ type: 'Motijheel' });
        // const bananiDOHSType = await Property.countDocuments({ type: 'Banani_DOHS' });
        // const bashundharaRAType = await Property.countDocuments({ type: 'Bashundhara_RA' });
        // const khilgaonType = await Property.countDocuments({ type: 'Khilgaon' });
        // const malibaghType = await Property.countDocuments({ type: 'Malibagh' });
         return res.status(200).json({
            Gulshan: gulshanType,
            Banani: bananiType,
            Dhanmondi: dhanmondiType,
            // Baridhara: baridharaType,
            // mohakhali: mohakhaliType
            // Mirpur: mirpurType,
            // Mohakhali: mohakhaliType,
            // Mohammadpur: mohammadpurType,
            // Kakrail: kakrailType,
            // Naya_Paltan: nayaPaltanType,
            // Elephant_Road: elephantRoadType,
            // Farmgate: farmgateType,
            // New_Market: newMarketType,
            // Shahbag: shahbagType,
            // Motijheel: motijheelType,
            // Banani_DOHS: bananiDOHSType,
            // Bashundhara_RA: bashundharaRAType,
            // Khilgaon: khilgaonType,
            // Malibagh: malibaghType
        })
    } catch (error) {
        return res.status(500).json(error) 
    }
})
// fetch my properties
propertyController.get('/find/my-properties', verifyToken, async (req, res) => {
    try {
        const properties = await Property.find({ currentOwner: req.user.id })

        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// fetch bookmarked yachts
propertyController.get('/find/bookmarked-properties', verifyToken, async (req, res) => {
    try {
        const properties = await Property.find({ bookmarkedUsers: { $in: [req.user.id] } })

        return res.status(200).json(properties)
    } catch (error) {
        console.error(error)
    }
})

// TODO FETCH INDIVIDUAL PROPERTY
propertyController.get('/find/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password')

        if (!property) {
            throw new Error('No such property with that id')
        } else {
            return res.status(200).json(property)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
})


// create estate
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// update estate
propertyController.put('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error("You are not allowed to update other people's properties")
        }

        const updatedProperty = await Property.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )


        return res.status(200).json(updatedProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// bookmark/unbookmark estate
propertyController.put('/bookmark/:id', verifyToken, async (req, res) => {
    try {
        let property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() === req.user.id) {
            throw new Error("You are not allowed to bookmark your project")
        }


        if (property.bookmarkedUsers.includes(req.user.id)) {
            property.bookmarkedUsers = property.bookmarkedUsers.filter(id => id !== req.user.id)
            await property.save()
        } else {
            property.bookmarkedUsers.push(req.user.id)

            await property.save()
        }

        return res.status(200).json(property)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// delete estate
propertyController.delete('/:id', verifyToken, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)
        if (property.currentOwner.toString() !== req.user.id) {
            throw new Error("You are not allowed to delete other people properties")
        }

        await property.delete()

        return res.status(200).json({ msg: "Successfully deleted property" })
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = propertyController