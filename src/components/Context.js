import React, { Component } from 'react';
//import { storeProduct, detailProduct } from "../data";


export const DataContext = React.createContext()

class DataProvider extends Component {
    state = {
        products: [
            {
                id: 1,
                title: "Sony Xperia 5 III",
                img: "image/1.jpg",
                //"https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Sony_sony_xperia_5_iii_0414080814851_360x270.jpg",
                company: "SONY",
                info: "Sony Xperia 5 III uses a 6.1-inch FHD+ resolution HDR OLED screen with a 120Hz screen update rate and 240Hz touch sampling rate, providing a smooth operating experience. The screen continues with a 21:9 display ratio, supports X1 for mobile image processing technology, and has built-in CinemaWide, director mode and other display functions; the front is covered with Gorilla Glass 6 glass.",
                count: 1,
                price: 100,

            },
            {
                id: 2,
                title: "Sony Xperia 10 III",
                img: "image/2.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Sony_sony_xperia_10_iii_0414081014936_360x270.jpg",
                company: "SONY",
                info: "Sony Xperia 10 III uses a 6-inch FHD+ resolution HDR OLED screen with a 21:9 display ratio, a 120Hz touch sampling rate, and supports TRILUMINOS display for mobile primary color display technology to provide a broad visual experience. The front is covered with Gorilla Glass 6 glass.",
                count: 1,
                price: 250,

            },
            {
                id: 3,
                title: "Sony Xperia 1",
                img: "image/3.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Sony_sony_xperia_1_0225084425650_360x270.jpg",
                company: "SONY",
                info: "Sony Xperia 1 is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 450,

            },
            {
                id: 4,
                title: "Sony Xperia 1 II ",
                img: "image/4.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Sony_sony_xperia_1_2_0224083724232_360x270.jpg",
                company: "SONY",
                info: "Sony Xperia 1 is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 650,

            },
            {
                id: 5,
                title: "OPPO Reno6 Z 5G",
                img: "image/5.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/OPPO_oppp_reno6_z_5g_0721084921843_360x270.jpg",
                company: "OPPO",
                info: "OPPO..... is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 750,

            },
            {
                id: 6,
                title: "OPPO Reno7 5G",
                img: "image/6.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/OPPO_oppo_reno7_1125094225234_360x270.jpg",
                company: "OPPO",
                info: "OPPO......  is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 850,

            },
            {
                id: 7,
                title: "SAMSUNG Galaxy S21",
                img: "image/7.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/SAMSUNG_samsung_galaxy_s21_fe_0104062004124_360x270.jpg",
                company: "SAMSUNG",
                info: "SAMSUNG....  is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 1150,

            },
            {
                id: 8,
                title: "SAMSUNG S21 Ultra 5G",
                img: "image/8.jpg",
                //img: "https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/SAMSUNG_samsung_galaxy_s21_ultra_0114165014616_360x270.jpg",
                company: "SAMSUNG",
                info: "SAMSUNG.... is equipped with a 6.5-inch 21:9 CinemaWide 4K HDR OLED screen, the surface is covered with Corning Gorilla sixth-generation glass, with ITU-R BT.2020 ultra-wide color gamut, DCI P3 wide color gamut standard and D65 light source color rendering technology, It also uses Sony BRAVIA TV technology and X1 for mobile image processing technology to support HDR precision enhancement to ensure clearer contrast, richer colors, and sharper details of programs and all audiovisual content.",
                count: 1,
                price: 1200,

            },
        ],
        cart: [],
        totallyPrice: 0
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const checkItem = cart.every(item => {
            return item.id !== id //true false false false false........
        })
        //console.log(checkItem) //按第一次:true(addbtn(id)比對cart品項id) 之後都是false(因為有第三個同個cart品項id，故無法比對，所以是false)

        if (checkItem) {
            const data = products.filter(product => { //1.結果id= true 
                return product.id === id
            })
            this.setState({ cart: [...cart, ...data] }) //2.執行:this.setState，並且放入一個true的id值 到cart 中
        }
        else {
            alert("The product has been added to cart.") //3.id 為 fales則挑出視窗，不會加入購物車
        }

    }

    increase = (id) => {
        // alert("+++++")測試increase按鈕
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotallyPrice()
    }

    decrease = (id) => {
        //alert("-----")//測試decrease按鈕
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) { // item.count === 1 ? item.count = 1 : item.count = item.count - 1;
                if (item.count === 1) {
                    item.count = 1
                }
                else {
                    item.count = item.count - 1;
                }
            }
        })
        this.setState({ cart: cart });
        this.getTotallyPrice()
    }

    removeCartItem = (id) => {
        //alert(id)
        const { cart } = this.state
        cart.forEach((item, index) => {
            if (item.id === id) {
                cart.splice(index, 1) //1. index(索引)的位置開始，1代表刪除一個元素 2.splice() 方法可以刪除既有元素／或加入新元素來改變一個陣列的內容。
                alert("Do you want to remove one of the item...??")
            }
        })
        this.setState({ cart: cart });
        this.getTotallyPrice()
    };

    getTotallyPrice = () => {
        const { cart } = this.state
        const res = cart.reduce((prev, item) => {//範例:array1.reduce(previousValue, currentValue) => previousValue + currentValue,
            return prev + (item.price * item.count); //reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
        }, 0)
        this.setState({ totallyPrice: res })
    }
    /*
    函式會傳入上一次的結果以及目前索引陣列的值，函式需回傳計算結果，並把計算結果在丟到下一次的計算，一直跑到這個陣列的最後一個值。
      const array1 = [1, 2, 3, 4];
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      // 1 + 2 + 3 + 4
      console.log(array1.reduce(reducer));
      // expected output: 10
      // 5 + 1 + 2 + 3 + 4
      console.log(array1.reduce(reducer, 5));
      // expected output: 15
    */

    clearAllCart = () => {
        this.setState(() => {
            return { cart: [] };
        },
            () => {
                this.getTotallyPrice();
            }
        )
    }

    //儲存資料到localStorage (cart + totallyPrice)
    componentDidMount() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if (dataTotal !== null) {
            this.setState({ totallyPrice: dataTotal });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.totallyPrice))
    };


    render() {
        //const { products } = this.state //寫法 1.解構賦值(變數名稱 const { products } === state.products(所有物件))
        //const productItems = this.state.products //寫法 2 :不用解構賦值取值
        const { products } = this.state
        const { addCart, increase, decrease, removeCartItem, getTotallyPrice, clearAllCart } = this; //解構賦值==>addCart = (id) => {const { products, cart } = this.state;.....}
        const { cart } = this.state
        const { totallyPrice } = this.state
        return (
            <DataContext.Provider value={{ products, addCart, cart, increase, decrease, removeCartItem, totallyPrice, getTotallyPrice, clearAllCart }}>
                {this.props.children}
            </DataContext.Provider>
            //1.value={{ products }} 2.value={{ productItems }}
            //2.props 的值 =value的值 沒加入props.children React 會報錯


            //children：代表要 render 的內容，會是一個 function
            //children function 接受一個參數：
            //value：代表 Consumer(等於this.context) 接收到的值，與 props 一樣，可能為任意的值。
            //而 children function 會回傳一個值：
            //React element：即代表要 render 出來顯示在畫面上的內容
            //contextType 的屬性。此屬性的用處與 Context.Consumer 相同
            //
        );
    }
}

export default DataProvider;
