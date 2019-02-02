<template>
    <div class="check-list">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待审核</mt-tab-item>
            <mt-tab-item id="2">已通过</mt-tab-item>
            <mt-tab-item id="3">已退回</mt-tab-item>
        </mt-navbar>
        <div class="day-btn">
            <a href="javascript: ">Day 1</a>
            <a href="javascript: ">Day 3</a>
            <a href="javascript: ">Day 4</a>
            <a href="javascript: ">Day 5</a>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell title="员工编号1" to="//github.com" is-link />
                <mt-cell title="员工编号2" to="//github.com" is-link />
                <mt-cell title="员工编号3" to="//github.com" is-link />
                <mt-cell title="员工编号4" to="//github.com" is-link />
                <mt-cell title="员工编号5" to="//github.com" is-link />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'content ' + n" :key="n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'content ' + n" :key="n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    /**
     * @author nassua
     * @desc 柜长查看列表页
     * @time 2019-02-02
    */

    export default {
        data() {
            return {
                selected: '1'
            }
        },
    }
</script>

<style lang="less">
    .check-list {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-y: auto;
        .mint-navbar a {
            height: 80px;
            padding: 0;
            .mint-tab-item-label {
                line-height: 80px;
            }
        }
        .day-btn {
            display: flex;
            justify-content: space-around;
            padding: 25px 0;
            a {
                width: 120px;
                height: 50px;
                border: 1px solid #ddd;
                border-radius: 40px;
                text-align: center;
                line-height: 50px;
                color: #000;
            }
        }
        .mint-tab-container {
            box-sizing: border-box;
            padding: 0 15px;
            .mint-cell {
                height: 100px;
                margin-bottom: 15px;
                line-height: 100px;
                .mint-cell-wrapper {
                    box-sizing: border-box;
                    padding: 0 20px;
                    line-height: 100px;
                    font-size: 28px;
                }
            }
        }
    }
</style>
