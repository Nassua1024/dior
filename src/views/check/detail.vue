<template>
    <div class="check-detail">
        <h3>员工编号1</h3>
        <ul>
            <li>Day 1</li>
            <li>
                <div class="volume active">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>00:30:24</span>
                <a class="volumn-btn" herf="javascript: ">收听</a>
            </li>
            <li class="btn">
                <a href="javascript: ">退回</a>
                <a href="javascript: ">通过</a>
            </li>
        </ul>
    </div>
</template>

<script>
    /**
     * @author nassua
     * @desc 首页
     * @time 2019-02-02
    */

    export default {}
</script>

<style lang="less">
    .check-detail {
        height: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        background: #f5f5f5;
        h3 {
            position: relative;
            box-sizing: border-box;
            height: 100px;
            line-height: 100px;
            font-size: 28px;
            text-indent: 15px;
            &:before {
                position: absolute;
                left: 0;
                top: 50%;
                width: 4px;
                height: 34px;
                margin-top: -17px;
                background: #e7a9a9;
                content: ''; 
            }
        }
        ul {
            padding: 0 15px;
            background: #fff;
            border-radius: 5px;
            li {
                position: relative;
                padding: 30px 0;
                border-bottom: 1px solid #ddd;
                .volumn-btn {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    background: #e7a9a9;
                    color: #fff;
                }
                a {
                    width: 130px;
                    height: 46px;
                    margin-top: -20px;
                    border-radius: 32px;
                    text-align: center;
                    line-height: 46px;
                }
                &:first-child {
                    font-size: 28px;
                    font-weight: 600;
                }
                &:last-child {
                    border-bottom: none;
                    text-align: right;
                    padding: 40px 0;
                    a {
                        display: inline-block;
                        border: 1px solid #e7a9a9;
                        line-height: 48px;
                        color: #000;
                    }
                }
            }
        }
        .volume span {
            animation: load 1s ease infinite;
        }
        .volume {
            display: inline-block; 
            width: 80px;
            height: 20px;
            span {
                display: inline-block;
                width: 4px;
                height: 100%;
                border-radius: 4px;
                background: #e7a9a9;
                transform: translateY(-50%);
            }
        }
        @keyframes load {
            0%, 100%{
                height: 10px;
                background: #e7a9a9;
            }
            50% {
                height: 30px;
                margin: -15px 0;
                background: #e7a9a9;
            }
        }
        .volume span:nth-child(2) {
            animation-delay: 0.2s;
        }
        .volume span:nth-child(3) {
            animation-delay: 0.4s;
        }
        .volume span:nth-child(4) {
            animation-delay: 0.6s;
        }
        .volume span:nth-child(5) {
            animation-delay: 0.8s;
        }
    }
</style>
