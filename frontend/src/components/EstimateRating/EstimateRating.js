import * as tf from '@tensorflow/tfjs';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Rating } from '@material-ui/lab';
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import './EstimateRating.css'
import { useSelector } from 'react-redux'

const EstimateRating = () => {
    const history = useHistory();
    const [rating, setRating] = useState(0);

    const { form : {   
        AgesAllowed,
        Alcohol,
        BusinessAcceptsBitcoin,
        BusinessAcceptsCreditCards,
        DogsAllowed,
        DriveThru,
        HasTV,
        Open24Hours,
        OutdoorSeating,
        Smoking,
        Ambience,
        CoatCheck,
        BYOBCorkage,
        GoodForKids,
        RestaurantsTableService,
        RestaurantsReservations,
        BikeParking,
        Caters,
        GoodForDancing,
        HappyHour,
        RestaurantsCounterService,
        RestaurantsGoodForGroups,
        RestaurantsTakeOut,
        WheelchairAccessible,
        BestNights,
        BusinessParking,
        DietaryRestrictions,
        WiFi,
        Music,
        NoiseLevel,
        RestaurantsAttire,
        GoodForMeal
     } } = useSelector(state => state.form);

    const loadModel = async() => {
        try {
            const new_model = await tf.loadLayersModel('https://hackai-backend.herokuapp.com/model');
            setRating(getRating(new_model)[0][0] * 4 + 1);
        } 
        catch (err) {
            console.log(err);
        }
    }


    const estimateRating = (model, minAge, alcohol, byob, bitcoin, music, card, dogs, driveThru, tv, noise, allDay, outdoor, smoking, ambience, coatCheck, kids, tableService, mealChoice, reservations, bikeParking, attire, diets, cater, dancing, happyHour, parking, counterService, groups, wifi, takeout, wheelchair, bestNights) => {
        let bools = [].concat(minAge, alcohol, byob, bitcoin, music, card, dogs, driveThru, tv, noise, allDay, outdoor, smoking, ambience, coatCheck, kids, tableService, mealChoice, reservations, bikeParking, attire, diets, cater, dancing, happyHour, parking, counterService, groups, wifi, takeout, wheelchair, bestNights);
        let floats = bools.map(bool => bool === true ? 1.0 : 0.0);
        let arr = model.predict(tf.tensor2d(floats, [1, 79], 'float32')).arraySync();
        return arr;
    }

    const getRating = (new_model) => {
        return estimateRating(
            new_model,
            AgesAllowed, 
            Alcohol,
            BYOBCorkage,
            BusinessAcceptsBitcoin,
            Music,
            BusinessAcceptsCreditCards,
            DogsAllowed,
            DriveThru,
            HasTV,
            NoiseLevel,
            Open24Hours,
            OutdoorSeating,
            Smoking,
            Ambience,
            CoatCheck,
            GoodForKids,
            RestaurantsTableService,
            GoodForMeal,
            RestaurantsReservations,
            BikeParking,
            RestaurantsAttire,
            DietaryRestrictions,
            Caters,
            GoodForDancing,
            HappyHour,
            BusinessParking,
            RestaurantsCounterService,
            RestaurantsGoodForGroups,
            WiFi,
            RestaurantsTakeOut,
            WheelchairAccessible,
            BestNights
        );
    }
    
    const setup = async() => {
        await tf.ready();
        await loadModel();
    }

    useEffect(()=>{
        setup();
    }, []);

    return (
        <div className="show-rating">
            <Button onClick={() => history.push('/')} variant="outlined">Go back to Form</Button>
            <Card variant="outlined" className="rating-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom> Your rating is:  </Typography>
                    <Rating readOnly value={rating} onChange={(e, new_val) => setRating(new_val)} size="large" precision={0.1}/>
                    <Typography variant="h4" gutterBottom> {Math.round(rating * 10) / 10} / 5 </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default EstimateRating
