<template>
    <div class="rank">
        <img src="../../assets/image/rank-logo.png" alt="" />
        <div class="list">
            <template v-if="!isLoad || dataList.length < 8">
                <ul v-for="(item, index) in dataList" :key="index">
                    <li>
                        <i>{{ index + 1 }}</i>
                        <span>{{ item.name }}</span>
                        <span>{{ item.score }}</span> 
                    </li>
                </ul>
            </template>
            <template v-else>
                <ul v-for="(item, index) in dataList" :key="index">
                    <li v-if="isLoad && index < 3">
                        <i>{{ index + 1 }}</i>
                        <span>{{ item.name }}</span>
                        <span>{{ item.score }}</span> 
                    </li>
                    <li class="load-more" v-if="index == Math.ceil(dataList.length / 2)" @click="loadMore"></li>
                    <li v-if="index > dataList.length - 4">
                        <i>{{ index + 1 }}</i>
                        <span>{{ item.name }}</span>
                        <span>{{ item.score }}</span> 
                    </li>
                </ul>
            </template>
        </div>
        <div class="rank-btn">
            <a href="javascript: " @click="back"></a>
        </div>
    </div>
</template>

<script>
    /**
     * @author nassua
     * @desc 排行榜
     * @time 2019-02-02
    */

    export default {
        data() {
            return {
                dataList: [
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 },
                    { name: 'nassua', score: 90 }
                ],
                isLoad: true,
            }
        },
        methods: {
            
            // 加载更多
            loadMore() {
                this.isLoad = false
            },

            // 返回首页
            back() {
                this.$router.push('index')
            }
        }
    }
</script>

<style lang="less">
    .rank {
        position: relative;
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        img {
            display: block;
            width: 100%;
        }
        .list {
            box-sizing: border-box;
            padding: 0 20px;
            height: 600px;
            overflow: auto;
        }
        li {
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #ddd;
            font-size: 28px;
            i {
                display: inline-block;
                width: 40px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border: 1px solid #ddd;
                border-radius: 50%;
            }
            span:nth-child(2) {
                display: inline-block;
                width: 60%;
                text-indent: 40px;
            }
            span:nth-child(3) {
                display: inline-block;
                width: 20%;
            }
        }
        .load-more {
            width: 540px;
            height: 86px;
            margin: 10px auto;
            background: url('../../assets/image/load-more.jpg') no-repeat center center;
            background-size: 100%;
            border: none;
        }
        .rank-btn {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 292px;
            background: url('../../assets/image/rank-btn.jpg') no-repeat center bottom;
            background-size: 100%;
            a {
                display: block;
                width: 290px;
                height: 110px;
                margin: 36px auto 0;
            }
        }
    }
</style>
