export default function menuService() {
    let menus = []

    const create = function (menu) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(menu){
                    menus = [...menus,menu]
                    resolve('success add menu')
                } else {
                    reject('error add menu')
                }
            },100)
        })
    }

    const update = (menu) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(menu){
                    menu = menus.map((m) => {
                        if(m.id === menu.id){
                            return {...menu}
                        }
                        return m;
                    })
                    resolve('success update menu')
                } else {
                    reject('error update menu')
                }
            },100)
        })
    }

    const getAll = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(menus.length > 0){
                    resolve(menus)
                } else {
                    reject('error getting menu')
                }
            },100)
        })
    }

    const deleteMenu = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(id){
                    const index = menus.findIndex((m) => m.id === id)
                    const a = [...menus]
                    a.splice(index,1)
                    menus = a;
                    resolve('success delete menu')
                } else {
                    reject('error deleting menu')
                }
            })
        })
    }

    return {
        getAll,
        create,
        update,
        deleteMenu
    }
}