import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            //add data to existing state
            //manipulate state cannot mutate must return a new state
            return state.concat([ action.payload.data ]);
    }
    return state;
}