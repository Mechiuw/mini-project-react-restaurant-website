import table from "../Table.jsx";

export default function TableService(){
    let tables = [];

    const getAll = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(tables.length > 0){
                    resolve(tables);
                }else {
                    reject('error getting menu')
                }
            })
        })
    }

    const create = function (table)  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(table){
                    tables = [...tables,table]
                    resolve('success add table')
                } else {
                    reject('error add table')
                }
            })
        })
    }

    const update = (tables) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if(table){
                    table = tables.map((t) => {
                        if(t.id === table.id){
                            return {...table}
                        }
                        return t;
                    })
                    resolve('success update menu')
                } else {
                    reject('error update menu')
                }
            },100)
        })
    }

    const deleteTable = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(id){
                    const index = tables.findIndex((t) => t.id === id)
                    const x = [...tables]
                    x.splice(index,1)
                    tables = x;
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
        deleteTable
    }
}