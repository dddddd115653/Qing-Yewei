export default {
    //购物车内的商品
    namespaced: true,
    state: {
        total: 0, //总额 (单位:分)
        checked: false,//是否为全选
        result: [], //当前选中的商品
        commodities: [
            {
                id: "123",
                src: "https://img.yzcdn.cn/vant/cat.jpeg",
                title: "这是",
                price: "10.15",
                describe: "10斤装",
                num: 12,
                checkedState: true
            },
            {
                id: "546",
                src: "https://img.yzcdn.cn/vant/cat.jpeg",
                title:
                    "这是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略",
                price: "5631.15",
                describe: "10斤装",
                num: 1,
                checkedState: false
            },
            {
                id: "13",
                src: "https://img.yzcdn.cn/vant/cat.jpeg",
                title: "这是",
                price: "10.04",
                describe: "10斤装",
                num: 10,
                checkedState: false
            }
        ]
    },
    mutations: {

        cardListCheckedFn(state, id) {
            // 修改选中的商品
            let index = state.result.findIndex(item => item == id)
            if (index > -1) {
                //对商品进行取消选择
                state.result.splice(index, 1)
                state.checked = false;
            } else {
                //选中商品
                state.result.push(id)
                if (state.commodities.length == state.result.length) {
                    state.checked = true;
                }
            }
            this.commit("shoppingCart/totalFn");
        },
        checkAllStore(state) {
            //点击全选
            if (state.checked) {
                //当前 已经全选,点击全选时
                state.commodities.forEach(a => (a.checkedState = !state.checked));
                state.result = [];
                state.total = 0
                state.checked = false
            } else {
                //当前 没有全选,点击全选时
                state.result = [];
                state.commodities.forEach(a => {
                    a.checkedState = !state.checked
                    state.result.push(a.id);
                });
                state.checked = true
                this.commit("shoppingCart/totalFn");
            }
        },
        totalFn(state) {
            //修改价格
            state.total = 0;
            state.result.forEach(item => {
                let check = state.commodities.find(a => a.id == item);
                if (check != undefined) {
                    state.total += Number(check.price) * 100 * check.num;
                }
            });
        },
        setResult(state) {
            //进入页面 对选择及金额进行计算
            state.commodities.forEach(a => {
                if (a.checkedState == true) {
                    state.result.push(a.id);
                }
                if (state.result.length == state.commodities.length) {
                    state.checked = true;
                }
            });
            this.commit("shoppingCart/totalFn");
        },
        reduceQuantity(state, id) {
            //减少商品数量
            let idd = state.commodities.find(a => a.id == id);
            if (idd.num > 1) {
                idd.num--;
            }
            this.commit("shoppingCart/totalFn");
        },
        addQuantity(state, id) {
            //增加商品数量
            let idd = state.commodities.find(a => a.id == id);
            idd.num++;
            this.commit("shoppingCart/totalFn");
        },
        DeleteMerchandise(state, Value) {
            //删除商品
            let _index;
            let idd = state.commodities.find((item, index, arr) => {
                _index = index;
                return item.id == Value;
            });
            state.commodities.splice(_index, 1);
            this.commit("shoppingCart/totalFn");
            //把 idd 发给后台删除
        },
    },
    actions: {
    }
}