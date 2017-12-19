import actionsTypes from './actionsTypes';
import api from '../data/api';



let actions = {
    getListCars(){
        return {
            type: actionsTypes.GET_LIST_CARS,
            list: api
        }
    },
    addCoordinatesCar(name, properties) {
        return {
            // type: actionsTypes.ADD_CAR,
            // name: name,
            // properties: properties
        }
    },
    addCar(name, properties) {
        return {
            // type: actionsTypes.ADD_CAR,
            // name: name,
            // properties: properties
        }
    },
    editCar(name, properties) {
        return {
            // type: actionsTypes.EDIT_CAR,
            // name:

        }
    },
    deleteCar(name, properties) {
        return {

        }
    }
}

export default actions