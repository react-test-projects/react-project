export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
        payload: user
    }
};
