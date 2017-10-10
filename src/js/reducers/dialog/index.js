import initState from 'CONSTS/initState';
import {
	ACTION_TYPES
} from "CONSTS/consts";
export default function dialog(state = initState, action) {
	switch (action.type) {
		case ACTION_TYPES.DIALOG.CHANGE_DIALOG:
			return {
				...state,
				dialogType: action.dialogType
			};
		case ACTION_TYPES.DIALOG.CHANGE_DELETE_FN:
			return {
				...state,
				deleteFn: action.deleteFn
			};
		case ACTION_TYPES.DIALOG.CHANGE_UPLOAD:
			return {
				...state,
				uploadType: action.uploadType
			};
		default:
			return state;
	}
}