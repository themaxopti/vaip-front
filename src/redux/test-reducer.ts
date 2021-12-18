import React from "react"

enum Actions {
    TEST_ACTION = 'TEST_ACTION',
    TEST_ACTION2 = 'TEST_ACTION2'
}

const TEST_ACTION = 'TEST_ACTION'
const TEST_ACTION2 = 'TEST_ACTION2'

const initialState: {} = {
    test: "asdasd"
}


const testReducer = (state = initialState, action: ActionCreators) => {
    switch (action.type) {
        case Actions.TEST_ACTION:
            return { ...state, test: action.test }

        case Actions.TEST_ACTION2:
            return { ...state, test5: action.test5 }

        default:
            return state
    }
}

type ActionCreators = ChangeTestTypeInt | ChangeTestTypeInt2

interface ChangeTestTypeInt { type: typeof TEST_ACTION, test: string }
type ChangeTestType = (test: string) => ChangeTestTypeInt
export const changeTest: ChangeTestType = (test) => ({ type: TEST_ACTION, test })



interface ChangeTestTypeInt2 { type: typeof TEST_ACTION2, test5: string }
type ChangeTestType2 = (test: string) => ChangeTestTypeInt2
export const changeTest2: ChangeTestType2 = (test5: string) => ({ type: TEST_ACTION2, test5 })

export default testReducer