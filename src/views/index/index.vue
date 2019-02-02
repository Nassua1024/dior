<template>
    <div class="index">
        <ul>
            <li>
                <a href="javascript: ">
                    <img src="../../assets/image/index-day1.png" />
                    <p>DAY 1</p>
                    <p>独一无二的</p> 
                    <p>迪奥花园</p>
                    <p class="label">已完成</p> 
                </a>
                <i></i>
            </li>
            <li>
                <a href="javascript: ">
                    <img src="../../assets/image/index-day2.png" />
                    <p>DAY 2</p>
                    <p>高科技的</p> 
                    <p>真实护肤功效</p>
                    <p class="label">已完成</p>
                </a>
                <i></i> 
            </li>
            <li>
                <a href="javascript: ">
                    <img src="../../assets/image/index-day3.png" />
                    <p>DAY 3</p>
                    <p>独特喜悦的</p> 
                    <p>感官体验</p>
                    <p class="label">已完成</p>
                </a>
                <i></i>
            </li>
            <li>
                <a href="javascript: ">
                    <img src="../../assets/image/index-day4.png" />
                    <p>DAY 4</p>
                    <p>可持续发展</p>
                    <p class="label">已完成</p>
                </a>
                <i></i>
            </li>
            <li>
                <a href="javascript: ">
                    <img src="../../assets/image/index-day5.png" />
                    <p>中级任务</p>
                    <p>格兰维尔玫瑰故事大赛</p> 
                    <p class="label">已完成</p>
                </a>
                <i></i>
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
</script>

<style lang="less">
    .index {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 80px 30px;
        background: url('../../assets/image/index.jpg') no-repeat center center;
        background-size: 100% 100%;
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
                position: relative;
                display: flex;
                width: 330px;
                height: 330px;
                margin-bottom: 30px;
                border: solid 1px #fff;
                justify-content: space-around;
                align-items: center;
                a {
                    display: inline-block;
                    text-align: center;
                    img {
                        width: 86px;
                        margin-bottom: 28px;
                    }
                    p {
                        line-height: 1.5;
                        color: #000;
                    }
                    .label {
                        text-decoration: underline;
                    }
                }
                i {
                    position: absolute;
                    right: 24px;
                    top: 24px;
                    width: 54px;
                    height: 54px;
                    background: #fff url('../../assets/image/clock.png') no-repeat center center;
                    background-size: 28px; 
                    border-radius: 50%;
                }
                &:last-child {
                    width: 100%;
                }
            }
        }
    }
</style>
