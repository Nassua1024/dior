<template>
    <div class="check-evaluate">
        <ul>
            <li>
                <div :class="isListen ? 'volume active' : 'volume'">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>00:30:24</span>
                <a class="volumn-btn" herf="javascript: " @click="handleClick">收听</a>
            </li>
        </ul>
        <div class="form">
            <textarea placeholder="请输入您的评价（最多输入300字）" maxlength="300" />
            <a href="javascript: " @click="handleSubmit">提交</a>
        </div>
    </div>
</template>

<script>
    /**
     * @author nassua
     * @desc 评价
     * @time 2019-02-02
    */
   
    export default {
        data() {
            return {
                isListen: false,
                evaluate: ''
            } 
        },
        methods: {
            
            // 收听
            handleClick() {
                this.isListen = !this.isListen
            },

            // 提交
            handleSubmit() {
                if (!this.evaluate) {
                    Toast({
                        message: '请填写您的评价',
                        position: 'top',
                        duration: 1000
                    })
                    return
                }
            }
        }
    }
</script>

<style lang="less">
    .check-evaluate {
        height: 100%;
        box-sizing: border-box;
        padding: 30px 15px;
        background: #f5f5f5;
        ul {
            padding: 0 15px;
            background: #fff;
            border-radius: 5px;
            li {
                position: relative;
                padding: 40px 0;
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
            }
        }
        .active span {
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
        .form {
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: 200px;
            background: #ddd;
            border: 3px solid #e7a9a9;
            textarea {
                display: block;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 20px;
                background: transparent;
                line-height: 1.5;
            }
            a {
                position: absolute;
                left: 50%;
                bottom: -35px;
                width: 160px;
                height: 70px;
                margin-left: -80px;
                background: #e7a9a9;
                border-radius: 30px;
                text-align: center;
                line-height: 70px;
                font-size: 28px;
                color: #000;
            }
        }
    }
</style>