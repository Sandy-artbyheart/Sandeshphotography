import storage from "../config/firebase"

export const getCategories = () => {
    const storageRef = storage.ref()
    return new Promise((resolve, reject) => {
        storageRef.listAll().then(res => {
            resolve(res.prefixes)
        })
            .catch(err => {
                reject('Failed to load categories')
            })
    })
}

export const getFirstImage = (directory) => {
    const storageRef = storage.ref(directory)
    return new Promise((resolve, reject) => {
        console.log(storageRef.listAll().then(res => {
            console.log(res)
        }), directory)
    })
}
export const getCategoryImages = (directory) => {
    const storageRef = storage.ref(directory)
    return new Promise((resolve, reject) => {
        storageRef.listAll().then(res => {
            resolve(res.items)
        })
            .catch(err => {
                reject('Failed to load images')
            })
    })
}
