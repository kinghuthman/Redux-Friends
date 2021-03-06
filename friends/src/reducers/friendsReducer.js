import {
    FETCHING_FRIENDS,
    FETCHED_FRIENDS,
    ADDING_FRIENDS,
    ADDED_FRIENDS,
    ERROR
} from '../actions/actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    fetchedFriends: false,
    addingFriends: false,
    addedFriends: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true,
            })
        case FETCHED_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: false,
                fetchedFriends: true,
                friends: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                fetchedFriends: false,
                error: action.payload
            })
            case ADDING_FRIENDS:
            return Object.assign({}, state, {
                savingFriends: true
            })
        case ADDED_FRIENDS:
            return Object.assign({}, state, {
                savingFriends: false,
                savedFriends: true,
                friends: [...state.friends, action.payload]
            })
        default:
            return state;
    }
}