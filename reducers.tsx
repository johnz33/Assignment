import dataReducer from "./dataReducers";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    data:dataReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;