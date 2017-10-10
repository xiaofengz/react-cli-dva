import {
    ACTION_TYPES
} from "CONSTS/consts";

export function changeDialog(dialogType) {
    return {
        dialogType,
        type: ACTION_TYPES.DIALOG.CHANGE_DIALOG
    };
}

export function changeDeleteFn(fn) {
    return {
        deleteFn: fn,
        type: ACTION_TYPES.DIALOG.CHANGE_DELETE_FN
    };
}

export function changeUpload(uploadType) {
    return {
        uploadType,
        type: ACTION_TYPES.DIALOG.CHANGE_UPLOAD
    };
}