import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf, fetchSmurfs } from "../actions";

const SmurfForm = props => {

    const  [formData, setFormData] = useState({
        name:"",age:"",height:"",
    }); //SET USESTATE

const handleChanges = e => { //CHANGE NAMES 
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    }

// const handleAgeChanges = e => { //CHANGE age 
//     setFormData({
//         ...formData,
//         age: e.target.value
//         });
//     }

// const handleHeightChanges = e => { // HIGHT CHANGE
//     setFormData({
//         ...formData,
//         height: e.target.value
//         })
//     }

const handleSubmit = e => { // PREVENT FROM REFRESHING
    e.preventDefault();
    props.postSmurf({ ...formData, id: props.smurfs.length });
    setFormData({
        name: "",
        age: "",
        height: ""
        });
    props.fetchSmurfs();
    };

    

return (
    <div>
        <form
        onSubmit={handleSubmit}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}
        >
        <input
            type="text"     //INPUT ONE 
            name="name"
            value={formData.name}
            onChange={handleChanges}
            placeholder="Name"
            />
        <input                          // INPUT TWO 
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChanges}
            placeholder="Age"
        />
        <input              //INPUT THREE
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChanges}
            placeholder="Height"
        />
        <button>Add Smurf</button>  
        </form>
    </div>
      );
}

const mapState = state => {   //MAP THRU STATE
    return {
        smurfs: state.smurfListReducer.smurfs,
        isPosting: state.smurfFormReducer.isPosting,
        error: state.smurfFormReducer.error
    }
}

export default connect (
    mapState,{postSmurf,fetchSmurfs})
    (SmurfForm)




