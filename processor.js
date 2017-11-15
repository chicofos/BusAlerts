const latitudeA = 29.092743;
const longitudeA = -111.034991;

const latitudeB = 29.095348;
const longitudeB = -111.024048;
const direction = 70;

exports.processData = (data) => {
    
    return new Promise((resolve,reject) => {

        data.ubicaciones
            .map((bus) => {
                if(bus.latitud >= latitudeA && bus.longitud >= longitudeA){
                    if(bus.latitud <= latitudeB && bus.longitud <= longitudeB){
                        if(bus.direccion >= direction && bus.direccion <= (direction + 10)) 
                            resolve({ status: true })
                    }
                }
            })

            resolve({ status: false, message: "All out of range"})
    })   
}