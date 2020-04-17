<template>
    <div class="editAddress">
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            :address-info="AddressInfo"
            @save="onSave"
            @delete="onDelete"
        />
    </div>
</template>
<script>
import areaList from "@/assets/js/area.js";
export default {
    name: "EditAddress",
    data() {
        return {
            areaList, //地区列表
            // searchResult: [], //详细地址列表
            AddressInfo: {
                //收货人信息初始值
                id: 36, //每条地址的唯一标识	number | string
                name: "哦们", //收货人姓名	string
                tel: "12345632563", //收货人手机号	string
                // province: "山西省", //省份	string
                // city: "晋城市", //城市	string
                // county: "墨墨县", //区县	string
                addressDetail: "活动时间坎发光时代", //详细地址	string
                areaCode: "140702", //地区编码，通过省市区选择获取（必填）	string
                postalCode: "383669", //邮政编码	string
                isDefault: true //是否为默认地址	boolean
            }
        };
    },
    methods: {
        onSave(item) {
            console.log(item);
        },
        onDelete() {
            if (this.$route.params.id != 0) {
                console.log("delete 操作");
            }
            this.$router.go(-1); //返回上一层
        }
    }
};
</script>
<style lang='less' >
.editAddress {
    .van-address-edit {
        padding: 0;
    }
    .van-address-edit__fields,
    .van-address-edit__default {
        border-radius: 0;
    }
    .van-address-edit__buttons {
        padding-left: 3%;
        padding-right: 3%;
    }
    .van-address-edit__fields > div:not(:last-child) {
        span::after {
            content: "*";
            color: red;
        }
    }
}
</style>