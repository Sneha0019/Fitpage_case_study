const express = require("express");
const router = express.Router();
const StockScan = require("../models/Stockscan");

let currentId = 1;

//---ROUTE 1: Add Data and make an api
router.post("/addData", async(req, res)=>{
   try{
  const {criteria} = req.body;

   const criteriaData = await criteria.map(criteriaItem =>({
    type: criteriaItem.type,
    text: criteriaItem.text,
    ...(criteriaItem.variable && {variable: criteriaItem.variable})
   }));


    const newStockScanData = await StockScan.create({
        id: currentId++,
        name: req.body.name,
        tag: req.body.tag,
        color: req.body.color,
        criteria: criteriaData
        });

        const StockScanData  = await newStockScanData.save();
        res.status(200).json({success:"true", StockScanData});

   }catch(error){
       res.status(500).json({error: "Internal Server Error"});
   }
});

//---ROUTE 2: Fetch Data 
router.get("/fetchdata", async(req, res)=>{
    try{

    const stockScanData = await StockScan.find({});
    if(!stockScanData){
        return res.status(400).json({error: "No data found"});
    }


    const formattedData = stockScanData.map(item=>{
        const formattedItem = {
            id : item.id,
            name: item.name,
            tag: item.tag,
            color: item.color,
            criteria : item.criteria.map(criterias =>{
                const formattedCriterias = {
                    type: criterias.type,
                    text: criterias.text
                }
                
                if(criterias.variable){
                    formattedCriterias.variable = criterias.variable
                }

                return formattedCriterias;
            })
        };
        return formattedItem;
 
    })

    res.json(formattedData);
 
    }catch(error){
        res.status(500).json({error: "Internal Server Error"});
    }
 });
 
module.exports = router