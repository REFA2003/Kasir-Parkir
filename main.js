function parking(){
    let vehicle =document.getElementById("uwow").value;
    let timeDuration = parseInt(document.getElementById("ngasal").value);
    let defaultPriceMobil = 10000;
    let nextPriceMobil = 5000;
    let defaultPriceMotor = 5000;
    let nextPriceMotor = 2500;
    console.log(timeDuration)
    if (vehicle === "mobil") {
        
        if (timeDuration <= 2) {
            alert(`biaya dari parkir Mobil anda adalah ${defaultPriceMobil}`);
        } else{
            let additionalTime = timeDuration -2;
            let additionalprice = nextPriceMobil * additionalTime;
            let fixPrice = defaultPriceMobil + additionalprice;
            alert(`biaya dari parkir Mobil anda adalah ${fixPrice}`);
        }
    } else if (vehicle === "motor"){
        
        if(timeDuration <= 2) {
            alert(`biaya dari parkir Motor anda adalah ${defaultPriceMotor}`);
        } else {
            let additionalTime = timeDuration - 2;
            let additionalprice = nextPriceMotor * additionalTime;
            let fixPrice = defaultPriceMotor + additionalprice;
            alert(`biaya dari parkir Motor anda adalah ${fixPrice}`);
        }
    } 
}