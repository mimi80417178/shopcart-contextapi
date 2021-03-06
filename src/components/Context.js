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
        //console.log(checkItem) //????????????:true(addbtn(id)??????cart??????id) ????????????false(????????????????????????cart??????id??????????????????????????????false)

        if (checkItem) {
            const data = products.filter(product => { //1.??????id= true 
                return product.id === id
            })
            this.setState({ cart: [...cart, ...data] }) //2.??????:this.setState?????????????????????true???id??? ???cart ???
        }
        else {
            alert("The product has been added to cart.") //3.id ??? fales???????????????????????????????????????
        }

    }

    increase = (id) => {
        // alert("+++++")??????increase??????
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
        //alert("-----")//??????decrease??????
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
                cart.splice(index, 1) //1. index(??????)??????????????????1???????????????????????? 2.splice() ????????????????????????????????????????????????????????????????????????????????????
                alert("Do you want to remove one of the item...??")
            }
        })
        this.setState({ cart: cart });
        this.getTotallyPrice()
    };

    getTotallyPrice = () => {
        const { cart } = this.state
        const res = cart.reduce((prev, item) => {//??????:array1.reduce(previousValue, currentValue) => previousValue + currentValue,
            return prev + (item.price * item.count); //reduce() ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        }, 0)
        this.setState({ totallyPrice: res })
    }
    /*
    ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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

    //???????????????localStorage (cart + totallyPrice)
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
        //const { products } = this.state //?????? 1.????????????(???????????? const { products } === state.products(????????????))
        //const productItems = this.state.products //?????? 2 :????????????????????????
        const { products } = this.state
        const { addCart, increase, decrease, removeCartItem, getTotallyPrice, clearAllCart } = this; //????????????==>addCart = (id) => {const { products, cart } = this.state;.....}
        const { cart } = this.state
        const { totallyPrice } = this.state
        return (
            <DataContext.Provider value={{ products, addCart, cart, increase, decrease, removeCartItem, totallyPrice, getTotallyPrice, clearAllCart }}>
                {this.props.children}
            </DataContext.Provider>
            //1.value={{ products }} 2.value={{ productItems }}
            //2.props ?????? =value?????? ?????????props.children React ?????????


            //children???????????? render ???????????????????????? function
            //children function ?????????????????????
            //value????????? Consumer(??????this.context) ????????????????????? props ?????????????????????????????????
            //??? children function ?????????????????????
            //React element??????????????? render ?????????????????????????????????
            //contextType ????????????????????????????????? Context.Consumer ??????
            //
        );
    }
}

export default DataProvider;
