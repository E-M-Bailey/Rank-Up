import React, { Fragment } from 'react'
import { FormControl, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import './BusinessForm.css'
import { FormRadio, FormCheckbox, FormRadioMultiple } from '../FormItem/FormItem'
import { useDispatch, useSelector } from 'react-redux'
import { updateField } from '../../features/form'
import {initialState} from '../../utilities/FormData'

const BusinessForm = () => {
    let history = useHistory();

    const dispatch = useDispatch();
    const { form } = useSelector(state => state.form);

    const handleRadio = (e, status) => {
        let currData = [...form[e.target.name]];
        if (status === "No") {
            if (currData[0] !== false) currData[0] = false;
            else currData = initialState[e.target.name];
        }
        else {
            if (currData[0] !== true) currData[0] = true;
            else currData = initialState[e.target.name];
        }
        dispatch(updateField({
            name: e.target.name,
            data: currData
        }));
    }

    const handleRadioMultiple = (e, idx) => {
        let currData = [...form[e.target.name]];

        if (currData[idx] !== e.target.checked) {
            for (var i = 0; i < currData.length; i++) {
                if (currData[i] === true) currData[i] = false;
            }
            currData[idx] = e.target.checked;
        }
        else currData = initialState[e.target.name];
        dispatch(updateField({
            name: e.target.name,
            data: currData
        }));
    }

    const handleCheckBox = (e, idx) => {
        let currData = [...form[e.target.name]];

        currData[idx] = !currData[idx];
        
        dispatch(updateField({
            name: e.target.name,
            data: currData
        }));
    }

    const submit = (e) => {
        e.preventDefault();
        history.push('/rating');
    }
    
    return (
        <Fragment>

            <form className="business-form">
                <FormRadioMultiple 
                    name="AgesAllowed"
                    fieldName="What is the minimum age required to use your business?"
                    onClick={handleRadioMultiple}
                    value={form.AgesAllowed}
                    labels={[
                        '18+',
                        '19+',
                        '21+',
                        'All ages'
                    ]}
                />
                
                <FormRadioMultiple 
                    name="Alcohol"
                    fieldName="What kind of alcohol service does your business offer?"
                    onClick={handleRadioMultiple}
                    value={form.Alcohol}
                    labels={[
                        'Full Bar',
                        'Beer and Wine'
                    ]}
                />

                <FormRadioMultiple 
                    name="BYOBCorkage"
                    fieldName="Choose what best describe your business' BYOB policy"
                    onClick={handleRadioMultiple}
                    value={form.BYOBCorkage}
                    labels={[
                        'We do not allow BYOB',
                        'Corkage fee is charged',
                        'No corkage fee is charged'
                    ]}
                />

                <FormRadio 
                    name="BusinessAcceptsBitcoin"
                    fieldName="Does your business accept bitcoin?"
                    onClick={handleRadio}
                    value={form.BusinessAcceptsBitcoin}
                />

                <FormCheckbox 
                    name="Music"
                    fieldName="Choose all music services that your business offer"
                    labels={[
                        'DJ',
                        'Background',
                        'Jukebox',
                        'Live',
                        'Video',
                        'Karaoke'
                    ]}
                    onClick={handleCheckBox}
                    value={form.Music}
                />

                <FormRadio 
                    name="BusinessAcceptsCreditCards"
                    fieldName="Does your business accept credit card?"
                    onClick={handleRadio}
                    value={form.BusinessAcceptsCreditCards}
                />

                <FormRadio 
                    name="DogsAllowed"
                    fieldName="Does your business allow dogs inside?"
                    onClick={handleRadio}
                    value={form.DogsAllowed}
                />

                <FormRadio 
                    name="DriveThru"
                    fieldName="Does your business provide drive-thru service? "
                    onClick={handleRadio}
                    value={form.DriveThru}
                />

                <FormRadio 
                    name="HasTV"
                    fieldName="Does your business have TV? "
                    onClick={handleRadio}
                    value={form.HasTV}
                />

                <FormRadioMultiple 
                    name="NoiseLevel"
                    fieldName="Choose what best describe your business' noise level"
                    onClick={handleRadioMultiple}
                    value={form.NoiseLevel}
                    labels={[
                        'Quiet',
                        'Average',
                        'Loud',
                        'Very Loud'
                    ]}
                />

                <FormRadio 
                    name="Open24Hours"
                    fieldName="Does your business open for 24 hours? "
                    onClick={handleRadio}
                    value={form.Open24Hours}
                />

                <FormRadio 
                    name="OutdoorSeating"
                    fieldName="Does your business provide outdoor seating? "
                    onClick={handleRadio}
                    value={form.OutdoorSeating}
                />

                <FormRadio 
                    name="Smoking"
                    value={form.Smoking}
                    fieldName="Does your business allow smoking?"
                    onClick={handleRadio} 
                />

                <FormCheckbox 
                    name="Ambience"
                    fieldName="Choose all that best describe your business' ambience"
                    labels={[
                        'Romantic',
                        'Intimate',
                        'Classy',
                        'Hipster',
                        'Divey',
                        'Touristy',
                        'Trendy',
                        'Upscale',
                        'Casual'
                    ]}
                    onClick={handleCheckBox}
                    value={form.Ambience}
                />

                <FormRadio 
                    name="CoatCheck"
                    value={form.CoatCheck}
                    fieldName="Does your business provide coat check?"
                    onClick={handleRadio} 
                />

                <FormRadio 
                    name="GoodForKids" 
                    value={form.GoodForKids} 
                    fieldName="Is your business good for kids? " 
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="RestaurantsTableService" 
                    value={form.RestaurantsTableService} 
                    fieldName="Does your business provide table services? " 
                    onClick={handleRadio}
                />
                
                <FormCheckbox 
                    name="GoodForMeal"
                    fieldName="Good for Meal choice"
                    labels={[
                        'Breakfast',
                        'Brunch',
                        'Lunch',
                        'Dinner',
                        'Dessert',
                        'Late Night'
                    ]}
                    onClick={handleCheckBox}
                    value={form.GoodForMeal}
                />

                <FormRadio 
                    name="RestaurantsReservations" 
                    value={form.RestaurantsReservations} 
                    fieldName="Does your business support reservations? " 
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="BikeParking" 
                    value={form.BikeParking} 
                    fieldName="Does your business support bike parking? " 
                    onClick={handleRadio}
                />

                <FormRadioMultiple 
                    name="RestaurantsAttire" 
                    fieldName="Choose what best describe your business' attire"
                    value={form.RestaurantsAttire}
                    onClick={handleRadioMultiple}
                    labels={[
                        'Casual',
                        'Dressy',
                        'Formal'
                    ]} 
                />

                <FormCheckbox 
                    name="DietaryRestrictions"
                    fieldName="Choose all dietary restrictions that your business offer" 
                    value={form.DietaryRestrictions} 
                    onClick={handleCheckBox} 
                    labels={[
                        'Dairy-Free',
                        'Gluten-Free',
                        'Vegetarian',
                        'Vegan'
                    ]}
                />

                <FormRadio 
                    name="Caters" 
                    value={form.Caters} 
                    fieldName="Does your business provide caters? " 
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="GoodForDancing" 
                    value={form.GoodForDancing} 
                    fieldName="Is your business good for dancing? " 
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="HappyHour" 
                    value={form.HappyHour} 
                    fieldName="Does your business have happy hour? " 
                    onClick={handleRadio}
                />

                <FormCheckbox
                    name="BusinessParking" 
                    fieldName="Provide your business' available options for parking" 
                    value={form.BusinessParking} 
                    onClick={handleCheckBox}
                    labels={[
                        'Garage',
                        'Street',
                        'Validated',
                        'Lot',
                        'Valet'
                    ]} 
                />

                <FormRadio 
                    name="RestaurantsCounterService" 
                    value={form.RestaurantsCounterService} 
                    fieldName="Does your business have counter service? " 
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="RestaurantsGoodForGroups" 
                    value={form.RestaurantsGoodForGroups} 
                    fieldName="Is your business good for groups? " 
                    onClick={handleRadio}
                />

                <FormRadioMultiple 
                    name="WiFi" 
                    fieldName="Choose what best describe how your business provide Wi-Fi to customers"
                    value={form.WiFi}
                    onClick={handleRadioMultiple}
                    labels={[
                        'None',
                        'Free',
                        'Paid'
                    ]} 
                />

                <FormRadio 
                    name="RestaurantsTakeOut" 
                    value={form.RestaurantsTakeOut} 
                    fieldName="Does your business provide takeout? "  
                    onClick={handleRadio}
                />

                <FormRadio 
                    name="WheelchairAccessible" 
                    value={form.WheelchairAccessible} 
                    fieldName="Does your business provide wheelchair? "  
                    onClick={handleRadio}
                />

                <FormCheckbox
                    name="BestNights" 
                    fieldName="Choose the day that is your best night" 
                    value={form.BestNights} 
                    onClick={handleCheckBox}
                    labels={[
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday'
                    ]} 
                />

                <FormControl className="form-item">
                    <Button onClick={e => submit(e)} type="submit" variant="outlined" color="primary">Submit</Button>
                </FormControl>
                
                    
            </form>

        </Fragment>
    )
}

export default BusinessForm
