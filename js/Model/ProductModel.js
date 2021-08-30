export default class ProductModel {
    constructor(data){
        this.name= data.name || ''
        this.description= data.description || ''
        this.imageUrl= data.imageUrl || ''
        this.price= data.price || ''
        this.varnish = data.varnish || ''
        this._id= data._id || ''
    }

}

